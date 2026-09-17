/* =========================================================
   KGF CPTA - MASTER DATA
   ---------------------------------------------------------
   This file IS the database. Edit here (or use the dashboard
   Export button) and commit to publish for everyone.

   milestones: [M1, M2, M3, M4, M5]  -> true = done
   ========================================================= */

const CPTA_DATA = {

  updated: "17 Sep 2026",

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
    { name: "MMHE", code: "TA3 Programme", type: "TA", route: "Regional TA Evaluation" },
    { name: "Enzyme", code: "Enzyme TA3", type: "TA", route: "Regional TA Evaluation" }
  ],

  assignments: [

    { id: "A001", capability: "Confined Spaces", capCode: "S3001", capType: "CP", route: "Global Pathway", nominee: "Alam, Md-Mahmudul", email: "Md-Mahmudul.Alam@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A002", capability: "Confined Spaces", capCode: "S3001", capType: "CP", route: "Global Pathway", nominee: "Horayra, Md-Abu", email: "Md-Abu.Horayra@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A003", capability: "Confined Spaces", capCode: "S3001", capType: "CP", route: "Global Pathway", nominee: "Kundu, Susmita", email: "Susmita.Kundu@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A004", capability: "Fall Prevention", capCode: "S3005-01", capType: "CP", route: "Global Pathway", nominee: "Rifa, Tasnia-Islam", email: "Tasnia-Islam.Rifa@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A005", capability: "Fall Prevention", capCode: "S3005-01", capType: "CP", route: "Global Pathway", nominee: "Ahmed, Mastafa", email: "Mastafa.Ahmed@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A006", capability: "Fall Prevention", capCode: "S3005-01", capType: "CP", route: "Global Pathway", nominee: "Islam, GM-Shariful", email: "GM-Shariful.Islam@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A007", capability: "Ladder", capCode: "S3005-02", capType: "CP", route: "Global Pathway", nominee: "Rifa, Tasnia-Islam", email: "Tasnia-Islam.Rifa@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A008", capability: "Ladder", capCode: "S3005-02", capType: "CP", route: "Global Pathway", nominee: "Ahmed, Mastafa", email: "Mastafa.Ahmed@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A009", capability: "Ladder", capCode: "S3005-02", capType: "CP", route: "Global Pathway", nominee: "Yasin, Mohammad", email: "Mohammad.Yasin@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A010", capability: "MEWP", capCode: "S3005-02", capType: "CP", route: "Global Pathway", nominee: "Rifa, Tasnia-Islam", email: "Tasnia-Islam.Rifa@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A011", capability: "MEWP", capCode: "S3005-02", capType: "CP", route: "Global Pathway", nominee: "Ahmed, Mastafa", email: "Mastafa.Ahmed@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A012", capability: "MEWP", capCode: "S3005-02", capType: "CP", route: "Global Pathway", nominee: "Yasin, Mohammad", email: "Mohammad.Yasin@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A013", capability: "Electrical Safety", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Das2, Anindya", email: "Anindya.Das2@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A014", capability: "Electrical Safety", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Rudra, Showren", email: "Showren.Rudra@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A015", capability: "Electrical Safety", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Uddin, Nizam", email: "Nizam.Uddin@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A016", capability: "Hot Work", capCode: "S3007", capType: "CP", route: "CHSEM Viva", nominee: "Alam, Md-Mahmudul", email: "Md-Mahmudul.Alam@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A017", capability: "Hot Work", capCode: "S3007", capType: "CP", route: "CHSEM Viva", nominee: "Sarwar, Muntasir", email: "Muntasir.Sarwar@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A018", capability: "Hot Work", capCode: "S3007", capType: "CP", route: "CHSEM Viva", nominee: "Horayra, Md-Abu", email: "Md-Abu.Horayra@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A019", capability: "Excavation", capCode: "S3006", capType: "CP", route: "CHSEM Viva", nominee: "Islam, GM-Shariful", email: "GM-Shariful.Islam@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A020", capability: "Excavation", capCode: "S3006", capType: "CP", route: "CHSEM Viva", nominee: "Ahmed, Mastafa", email: "Mastafa.Ahmed@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A021", capability: "Excavation", capCode: "S3006", capType: "CP", route: "CHSEM Viva", nominee: "Yasin, Mohammad", email: "Mohammad.Yasin@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A022", capability: "LOTOTO", capCode: "S6002", capType: "CP", route: "CHSEM Viva", nominee: "Das2, Anindya", email: "Anindya.Das2@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A023", capability: "LOTOTO", capCode: "S6002", capType: "CP", route: "CHSEM Viva", nominee: "Uddin, Nizam", email: "Nizam.Uddin@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A024", capability: "LOTOTO", capCode: "S6002", capType: "CP", route: "CHSEM Viva", nominee: "Hassan, Rakibul", email: "Rakibul.Hassan@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A025", capability: "Machinery Safety", capCode: "S3013", capType: "CP", route: "Global Pathway", nominee: "Das2, Anindya", email: "Anindya.Das2@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A026", capability: "Machinery Safety", capCode: "S3013", capType: "CP", route: "Global Pathway", nominee: "Alam, Md-Mahmudul", email: "Md-Mahmudul.Alam@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A027", capability: "Machinery Safety", capCode: "S3013", capType: "CP", route: "Global Pathway", nominee: "Hassan, Rakibul", email: "Rakibul.Hassan@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A028", capability: "Process Safety", capCode: "PSM TA3", capType: "TA", route: "Regional TA Evaluation", nominee: "Shahwani, Gazi", email: "Gazi.Shahwani@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A029", capability: "Process Safety", capCode: "PSM TA3", capType: "TA", route: "Regional TA Evaluation", nominee: "Chowdhury, Naquib", email: "Naquib.Chowdhury@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A030", capability: "Process Safety", capCode: "PSM TA3", capType: "TA", route: "Regional TA Evaluation", nominee: "Mumu, Rahnuma-Nuraia", email: "Rahnuma-Nuraia.Mumu@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A031", capability: "Flammable Liquids", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Alam, Md-Mahmudul", email: "Md-Mahmudul.Alam@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A032", capability: "Flammable Liquids", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Kundu, Susmita", email: "Susmita.Kundu@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A033", capability: "Flammable Liquids", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Abdullah, Mohammad", email: "Mohammad.Abdullah@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A034", capability: "Control of Substances Hazardous to Health", capCode: "S4002", capType: "CP", route: "CHSEM Viva", nominee: "Alam, Md-Mahmudul", email: "Md-Mahmudul.Alam@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A035", capability: "Control of Substances Hazardous to Health", capCode: "S4002", capType: "CP", route: "CHSEM Viva", nominee: "Kundu, Susmita", email: "Susmita.Kundu@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A036", capability: "Control of Substances Hazardous to Health", capCode: "S4002", capType: "CP", route: "CHSEM Viva", nominee: "Abdullah, Mohammad", email: "Mohammad.Abdullah@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A037", capability: "Crane and Lifting", capCode: "S3011", capType: "CP", route: "CHSEM Viva", nominee: "Islam, GM-Shariful", email: "GM-Shariful.Islam@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A038", capability: "Crane and Lifting", capCode: "S3011", capType: "CP", route: "CHSEM Viva", nominee: "Rifa, Tasnia-Islam", email: "Tasnia-Islam.Rifa@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A039", capability: "Crane and Lifting", capCode: "S3011", capType: "CP", route: "CHSEM Viva", nominee: "Yasin, Mohammad", email: "Mohammad.Yasin@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A040", capability: "Line Break", capCode: "S6003", capType: "TA", route: "CHSEM Viva", nominee: "Horayra, Md-Abu", email: "Md-Abu.Horayra@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A041", capability: "Line Break", capCode: "S6003", capType: "TA", route: "CHSEM Viva", nominee: "Ahmed, Mastafa", email: "Mastafa.Ahmed@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A042", capability: "Line Break", capCode: "S6003", capType: "TA", route: "CHSEM Viva", nominee: "Mahmud, Muhammed-Hasan", email: "Muhammed-Hasan.Mahmud@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A043", capability: "Boiler Safety", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Horayra, Md-Abu", email: "Md-Abu.Horayra@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A044", capability: "Boiler Safety", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Ahmed, Mastafa", email: "Mastafa.Ahmed@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Certified", milestones: [true, true, true, true, true], evidence: "", remarks: "" },
    { id: "A045", capability: "Boiler Safety", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Mahmud, Muhammed-Hasan", email: "Muhammed-Hasan.Mahmud@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Certified", milestones: [true, true, true, true, true], evidence: "", remarks: "" },
    { id: "A046", capability: "Fire Safety", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Alam, Md-Mahmudul", email: "Md-Mahmudul.Alam@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A047", capability: "Fire Safety", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Rifa, Tasnia-Islam", email: "Tasnia-Islam.Rifa@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Certified", milestones: [true, true, true, true, true], evidence: "", remarks: "" },
    { id: "A048", capability: "Fire Safety", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Tasnim, Sumaieta", email: "Sumaieta.Tasnim@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A049", capability: "Combustible Dust", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Shakil, Md", email: "Md.Shakil@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A050", capability: "Combustible Dust", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Kundu, Susmita", email: "Susmita.Kundu@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A051", capability: "Combustible Dust", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Mumu, Rahnuma-Nuraia", email: "Rahnuma-Nuraia.Mumu@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A052", capability: "MMHE", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Abdullah, Mohammad", email: "Mohammad.Abdullah@unilever.com", role: "Lead", legacyRole: "Lead", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A053", capability: "MMHE", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Chowdhury, Makam", email: "Makam.Chowdhury@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A054", capability: "MMHE", capCode: "TA3 Programme", capType: "TA", route: "Regional TA Evaluation", nominee: "Iftu, Iftekher", email: "Iftekher.Iftu@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" },
    { id: "A055", capability: "Enzyme", capCode: "Enzyme TA3", capType: "TA", route: "Regional TA Evaluation", nominee: "Mumu, Rahnuma-Nuraia", email: "Rahnuma-Nuraia.Mumu@unilever.com", role: "Lead", legacyRole: "Lead", status: "Certified", milestones: [true, true, true, true, true], evidence: "", remarks: "" },
    { id: "A056", capability: "Enzyme", capCode: "Enzyme TA3", capType: "TA", route: "Regional TA Evaluation", nominee: "Iftu, Iftekher", email: "Iftekher.Iftu@unilever.com", role: "Backup", legacyRole: "Backup 01", status: "Certified", milestones: [true, true, true, true, true], evidence: "", remarks: "" },
    { id: "A057", capability: "Enzyme", capCode: "Enzyme TA3", capType: "TA", route: "Regional TA Evaluation", nominee: "Chowdhury, Naquib", email: "Naquib.Chowdhury@unilever.com", role: "Backup", legacyRole: "Backup 02", status: "Not Started", milestones: [false, false, false, false, false], evidence: "", remarks: "" }

  ]
};
