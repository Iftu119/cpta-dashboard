/* =========================================================
   KGF CPTA - MASTER DATA  (maintained by Site SHE only)
   ---------------------------------------------------------
   PROGRESS: find the row, change false -> true.
     milestones: [M1, M2, M3, M4, M5]
     M1 Nominated | M2 Training Completed | M3 Assessment Done
     M4 Evidence Submitted | M5 Certified
   Always tick cumulatively: someone at M3 has M1 and M2 true.
   Do NOT edit "status" - the site recalculates it.

   ORDER: rows are grouped by capability in programme order,
   and within each capability: Lead, then Backups, then LT Owner.

   ROLES: "Lead" | "Backup" | "LT Owner"

   RESOURCES: keyed by capability name. type sets the icon:
     "standard" | "ppt" | "video" | "workday" | "site"

   Source: CP TA Proposal.xlsx - Training Path sheet
   Remember to update the "updated" date below.
   ========================================================= */

const CPTA_DATA = {

  updated: "19 Sep 2026",

  milestoneLabels: [
    "Nominated",
    "Training Completed",
    "Assessment Done",
    "Evidence Submitted",
    "Certified"
  ],

  capabilities: [
    { name: "Confined Spaces", code: "S3001", type: "CP", route: "Global Pathway" },
    { name: "Fall Prevention", code: "S3005-01", type: "CP", route: "Global Pathway" },
    { name: "Ladder", code: "S3005-02", type: "CP", route: "Global Pathway" },
    { name: "MEWP", code: "S3005-02", type: "CP", route: "Global Pathway" },
    { name: "Electrical Safety", code: "TA3 Programme", type: "TA", route: "Regional TA Evaluation" },
    { name: "Hot Work", code: "S3007", type: "CP", route: "CHSEM Viva" },
    { name: "Excavation", code: "S3006", type: "CP", route: "CHSEM Viva" },
    { name: "LOTOTO", code: "S6002", type: "CP", route: "CHSEM Viva" },
    { name: "Machinery Safety", code: "S3013", type: "CP", route: "Global Pathway" },
    { name: "Process Safety", code: "PSM TA3", type: "TA", route: "Regional TA Evaluation" },
    { name: "Flammable Liquids", code: "TA3 Programme", type: "TA", route: "Regional TA Evaluation" },
    { name: "Control of Substances Hazardous to Health", code: "S4002", type: "CP", route: "CHSEM Viva" },
    { name: "Crane and Lifting", code: "S3011", type: "CP", route: "CHSEM Viva" },
    { name: "Line Break", code: "S6003", type: "TA", route: "CHSEM Viva" },
    { name: "Boiler Safety", code: "TA3 Programme", type: "TA", route: "Regional TA Evaluation" },
    { name: "Fire Safety", code: "TA3 Programme", type: "TA", route: "Regional TA Evaluation" },
    { name: "Combustible Dust", code: "TA3 Programme", type: "TA", route: "Regional TA Evaluation" },
    { name: "MMHE", code: "S3009", type: "CP", route: "CHSEM Viva" },
    { name: "Enzyme", code: "Enzyme TA3", type: "TA", route: "Regional TA Evaluation" }
  ],

  resources: {
    "Confined Spaces": [
      { title: "S3001 Confined Space Entry Standard", type: "standard", url: "https://unilever.sharepoint.com/sites/SHE-Standards-and-Guidelines/SitePages/S3001-Confined-Space-Entry-Standard.aspx" },
      { title: "Training of Standard (PPT)", type: "ppt", url: "https://unilever.sharepoint.com/:f:/r/sites/SHE-Standards-and-Guidelines/Shared%20Documents/3000%20Safety/S3001%20-%20Confined%20Spaces/3%20-%20Training?csf=1&web=1&e=KF43Gg" },
      { title: "Training Video of S3001", type: "video", url: "https://unilever.sharepoint.com/:v:/r/sites/SHE-Standards-and-Guidelines/Shared%20Documents/3000%20Safety/S3001%20-%20Confined%20Spaces/3%20-%20Training/S3001%20Confined%20Space%20Entry%20Training.mp4?d=we41b1c856e844602af300bea5dde27bf&csf=1&web=1&e=v7WHhj" }
    ],
    "Fall Prevention": [
      { title: "S3005-01 Fall from Heights Prevention", type: "standard", url: "https://unilever.sharepoint.com/:u:/r/sites/SHE-Standards-and-Guidelines/SitePages/S3005-01%20Fall%20From%20Heights%20Prevention.aspx?csf=1&web=1&e=xozkDf" },
      { title: "S3005-02 Fall Protection Equipment", type: "standard", url: "https://unilever.sharepoint.com/:u:/r/sites/SHE-Standards-and-Guidelines/SitePages/S3005-02%20Fall%20Protection%20Equipment.aspx?csf=1&web=1&e=tznaEb" },
      { title: "S3005-03 Access Equipment for Work at Heights", type: "standard", url: "https://unilever.sharepoint.com/:u:/r/sites/SHE-Standards-and-Guidelines/SitePages/S3005-03%20Access%20Equipment%20for%20WaH.aspx?csf=1&web=1&e=S9E6ff" },
      { title: "Training of Standard (PPT)", type: "ppt", url: "https://unilever.sharepoint.com/:f:/r/sites/SHE-Standards-and-Guidelines/Shared%20Documents/3000%20Safety/S3005-01%20-%20Fall%20from%20Heights%20Prevention/3%20-%20Training?csf=1&web=1&e=CkUwqo" },
      { title: "Training Video of S3005-01 and S3005-03", type: "video", url: "https://unilever.sharepoint.com/:f:/r/sites/SHE-Standards-and-Guidelines/Shared%20Documents/3000%20Safety/S3005-01%20-%20Fall%20from%20Heights%20Prevention/3%20-%20Training?csf=1&web=1&e=CkUwqo" }
    ],
    "Ladder": [
      { title: "S3005-02 Fall Protection Equipment", type: "standard", url: "https://unilever.sharepoint.com/:u:/r/sites/SHE-Standards-and-Guidelines/SitePages/S3005-02%20Fall%20Protection%20Equipment.aspx?csf=1&web=1&e=tznaEb" },
      { title: "Training of Standard (PPT)", type: "ppt", url: "https://unilever.sharepoint.com/:f:/r/sites/SHE-Standards-and-Guidelines/Shared%20Documents/3000%20Safety/S3005-01%20-%20Fall%20from%20Heights%20Prevention/3%20-%20Training?csf=1&web=1&e=CkUwqo" },
      { title: "Training Video of S3005-01 and S3005-03", type: "video", url: "https://unilever.sharepoint.com/:f:/r/sites/SHE-Standards-and-Guidelines/Shared%20Documents/3000%20Safety/S3005-01%20-%20Fall%20from%20Heights%20Prevention/3%20-%20Training?csf=1&web=1&e=CkUwqo" }
    ],
    "MEWP": [
      { title: "S3005-02 Fall Protection Equipment", type: "standard", url: "https://unilever.sharepoint.com/:u:/r/sites/SHE-Standards-and-Guidelines/SitePages/S3005-02%20Fall%20Protection%20Equipment.aspx?csf=1&web=1&e=tznaEb" },
      { title: "Training of Standard (PPT)", type: "ppt", url: "https://unilever.sharepoint.com/:f:/r/sites/SHE-Standards-and-Guidelines/Shared%20Documents/3000%20Safety/S3005-01%20-%20Fall%20from%20Heights%20Prevention/3%20-%20Training?csf=1&web=1&e=CkUwqo" },
      { title: "Training Video of S3005-01 and S3005-03", type: "video", url: "https://unilever.sharepoint.com/:f:/r/sites/SHE-Standards-and-Guidelines/Shared%20Documents/3000%20Safety/S3005-01%20-%20Fall%20from%20Heights%20Prevention/3%20-%20Training?csf=1&web=1&e=CkUwqo" }
    ],
    "Electrical Safety": [
      { title: "Electrical Safety TA3 Program", type: "workday", url: "https://wd3.myworkday.com/unilever/learning/program/96d98d3b7e0e100c6a7274c179010000?type=2d29754fdb8e100008b50ff6bc94003b" }
    ],
    "Hot Work": [
      { title: "S3007 Hot Work Standard", type: "standard", url: "https://unilever.sharepoint.com/sites/SHE-Standards-and-Guidelines/SitePages/S3007-Hot-Work-Standard.aspx" },
      { title: "Fire Safety & Prevention Planning", type: "workday", url: "https://wd3.myworkday.com/unilever/d/inst/1$22699/22699$42408.htmld" }
    ],
    "Excavation": [
      { title: "S3006 Excavation Standard", type: "standard", url: "https://unilever.sharepoint.com/:u:/r/sites/SHE-Standards-and-Guidelines/SitePages/S3006%20Excavation.aspx?csf=1&web=1&e=owfWh2" },
      { title: "Training of Standard (PPT)", type: "ppt", url: "https://unilever.sharepoint.com/sites/SHE-Standards-and-Guidelines/Shared%20Documents/Forms/AllItems.aspx?id=/sites/SHE-Standards-and-Guidelines/Shared%20Documents/3000%20Safety/S3006%20-%20Excavation/Training&viewid=d8ca63e6-05f7-45af-be8c-342c5bfde436" },
      { title: "Training Video of S3006", type: "video", url: "https://unilever.sharepoint.com/sites/SHE-Standards-and-Guidelines/Shared%20Documents/Forms/AllItems.aspx?id=/sites/SHE-Standards-and-Guidelines/Shared%20Documents/3000%20Safety/S3006%20-%20Excavation/Training&viewid=d8ca63e6-05f7-45af-be8c-342c5bfde436" }
    ],
    "LOTOTO": [
      { title: "S6002 LOTOTO Standard", type: "standard", url: "https://unilever.sharepoint.com/:u:/r/sites/SHE-Standards-and-Guidelines/SitePages/Unilever-Unilever-Lock-Out,-Tag-Out-%26-Try-Out-(LOTOTO)-Life-Critical-Standard-S6002.aspx?csf=1&web=1&e=gB4cgi" },
      { title: "Training of Standard (PPT)", type: "ppt", url: "https://unilever.sharepoint.com/:p:/r/sites/SHE-Standards-and-Guidelines/Shared%20Documents/6000%20Process/6002%20Lock-Out,%20Tag-Out%20%26%20Try-Out%20(LOTOTO)/3%20-%20Training/S6002%20LOTOTO%20Standard%20Training%20V%201.1.pptx?d=wae807904ca7146a1bf3356b3f033c41f&csf=1&web=1&e=bk2dQq" }
    ],
    "Machinery Safety": [
      { title: "S3013 Machinery Safety Standard", type: "standard", url: "https://unilever.sharepoint.com/:u:/r/sites/SHE-Standards-and-Guidelines/SitePages/S3013%20Machinery-Safety.aspx?csf=1&web=1&e=n7pSxS" },
      { title: "Training of Standard (Recording)", type: "video", url: "https://unilever.sharepoint.com/:v:/r/sites/SHE-Standards-and-Guidelines/Shared%20Documents/3000%20Safety/S3013-%20Machinery%20Safety%20Standard/Training/2026%2003%2017%20S3013%20Machinery%20Safety%20(MS)%20Best%20Practices%20Learning%20Session-20260317_055959-Meeting%20Recording.mp4?csf=1&web=1&e=CH3EzY" },
      { title: "MSCP SharePoint (Global MSCP Program)", type: "site", url: "https://unilever.sharepoint.com/sites/ZeroHarmtoPeopleHUB/SitePages/Machinery-Safety.aspx" }
    ],
    "Process Safety": [
      { title: "PSM TA3 Workday Training", type: "workday", url: "https://wd3.myworkday.com/unilever/learning/program/5f188bd1502f100c6a70d48679bf0001?type=2d29754fdb8e100008b50ff6bc94003b" }
    ],
    "Flammable Liquids": [
      { title: "Flammable Liquid TA3 Program", type: "workday", url: "https://wd3.myworkday.com/unilever/learning/program/2b17c3e84f7d100c6a83e6e9702c0001?record=1530ff0bceb41037500504ffac380000&type=2d29754fdb8e100008b50ff6bc94003b" }
    ],
    "Control of Substances Hazardous to Health": [
      { title: "S4002 Chemical Hazards Standard", type: "standard", url: "https://unilever.sharepoint.com/:u:/r/sites/SHE-Standards-and-Guidelines/SitePages/S4002%20-%20Chemical%20Hazards%20Standard.aspx?csf=1&web=1&e=S5b5cY" },
      { title: "Training PPT", type: "ppt", url: "https://unilever.sharepoint.com/:f:/r/sites/SHE-Standards-and-Guidelines/Shared%20Documents/4000%20Health%20and%20Industrial%20Hygiene/S4002%20-%20Chemical%20Hazards/3%20-%20Training?csf=1&web=1&e=8jw89Z" },
      { title: "S3019 Acids & Bases Standard", type: "standard", url: "https://unilever.sharepoint.com/:u:/r/sites/SHE-Standards-and-Guidelines/SitePages/S3019-Acids-%26-Bases-Standard.aspx?csf=1&web=1&e=vrH2Oq" },
      { title: "COSHH & Acids/Bases Training Recording", type: "video", url: "https://unilever.sharepoint.com/sites/SHEisaTEAMSPORT/_layouts/15/stream.aspx?id=%2Fsites%2FSHEisaTEAMSPORT%2FShared%20Documents%2FGeneral%2FLearning%2F2026%2007%2007%20Meeting%20recording%20PM%20session%20COSHH%20and%20Acids%26Bases%20Standards%20Training%2D20260707%5F170309%2DMeeting%20Recording%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E4e8b4793%2Deaa6%2D4c0f%2D8c20%2D11ae4069fa9d" }
    ],
    "Crane and Lifting": [
      { title: "S3011 Crane & Lifting Standard", type: "standard", url: "https://unilever.sharepoint.com/:u:/r/sites/SHE-Standards-and-Guidelines/SitePages/S3011%20Crane%20and%20Lifting%20LCS.aspx?csf=1&web=1&e=BST4bk" },
      { title: "Crane and Lifting Playbook 2025", type: "ppt", url: "https://unilever.sharepoint.com/:b:/r/sites/SHE-Standards-and-Guidelines/Shared%20Documents/3000%20Safety/S3011%20-%20Crane%20and%20Lifting/Guideline/Crane%20and%20Lifting%20Playbook%202025.pdf?csf=1&web=1&e=GGtJMa" }
    ],
    "Line Break": [
      { title: "S6003 Line Break Standard", type: "standard", url: "https://unilever.sharepoint.com/sites/SHE-Standards-and-Guidelines/SitePages/S6003%20Line%20Break.aspx" },
      { title: "Training of Standard (PPT)", type: "ppt", url: "https://unilever.sharepoint.com/:f:/r/sites/SHE-Standards-and-Guidelines/Shared%20Documents/6000%20Process/6003%20Line%20Break/Training?csf=1&web=1&e=tdFqya" },
      { title: "Training Video of S6003", type: "video", url: "https://unilever.sharepoint.com/:f:/r/sites/SHE-Standards-and-Guidelines/Shared%20Documents/6000%20Process/6003%20Line%20Break/Training?csf=1&web=1&e=tdFqya" }
    ],
    "Boiler Safety": [
      { title: "Boiler Safety TA3 Program", type: "workday", url: "https://wd3.myworkday.com/unilever/d/inst/1$23455/23455$144.htmld" }
    ],
    "Fire Safety": [
      { title: "Fire Safety TA3 Program", type: "workday", url: "https://wd3.myworkday.com/unilever/d/inst/1$23455/23455$1574.htmld" }
    ],
    "Combustible Dust": [
      { title: "S3018 Combustible Dust Standard", type: "standard", url: "https://unilever.sharepoint.com/:u:/r/sites/SHE-Standards-and-Guidelines/SitePages/S3018-Combustible-Dust-Standard.aspx?csf=1&web=1&e=ZVBwSc" },
      { title: "S3018 Training Pathway (PPT)", type: "ppt", url: "https://unilever.sharepoint.com/:p:/r/sites/SHE-Standards-and-Guidelines/Shared%20Documents/3000%20Safety/S3018%20Combustible%20Dust%20Standard/Training/S3018-Combustible%20Dust%20Standard%20Training.pptx?d=wa5536025c4f14d74a8670cc9795f2d72&csf=1&web=1&e=j5nxjA" }
    ],
    "MMHE": [
      { title: "S3009 MMHE Standard", type: "standard", url: "https://unilever.sharepoint.com/sites/SHE-Standards-and-Guidelines/SitePages/S3009-Mechanical%20Material%20Handling%20Equipment.aspx?csf=1&web=1&e=cMDnnW" },
      { title: "MMHE Playbook", type: "site", url: "https://unilever.sharepoint.com/sites/MMHESharepoint/SitePages/Home.aspx" }
    ],
    "Enzyme": []
  },

  assignments: [

    { id: "A001", capability: "Confined Spaces", capCode: "S3001", capType: "CP", route: "Global Pathway", nominee: "Alam, Md-Mahmudul", email: "Md-Mahmudul.Alam@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A002", capability: "Confined Spaces", capCode: "S3001", capType: "CP", route: "Global Pathway", nominee: "Horayra, Md-Abu", email: "Md-Abu.Horayra@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Not Started", milestones: [true, true, true, true, true] },
    { id: "A003", capability: "Confined Spaces", capCode: "S3001", capType: "CP", route: "Global Pathway", nominee: "Kundu, Susmita", email: "Susmita.Kundu@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A004", capability: "Fall Prevention", capCode: "S3005-01", capType: "CP", route: "Global Pathway", nominee: "Rifa, Tasnia-Islam", email: "Tasnia-Islam.Rifa@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [true, true, true, true, true] },
    { id: "A005", capability: "Fall Prevention", capCode: "S3005-01", capType: "CP", route: "Global Pathway", nominee: "Ahmed, Mastafa", email: "Mastafa.Ahmed@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A006", capability: "Fall Prevention", capCode: "S3005-01", capType: "CP", route: "Global Pathway", nominee: "Islam, GM-Shariful", email: "GM-Shariful.Islam@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A007", capability: "Ladder", capCode: "S3005-02", capType: "CP", route: "Global Pathway", nominee: "Rifa, Tasnia-Islam", email: "Tasnia-Islam.Rifa@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [true, true, true, true, true] },
    { id: "A008", capability: "Ladder", capCode: "S3005-02", capType: "CP", route: "Global Pathway", nominee: "Ahmed, Mastafa", email: "Mastafa.Ahmed@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A009", capability: "Ladder", capCode: "S3005-02", capType: "CP", route: "Global Pathway", nominee: "Yasin, Mohammad", email: "Mohammad.Yasin@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A010", capability: "MEWP", capCode: "S3005-02", capType: "CP", route: "Global Pathway", nominee: "Rifa, Tasnia-Islam", email: "Tasnia-Islam.Rifa@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [true, true, true, true, true] },
    { id: "A011", capability: "MEWP", capCode: "S3005-02", capType: "CP", route: "Global Pathway", nominee: "Ahmed, Mastafa", email: "Mastafa.Ahmed@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A012", capability: "MEWP", capCode: "S3005-02", capType: "CP", route: "Global Pathway", nominee: "Yasin, Mohammad", email: "Mohammad.Yasin@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A013", capability: "Electrical Safety", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Das2, Anindya", email: "Anindya.Das2@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A014", capability: "Electrical Safety", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Rudra, Showren", email: "Showren.Rudra@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A015", capability: "Electrical Safety", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Uddin, Nizam", email: "Nizam.Uddin@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A016", capability: "Electrical Safety", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Chowdhury, Md-Sayeem", email: "Md-Sayeem.Chowdhury@unilever.com", role: "LT Owner", legacyRole: "LT Owner", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A017", capability: "Hot Work", capCode: "S3007", capType: "CP", route: "CHSEM Viva", nominee: "Alam, Md-Mahmudul", email: "Md-Mahmudul.Alam@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A018", capability: "Hot Work", capCode: "S3007", capType: "CP", route: "CHSEM Viva", nominee: "Sarwar, Muntasir", email: "Muntasir.Sarwar@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A019", capability: "Hot Work", capCode: "S3007", capType: "CP", route: "CHSEM Viva", nominee: "Horayra, Md-Abu", email: "Md-Abu.Horayra@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A020", capability: "Excavation", capCode: "S3006", capType: "CP", route: "CHSEM Viva", nominee: "Islam, GM-Shariful", email: "GM-Shariful.Islam@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A021", capability: "Excavation", capCode: "S3006", capType: "CP", route: "CHSEM Viva", nominee: "Ahmed, Mastafa", email: "Mastafa.Ahmed@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A022", capability: "Excavation", capCode: "S3006", capType: "CP", route: "CHSEM Viva", nominee: "Yasin, Mohammad", email: "Mohammad.Yasin@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A023", capability: "LOTOTO", capCode: "S6002", capType: "CP", route: "CHSEM Viva", nominee: "Das2, Anindya", email: "Anindya.Das2@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A024", capability: "LOTOTO", capCode: "S6002", capType: "CP", route: "CHSEM Viva", nominee: "Uddin, Nizam", email: "Nizam.Uddin@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A025", capability: "LOTOTO", capCode: "S6002", capType: "CP", route: "CHSEM Viva", nominee: "Hassan, Rakibul", email: "Rakibul.Hassan@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A026", capability: "Machinery Safety", capCode: "S3013", capType: "CP", route: "Global Pathway", nominee: "Das2, Anindya", email: "Anindya.Das2@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A027", capability: "Machinery Safety", capCode: "S3013", capType: "CP", route: "Global Pathway", nominee: "Alam, Md-Mahmudul", email: "Md-Mahmudul.Alam@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A028", capability: "Machinery Safety", capCode: "S3013", capType: "CP", route: "Global Pathway", nominee: "Hassan, Rakibul", email: "Rakibul.Hassan@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A029", capability: "Machinery Safety", capCode: "S3013", capType: "CP", route: "Global Pathway", nominee: "Chowdhury, Md-Sayeem", email: "Md-Sayeem.Chowdhury@unilever.com", role: "LT Owner", legacyRole: "LT Owner", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A030", capability: "Machinery Safety", capCode: "S3013", capType: "CP", route: "Global Pathway", nominee: "Mostofa, Abdullah", email: "Abdullah.Mostofa@unilever.com", role: "LT Owner", legacyRole: "LT Owner", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A031", capability: "Machinery Safety", capCode: "S3013", capType: "CP", route: "Global Pathway", nominee: "Majid, Md-Abdul", email: "Md-Abdul.Majid@unilever.com", role: "LT Owner", legacyRole: "LT Owner", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A032", capability: "Machinery Safety", capCode: "S3013", capType: "CP", route: "Global Pathway", nominee: "Ahmed, Istiak", email: "Istiak.Ahmed@unilever.com", role: "LT Owner", legacyRole: "LT Owner", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A033", capability: "Process Safety", capCode: "PSM TA3", capType: "TA", route: "Regional TA Evaluation", nominee: "Shahwani, Gazi", email: "Gazi.Shahwani@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A034", capability: "Process Safety", capCode: "PSM TA3", capType: "TA", route: "Regional TA Evaluation", nominee: "Chowdhury, Naquib", email: "Naquib.Chowdhury@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A035", capability: "Process Safety", capCode: "PSM TA3", capType: "TA", route: "Regional TA Evaluation", nominee: "Mumu, Rahnuma-Nuraia", email: "Rahnuma-Nuraia.Mumu@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A036", capability: "Process Safety", capCode: "PSM TA3", capType: "TA", route: "Regional TA Evaluation", nominee: "Bhuiyan, Forhadul", email: "Forhadul.Bhuiyan@unilever.com", role: "LT Owner", legacyRole: "LT Owner", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A037", capability: "Process Safety", capCode: "PSM TA3", capType: "TA", route: "Regional TA Evaluation", nominee: "Shakil, Md", email: "Md.Shakil@unilever.com", role: "LT Owner", legacyRole: "LT Owner", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A038", capability: "Flammable Liquids", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Alam, Md-Mahmudul", email: "Md-Mahmudul.Alam@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A039", capability: "Flammable Liquids", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Kundu, Susmita", email: "Susmita.Kundu@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A040", capability: "Flammable Liquids", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Abdullah, Mohammad", email: "Mohammad.Abdullah@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A041", capability: "Flammable Liquids", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Bhuiyan, Forhadul", email: "Forhadul.Bhuiyan@unilever.com", role: "LT Owner", legacyRole: "LT Owner", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A042", capability: "Flammable Liquids", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Shakil, Md", email: "Md.Shakil@unilever.com", role: "LT Owner", legacyRole: "LT Owner", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A043", capability: "Control of Substances Hazardous to Health", capCode: "S4002", capType: "CP", route: "CHSEM Viva", nominee: "Alam, Md-Mahmudul", email: "Md-Mahmudul.Alam@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A044", capability: "Control of Substances Hazardous to Health", capCode: "S4002", capType: "CP", route: "CHSEM Viva", nominee: "Kundu, Susmita", email: "Susmita.Kundu@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A045", capability: "Control of Substances Hazardous to Health", capCode: "S4002", capType: "CP", route: "CHSEM Viva", nominee: "Abdullah, Mohammad", email: "Mohammad.Abdullah@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A046", capability: "Crane and Lifting", capCode: "S3011", capType: "CP", route: "CHSEM Viva", nominee: "Islam, GM-Shariful", email: "GM-Shariful.Islam@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A047", capability: "Crane and Lifting", capCode: "S3011", capType: "CP", route: "CHSEM Viva", nominee: "Rifa, Tasnia-Islam", email: "Tasnia-Islam.Rifa@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A048", capability: "Crane and Lifting", capCode: "S3011", capType: "CP", route: "CHSEM Viva", nominee: "Yasin, Mohammad", email: "Mohammad.Yasin@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A049", capability: "Line Break", capCode: "S6003", capType: "TA", route: "CHSEM Viva", nominee: "Horayra, Md-Abu", email: "Md-Abu.Horayra@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A050", capability: "Line Break", capCode: "S6003", capType: "TA", route: "CHSEM Viva", nominee: "Ahmed, Mastafa", email: "Mastafa.Ahmed@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A051", capability: "Line Break", capCode: "S6003", capType: "TA", route: "CHSEM Viva", nominee: "Mahmud, Muhammed-Hasan", email: "Muhammed-Hasan.Mahmud@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A052", capability: "Boiler Safety", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Horayra, Md-Abu", email: "Md-Abu.Horayra@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A053", capability: "Boiler Safety", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Ahmed, Mastafa", email: "Mastafa.Ahmed@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Certified", milestones: [true, true, true, true, true] },
    { id: "A054", capability: "Boiler Safety", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Mahmud, Muhammed-Hasan", email: "Muhammed-Hasan.Mahmud@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Certified", milestones: [true, true, true, true, true] },
    { id: "A055", capability: "Fire Safety", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Alam, Md-Mahmudul", email: "Md-Mahmudul.Alam@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A056", capability: "Fire Safety", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Rifa, Tasnia-Islam", email: "Tasnia-Islam.Rifa@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Certified", milestones: [true, true, true, true, true] },
    { id: "A057", capability: "Fire Safety", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Tasnim, Sumaieta", email: "Sumaieta.Tasnim@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A058", capability: "Fire Safety", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Chowdhury, Md-Sayeem", email: "Md-Sayeem.Chowdhury@unilever.com", role: "LT Owner", legacyRole: "LT Owner", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A059", capability: "Fire Safety", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Mostofa, Abdullah", email: "Abdullah.Mostofa@unilever.com", role: "LT Owner", legacyRole: "LT Owner", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A060", capability: "Combustible Dust", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Shakil, Md", email: "Md.Shakil@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A061", capability: "Combustible Dust", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Kundu, Susmita", email: "Susmita.Kundu@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A062", capability: "Combustible Dust", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Mumu, Rahnuma-Nuraia", email: "Rahnuma-Nuraia.Mumu@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A063", capability: "MMHE", capCode: "S3009", capType: "CP", route: "CHSEM Viva", nominee: "Abdullah, Mohammad", email: "Mohammad.Abdullah@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A064", capability: "MMHE", capCode: "S3009", capType: "CP", route: "CHSEM Viva", nominee: "Chowdhury, Makam", email: "Makam.Chowdhury@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A065", capability: "MMHE", capCode: "S3009", capType: "CP", route: "CHSEM Viva", nominee: "Iftu, Iftekher", email: "Iftekher.Iftu@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [true, false, false, false, false] },
    { id: "A066", capability: "Enzyme", capCode: "Enzyme TA3", capType: "TA", route: "Regional TA Evaluation", nominee: "Mumu, Rahnuma-Nuraia", email: "Rahnuma-Nuraia.Mumu@unilever.com", role: "Lead", legacyRole: "Lead", status: "Certified", milestones: [true, true, true, true, true] },
    { id: "A067", capability: "Enzyme", capCode: "Enzyme TA3", capType: "TA", route: "Regional TA Evaluation", nominee: "Iftu, Iftekher", email: "Iftekher.Iftu@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Certified", milestones: [true, true, true, true, true] },
    { id: "A068", capability: "Enzyme", capCode: "Enzyme TA3", capType: "TA", route: "Regional TA Evaluation", nominee: "Sarwar, Muntasir", email: "Muntasir.Sarwar@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [true, true, true, true, true] }

  ]
};
