/* KGF CPTA Dashboard - read-only view
   Data source: data.js (maintained by Site SHE only) */

const LBL = CPTA_DATA.milestoneLabels;
const rows = CPTA_DATA.assignments;

const doneOf = r => r.milestones.filter(Boolean).length;
const pctOf = r => Math.round(doneOf(r) / LBL.length * 100);
const cls = p => p >= 80 ? "good" : p >= 40 ? "warn" : "bad";

function statusOf(r) {
  const n = doneOf(r);
  if (n === LBL.length) return "Certified";
  if (n === 0) return "Not Started";
  return "In Progress";
}

/* ---------- KPIs ---------- */
function renderKpis() {
  const done = rows.reduce((a, r) => a + doneOf(r), 0);
  document.getElementById("kCap").innerText = new Set(rows.map(r => r.capability)).size;
  document.getElementById("kNom").innerText = new Set(rows.map(r => r.nominee)).size;
  document.getElementById("kAsg").innerText = rows.length;
  document.getElementById("kPct").innerText = Math.round(done / (rows.length * LBL.length) * 100) + "%";
  document.getElementById("kCert").innerText = rows.filter(r => statusOf(r) === "Certified").length;
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
        <div><b>${c}</b><div class="meta">${list[0].capCode} &middot; ${list[0].route}</div></div>
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
    (!q || r.nominee.toLowerCase().includes(q) ||
           r.capability.toLowerCase().includes(q) ||
           r.id.toLowerCase().includes(q))
  );

  document.getElementById("count").innerText = view.length + " of " + rows.length;

  const mHead = LBL.map((l, i) => `<th title="${l}">M${i + 1}</th>`).join("");

  const body = view.map(r => {
    const p = pctOf(r);
    const st = statusOf(r);
    const roleCls = r.role === "Lead" ? "lead" : "backup";
    const stCls = st === "Certified" ? "st-done" : st === "In Progress" ? "st-prog" : "st-new";

    const marks = r.milestones.map((v, i) =>
      `<td><span class="ms ${v ? "on" : "off"}" title="${LBL[i]}: ${v ? "Completed" : "Pending"}">${v ? "&#10003;" : ""}</span></td>`
    ).join("");

    return `<tr>
      <td><span class="idc">${r.id}</span></td>
      <td>${r.capability}<div class="meta">${r.capCode} &middot; ${r.capType}</div></td>
      <td>${r.nominee}<div class="meta">${r.email}</div></td>
      <td><span class="pill ${roleCls}">${r.legacyRole}</span></td>
      ${marks}
      <td class="pct ${cls(p)}">${p}%</td>
      <td><span class="pill ${stCls}">${st}</span></td>
    </tr>`;
  }).join("");

  document.getElementById("tbl").innerHTML = `
    <thead><tr>
      <th>ID</th><th>Capability</th><th>Nominee</th><th>Role</th>
      ${mHead}<th>%</th><th>Status</th>
    </tr></thead>
    <tbody>${body || `<tr><td colspan="11" class="empty">No records match the filters</td></tr>`}</tbody>`;
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

/* ---------- CSV ---------- */
function exportCsv() {
  const head = ["ID", "Capability", "Code", "Type", "Route", "Nominee", "Email", "Role", ...LBL, "Percent", "Status"];
  const lines = [head.join(",")].concat(rows.map(r => [
    r.id, r.capability, r.capCode, r.capType, r.route, r.nominee, r.email, r.legacyRole,
    ...r.milestones.map(v => v ? "Yes" : "No"),
    pctOf(r) + "%", statusOf(r)
  ].map(v => `"${String(v).replace(/"/g, '""')}"`).join(",")));

  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([lines.join("\n")], { type: "text/csv" }));
  a.download = "CPTA_Status.csv";
  a.click();
}

/* ---------- Boot ---------- */
document.getElementById("btnCsv").onclick = exportCsv;
document.getElementById("stamp").innerText =
  "Last updated " + CPTA_DATA.updated + "  |  " + rows.length + " assignments across " +
  new Set(rows.map(r => r.capability)).size + " capability streams";

buildFilters();
renderKpis();
renderCaps();
renderTable();
