/* KGF CPTA Dashboard - app logic */

const STORE = "kgf_cpta_state_v2";
const LBL = CPTA_DATA.milestoneLabels;

let rows = JSON.parse(JSON.stringify(CPTA_DATA.assignments));

const saved = localStorage.getItem(STORE);
if (saved) {
  try {
    const s = JSON.parse(saved);
    rows.forEach(r => {
      const m = s.find(x => x.id === r.id);
      if (m) { r.milestones = m.milestones; r.evidence = m.evidence; r.remarks = m.remarks; }
    });
  } catch (e) { console.warn(e); }
}

const pctOf = r => Math.round(r.milestones.filter(Boolean).length / LBL.length * 100);
const cls = p => p >= 80 ? "good" : p >= 40 ? "warn" : "bad";

function statusOf(r) {
  const n = r.milestones.filter(Boolean).length;
  if (n === LBL.length) return "Certified";
  if (n === 0) return "Not Started";
  return "In Progress";
}

function save() {
  localStorage.setItem(STORE, JSON.stringify(rows));
  toast("Saved on this device. Use Export to publish for everyone.");
}

function toast(msg) {
  const t = document.getElementById("toast");
  t.innerText = msg;
  t.style.display = "block";
  clearTimeout(t._h);
  t._h = setTimeout(() => t.style.display = "none", 2800);
}

/* ---------- KPIs ---------- */
function renderKpis() {
  const caps = new Set(rows.map(r => r.capability)).size;
  const noms = new Set(rows.map(r => r.nominee)).size;
  const done = rows.reduce((a, r) => a + r.milestones.filter(Boolean).length, 0);
  const overall = Math.round(done / (rows.length * LBL.length) * 100);
  const certified = rows.filter(r => statusOf(r) === "Certified").length;

  document.getElementById("kCap").innerText = caps;
  document.getElementById("kNom").innerText = noms;
  document.getElementById("kAsg").innerText = rows.length;
  document.getElementById("kPct").innerText = overall + "%";
  document.getElementById("kCert").innerText = certified;
  document.getElementById("kNs").innerText = rows.filter(r => statusOf(r) === "Not Started").length;
}

/* ---------- Capability progress ---------- */
function renderCaps() {
  const map = {};
  rows.forEach(r => (map[r.capability] = map[r.capability] || []).push(r));

  document.getElementById("caps").innerHTML =
    Object.keys(map).sort().map(c => {
      const list = map[c];
      const p = Math.round(list.reduce((a, r) => a + pctOf(r), 0) / list.length);
      return `<div class="cap-row">
        <div><b>${c}</b><div style="color:#94a3b8;font-size:11px">${list[0].capCode} &middot; ${list[0].route}</div></div>
        <div class="bar"><span class="${cls(p)}" style="width:${p}%"></span></div>
        <div class="pct ${cls(p)}">${p}%</div>
      </div>`;
    }).join("");
}

/* ---------- Table ---------- */
function renderTable() {
  const fCap = document.getElementById("fCap").value;
  const fRole = document.getElementById("fRole").value;
  const fRoute = document.getElementById("fRoute").value;
  const fStat = document.getElementById("fStatus").value;
  const q = document.getElementById("fSearch").value.toLowerCase();

  const view = rows.filter(r =>
    (!fCap || r.capability === fCap) &&
    (!fRole || r.role === fRole) &&
    (!fRoute || r.route === fRoute) &&
    (!fStat || statusOf(r) === fStat) &&
    (!q || r.nominee.toLowerCase().includes(q) || r.capability.toLowerCase().includes(q) || r.id.toLowerCase().includes(q))
  );

  document.getElementById("count").innerText = view.length + " of " + rows.length;

  const mHead = LBL.map((l, i) => `<th title="${l}">M${i + 1}</th>`).join("");

  const body = view.map(r => {
    const p = pctOf(r);
    const st = statusOf(r);
    const roleCls = r.role === "Lead" ? "lead" : "backup";
    const stCls = st === "Certified" ? "st-done" : st === "In Progress" ? "st-prog" : "st-new";
    const boxes = r.milestones.map((v, i) =>
      `<td><input type="checkbox" data-id="${r.id}" data-m="${i}" ${v ? "checked" : ""}></td>`).join("");
    return `<tr>
      <td><span class="idc">${r.id}</span></td>
      <td>${r.capability}<div style="color:#94a3b8;font-size:11px">${r.capCode}</div></td>
      <td>${r.nominee}<div style="color:#94a3b8;font-size:11px">${r.email}</div></td>
      <td><span class="pill ${roleCls}">${r.legacyRole}</span></td>
      ${boxes}
      <td class="pct ${cls(p)}">${p}%</td>
      <td><span class="pill ${stCls}">${st}</span></td>
      <td><input type="text" data-id="${r.id}" data-f="evidence" value="${r.evidence || ""}" placeholder="link / ref"></td>
      <td><input type="text" data-id="${r.id}" data-f="remarks" value="${r.remarks || ""}" placeholder="remarks"></td>
    </tr>`;
  }).join("");

  document.getElementById("tbl").innerHTML = `
    <thead><tr>
      <th>ID</th><th>Capability</th><th>Nominee</th><th>Role</th>
      ${mHead}<th>%</th><th>Status</th><th>Evidence</th><th>Remarks</th>
    </tr></thead>
    <tbody>${body || `<tr><td colspan="13" style="text-align:center;color:#94a3b8;padding:24px">No records match the filters</td></tr>`}</tbody>`;

  document.querySelectorAll('#tbl input[type=checkbox]').forEach(el => {
    el.onchange = e => {
      const r = rows.find(x => x.id === e.target.dataset.id);
      r.milestones[+e.target.dataset.m] = e.target.checked;
      save(); renderAll();
    };
  });

  document.querySelectorAll('#tbl input[type=text]').forEach(el => {
    el.onchange = e => {
      const r = rows.find(x => x.id === e.target.dataset.id);
      r[e.target.dataset.f] = e.target.value;
      save();
    };
  });
}

/* ---------- Filters ---------- */
function buildFilters() {
  const caps = [...new Set(rows.map(r => r.capability))].sort();
  const routes = [...new Set(rows.map(r => r.route))].sort();

  document.getElementById("fCap").innerHTML =
    `<option value="">All capabilities</option>` + caps.map(c => `<option>${c}</option>`).join("");
  document.getElementById("fRoute").innerHTML =
    `<option value="">All certification routes</option>` + routes.map(c => `<option>${c}</option>`).join("");

  ["fCap", "fRole", "fRoute", "fStatus"].forEach(id =>
    document.getElementById(id).onchange = renderTable);
  document.getElementById("fSearch").oninput = renderTable;
}

/* ---------- Export ---------- */
function exportData() {
  const body = rows.map(r =>
    `    { id: ${JSON.stringify(r.id)}, capability: ${JSON.stringify(r.capability)}, capCode: ${JSON.stringify(r.capCode)}, capType: ${JSON.stringify(r.capType)}, route: ${JSON.stringify(r.route)}, nominee: ${JSON.stringify(r.nominee)}, email: ${JSON.stringify(r.email)}, role: ${JSON.stringify(r.role)}, legacyRole: ${JSON.stringify(r.legacyRole)}, status: ${JSON.stringify(statusOf(r))}, milestones: [${r.milestones.map(Boolean).join(", ")}], evidence: ${JSON.stringify(r.evidence || "")}, remarks: ${JSON.stringify(r.remarks || "")} }`
  ).join(",\n");

  const capsBlock = CPTA_DATA.capabilities.map(c =>
    `    { name: ${JSON.stringify(c.name)}, code: ${JSON.stringify(c.code)}, type: ${JSON.stringify(c.type)}, route: ${JSON.stringify(c.route)} }`
  ).join(",\n");

  document.getElementById("exportBox").value =
`const CPTA_DATA = {

  updated: ${JSON.stringify(new Date().toDateString())},

  milestoneLabels: ${JSON.stringify(LBL)},

  capabilities: [
${capsBlock}
  ],

  assignments: [

${body}

  ]
};`;

  document.getElementById("dlg").showModal();
}

function copyExport() {
  const t = document.getElementById("exportBox");
  t.select();
  navigator.clipboard.writeText(t.value).catch(() => document.execCommand("copy"));
  toast("Copied. Paste into data.js on GitHub and commit.");
}

function downloadExport() {
  const blob = new Blob([document.getElementById("exportBox").value], { type: "text/javascript" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "data.js";
  a.click();
}

function exportCsv() {
  const head = ["ID", "Capability", "Code", "Route", "Nominee", "Email", "Role", ...LBL, "Percent", "Status", "Evidence", "Remarks"];
  const lines = [head.join(",")].concat(rows.map(r => [
    r.id, r.capability, r.capCode, r.route, r.nominee, r.email, r.legacyRole,
    ...r.milestones.map(v => v ? "Yes" : "No"),
    pctOf(r) + "%", statusOf(r), r.evidence || "", r.remarks || ""
  ].map(v => `"${String(v).replace(/"/g, '""')}"`).join(",")));

  const blob = new Blob([lines.join("\n")], { type: "text/csv" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "CPTA_Status.csv";
  a.click();
}

function resetLocal() {
  if (confirm("Discard your local edits and reload the published data?")) {
    localStorage.removeItem(STORE);
    location.reload();
  }
}

/* ---------- Boot ---------- */
function renderAll() { renderKpis(); renderCaps(); renderTable(); }

document.getElementById("btnExport").onclick = exportData;
document.getElementById("btnCsv").onclick = exportCsv;
document.getElementById("btnCopy").onclick = copyExport;
document.getElementById("btnDownload").onclick = downloadExport;
document.getElementById("btnReset").onclick = resetLocal;
document.getElementById("stamp").innerText =
  "Published data: " + CPTA_DATA.updated + "  |  " + rows.length + " assignments across " +
  new Set(rows.map(r => r.capability)).size + " capability streams";

buildFilters();
renderAll();
