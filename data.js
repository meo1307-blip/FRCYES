window.FRCYES_CASES = [

/* =========================
   BASIC SCIENCE
========================= */
{
  id: 101,
  topic: "Basic Science",
  diagnosis: "Avascular necrosis of the femoral head",
  stageTitles: ["Presentation", "Risk factors", "Examination", "Investigations", "Decision"],
  stages: [
    "32-year-old man with gradual onset groin pain.",
    "History of long-term steroid use.",
    "Painful restriction of internal rotation.",
    "MRI shows subchondral signal change and crescent sign.",
    "State diagnosis and pathophysiology."
  ],
  idealDifferentials: [
    { name: "Avascular necrosis of the femoral head", aliases: ["avn hip","avascular necrosis"], weight: "strong", why: "Steroids + MRI findings classic." },
    { name: "Hip osteoarthritis", weight: "partial", why: "Pain and stiffness overlap but age and imaging differ." }
  ],
  management: {
    immediate: ["Reduce load","Analgesia"],
    definitive: ["Core decompression early","Arthroplasty if collapse"],
    complications: ["Collapse","Arthritis"]
  },
  compare: {
    against: "Hip osteoarthritis",
    rows: [
      ["Age","Younger","Older"],
      ["Cause","Vascular","Degenerative"]
    ]
  },
  takeaways: ["Steroids + alcohol = AVN risk"]
},

/* =========================
   PROFESSIONAL
========================= */
{
  id: 102,
  topic: "Professional",
  diagnosis: "Wrong site surgery risk",
  stageTitles: ["Scenario","Issue","Assessment","Framework","Decision"],
  stages: [
    "You are about to operate and notice marking unclear.",
    "Consent form differs from list.",
    "Patient unsure of side.",
    "WHO checklist incomplete.",
    "What do you do?"
  ],
  idealDifferentials: [
    { name: "Wrong site surgery risk", aliases:["never event","wrong site"], weight:"strong", why:"Clear mismatch in documentation." }
  ],
  management: {
    immediate: ["STOP","Do not proceed"],
    definitive: ["Reconfirm consent and marking","Escalate"],
    complications: ["Never event","Litigation"]
  },
  compare: {
    against: "Documentation error",
    rows: [
      ["Risk","High","Moderate"],
      ["Action","Stop surgery","Clarify"]
    ]
  },
  takeaways: ["Safety overrides hierarchy"]
},

/* =========================
   ONCOLOGY
========================= */
{
  id: 103,
  topic: "Oncology",
  diagnosis: "Metastatic bone disease",
  stageTitles: ["Presentation","History","Exam","Imaging","Decision"],
  stages: [
    "65-year-old with persistent femur pain.",
    "History of prostate cancer.",
    "Local tenderness.",
    "X-ray: lytic lesion.",
    "Next step?"
  ],
  idealDifferentials: [
    { name:"Metastatic bone disease", aliases:["bone metastasis"], weight:"strong", why:"Cancer history + lesion." },
    { name:"Osteosarcoma", weight:"partial", why:"Primary tumour less likely at this age." }
  ],
  management: {
    immediate:["Pain control","Assess fracture risk"],
    definitive:["Oncology MDT","Fixation if needed"],
    complications:["Fracture","Progression"]
  },
  compare:{
    against:"Osteosarcoma",
    rows:[
      ["Age","Older","Younger"],
      ["Origin","Secondary","Primary"]
    ]
  },
  takeaways:["Always consider metastasis in older patients"]
},

/* =========================
   INFECTION
========================= */
{
  id: 104,
  topic: "Infection",
  diagnosis: "Septic arthritis",
  stageTitles:["Presentation","History","Exam","Investigations","Decision"],
  stages:[
    "Hot swollen knee.",
    "Fever present.",
    "Severe pain on movement.",
    "Aspirate purulent.",
    "Diagnosis?"
  ],
  idealDifferentials:[
    {name:"Septic arthritis",aliases:["septic knee"],weight:"strong",why:"Classic."},
    {name:"Gout",weight:"partial",why:"Can mimic."}
  ],
  management:{
    immediate:["Aspirate","Antibiotics"],
    definitive:["Washout"],
    complications:["Joint destruction"]
  },
  compare:{
    against:"Gout",
    rows:[
      ["Fluid","Purulent","Crystals"]
    ]
  },
  takeaways:["Time critical"]
},

/* =========================
   TRAUMA
========================= */
{
  id: 105,
  topic: "Trauma",
  diagnosis: "Open tibial fracture",
  stageTitles:["Presentation","History","Exam","Imaging","Decision"],
  stages:[
    "RTC with exposed tibia.",
    "Contaminated wound.",
    "Deformed leg.",
    "X-ray fracture.",
    "Next step?"
  ],
  idealDifferentials:[
    {name:"Open fracture",aliases:["open tibia"],weight:"strong",why:"Visible bone."}
  ],
  management:{
    immediate:["IV antibiotics","Cover wound"],
    definitive:["Debridement + fixation"],
    complications:["Infection"]
  },
  compare:{against:"Closed fracture",rows:[["Infection risk","High","Low"]]},
  takeaways:["BOAST principles"]
},

/* =========================
   ARTHROPLASTY
========================= */
{
  id: 106,
  topic: "Arthroplasty",
  diagnosis: "Aseptic loosening of total hip replacement",
  stageTitles:["Presentation","History","Exam","Imaging","Decision"],
  stages:[
    "Painful THR years later.",
    "Mechanical pain.",
    "No infection signs.",
    "Radiolucency seen.",
    "Diagnosis?"
  ],
  idealDifferentials:[
    {name:"Aseptic loosening of total hip replacement",aliases:["aseptic loosening","loose hip"],weight:"strong",why:"Classic."},
    {name:"Periprosthetic joint infection",weight:"partial",why:"Always exclude."}
  ],
  management:{
    immediate:["Rule out infection"],
    definitive:["Revision"],
    complications:["Bone loss"]
  },
  compare:{
    against:"PJI",
    rows:[
      ["Markers","Normal","Raised"]
    ]
  },
  takeaways:["Painful joint = rule out infection first"]
},

/* =========================
   SPINE
========================= */
{
  id: 107,
  topic: "Spine",
  diagnosis: "Metastatic spinal cord compression",
  stageTitles:["Presentation","History","Exam","Imaging","Decision"],
  stages:[
    "Back pain + cancer.",
    "Night pain.",
    "Weak legs.",
    "MRI compression.",
    "Next?"
  ],
  idealDifferentials:[
    {name:"Metastatic spinal cord compression",aliases:["mscc"],weight:"strong",why:"Classic."}
  ],
  management:{
    immediate:["Steroids","Urgent MRI"],
    definitive:["Surgery/radiotherapy"],
    complications:["Paralysis"]
  },
  compare:{against:"Disc prolapse",rows:[["Cause","Cancer","Degenerative"]]},
  takeaways:["Emergency"]
},

/* =========================
   HAND
========================= */
{
  id: 108,
  topic: "Hand",
  diagnosis: "Flexor tendon injury",
  stageTitles:["Presentation","History","Exam","Imaging","Decision"],
  stages:[
    "Knife injury finger.",
    "Cannot flex DIP.",
    "Zone II.",
    "Clinical diagnosis.",
    "Next?"
  ],
  idealDifferentials:[
    {name:"Flexor tendon injury",aliases:["flexor laceration"],weight:"strong",why:"Classic."}
  ],
  management:{
    immediate:["Washout","Splint"],
    definitive:["Repair"],
    complications:["Adhesions"]
  },
  compare:{against:"Extensor injury",rows:[["Movement lost","Flexion","Extension"]]},
  takeaways:["Zone II critical"]
},

/* =========================
   SHOULDER
========================= */
{
  id: 109,
  topic: "Shoulder",
  diagnosis: "Rotator cuff tear",
  stageTitles:["Presentation","History","Exam","Imaging","Decision"],
  stages:[
    "Shoulder pain elderly.",
    "Night pain.",
    "Weak abduction.",
    "MRI tear.",
    "Diagnosis?"
  ],
  idealDifferentials:[
    {name:"Rotator cuff tear",weight:"strong",why:"Classic."}
  ],
  management:{
    immediate:["Analgesia"],
    definitive:["Physio or repair"],
    complications:["Weakness"]
  },
  compare:{against:"Frozen shoulder",rows:[["ROM","Weak","Stiff"]]},
  takeaways:["Common viva"]
},

/* =========================
   FOOT & ANKLE
========================= */
{
  id: 110,
  topic: "Foot and Ankle",
  diagnosis: "Achilles tendon rupture",
  stageTitles:["Presentation","History","Exam","Imaging","Decision"],
  stages:[
    "Pop in ankle.",
    "Cannot push off.",
    "Positive Thompson.",
    "Clinical.",
    "Diagnosis?"
  ],
  idealDifferentials:[
    {name:"Achilles tendon rupture",aliases:["achilles rupture"],weight:"strong",why:"Classic."}
  ],
  management:{
    immediate:["Immobilise"],
    definitive:["Boot vs surgery"],
    complications:["Re-rupture"]
  },
  compare:{against:"Calf strain",rows:[["Gap","Yes","No"]]},
  takeaways:["Clinical diagnosis"]
},

/* =========================
   SPORTS
========================= */
{
  id: 111,
  topic: "Sports",
  diagnosis: "Anterior cruciate ligament rupture",
  stageTitles:["Presentation","History","Exam","Imaging","Decision"],
  stages:[
    "Twisting injury.",
    "Pop.",
    "Swelling.",
    "MRI confirms.",
    "Diagnosis?"
  ],
  idealDifferentials:[
    {name:"Anterior cruciate ligament rupture",aliases:["acl tear"],weight:"strong",why:"Classic."}
  ],
  management:{
    immediate:["Rehab"],
    definitive:["Reconstruction if needed"],
    complications:["Instability"]
  },
  compare:{against:"Meniscus",rows:[["Swelling","Immediate","Delayed"]]},
  takeaways:["High yield"]
}

];

// ==============================
// VERSION TAG (SAFE)
// ==============================
window.addEventListener("load", () => {
  const v = document.createElement("div");
  v.innerText = "v2.0";
  v.style.position = "fixed";
  v.style.bottom = "5px";
  v.style.right = "10px";
  v.style.fontSize = "10px";
  v.style.opacity = "0.5";
  document.body.appendChild(v);
});
