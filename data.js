// ==============================
// VERSION
// ==============================
const APP_VERSION = "v1.0";

// ==============================
// SYNONYM ENGINE
// ==============================
function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function matchDiagnosis(input, accepted) {
  const normInput = normalize(input);

  return accepted.some(ans => {
    const normAns = normalize(ans);
    return normInput.includes(normAns) || normAns.includes(normInput);
  });
}

// ==============================
// CASE DATA
// ==============================
const cases = [

/* =========================
   1. ACL RUPTURE
========================= */
{
  id: 1,
  topic: "Knee",
  mode: "Trauma",
  stages: [
    "25-year-old woman twists while pivoting in netball and hears a pop in the knee.",
    "Immediate swelling within 2 hours.",
    "Examination: positive Lachman test.",
    "MRI confirms ACL rupture."
  ],
  diagnosis: [
    "acl rupture",
    "anterior cruciate ligament rupture",
    "acl tear"
  ]
},

/* =========================
   2. MENISCAL TEAR
========================= */
{
  id: 2,
  topic: "Knee",
  mode: "Trauma",
  stages: [
    "32-year-old with twisting injury and medial knee pain.",
    "Locking symptoms.",
    "Joint line tenderness.",
    "MRI shows medial meniscus tear."
  ],
  diagnosis: [
    "meniscal tear",
    "medial meniscus tear"
  ]
},

/* =========================
   3. SEPTIC KNEE
========================= */
{
  id: 3,
  topic: "Knee",
  mode: "Emergency",
  stages: [
    "60-year-old with acute painful swollen knee.",
    "Fever and unable to weight bear.",
    "Raised CRP and WCC.",
    "Aspirate: purulent fluid."
  ],
  diagnosis: [
    "septic arthritis",
    "septic knee"
  ]
},

/* =========================
   4. NOF FRACTURE
========================= */
{
  id: 4,
  topic: "Hip",
  mode: "Trauma",
  stages: [
    "85-year-old falls at home.",
    "Shortened externally rotated leg.",
    "Unable to weight bear.",
    "X-ray: intracapsular fracture."
  ],
  diagnosis: [
    "neck of femur fracture",
    "nof fracture",
    "intracapsular hip fracture"
  ]
},

/* =========================
   5. HIP OA
========================= */
{
  id: 5,
  topic: "Hip",
  mode: "Elective",
  stages: [
    "65-year-old with gradual onset groin pain.",
    "Reduced internal rotation.",
    "Antalgic gait.",
    "X-ray: joint space narrowing."
  ],
  diagnosis: [
    "hip osteoarthritis",
    "osteoarthritis hip"
  ]
},

/* =========================
   6. ACHILLES RUPTURE
========================= */
{
  id: 6,
  topic: "Foot & Ankle",
  mode: "Trauma",
  stages: [
    "Middle-aged man feels a snap while playing squash.",
    "Difficulty plantarflexing.",
    "Positive Thompson test.",
    "Palpable gap."
  ],
  diagnosis: [
    "achilles rupture",
    "achilles tendon rupture"
  ]
},

/* =========================
   7. ANKLE FRACTURE
========================= */
{
  id: 7,
  topic: "Foot & Ankle",
  mode: "Trauma",
  stages: [
    "Fall with ankle twisting injury.",
    "Swelling and lateral tenderness.",
    "Unable to weight bear.",
    "X-ray: Weber B fracture."
  ],
  diagnosis: [
    "ankle fracture",
    "weber b fracture"
  ]
},

/* =========================
   8. DIABETIC FOOT
========================= */
{
  id: 8,
  topic: "Foot & Ankle",
  mode: "Emergency",
  stages: [
    "Diabetic patient with foot ulcer.",
    "Foul smell and discharge.",
    "Systemically unwell.",
    "X-ray: gas in tissues."
  ],
  diagnosis: [
    "diabetic foot infection",
    "necrotising infection foot"
  ]
},

/* =========================
   9. CAUDA EQUINA
========================= */
{
  id: 9,
  topic: "Spine",
  mode: "Emergency",
  stages: [
    "Back pain with bilateral leg weakness.",
    "Urinary retention.",
    "Saddle anaesthesia.",
    "MRI shows large disc prolapse."
  ],
  diagnosis: [
    "cauda equina syndrome",
    "ces"
  ]
},

/* =========================
   10. MSCC
========================= */
{
  id: 10,
  topic: "Spine",
  mode: "Emergency",
  stages: [
    "Cancer patient with worsening back pain.",
    "Night pain and weakness.",
    "Reduced power in legs.",
    "MRI: cord compression."
  ],
  diagnosis: [
    "metastatic spinal cord compression",
    "mscc"
  ]
},

/* =========================
   11. SHOULDER DISLOCATION
========================= */
{
  id: 11,
  topic: "Shoulder",
  mode: "Trauma",
  stages: [
    "Young male rugby injury.",
    "Arm abducted and externally rotated.",
    "Loss of shoulder contour.",
    "X-ray confirms anterior dislocation."
  ],
  diagnosis: [
    "shoulder dislocation",
    "anterior shoulder dislocation"
  ]
},

/* =========================
   12. ROTATOR CUFF TEAR
========================= */
{
  id: 12,
  topic: "Shoulder",
  mode: "Elective",
  stages: [
    "Elderly patient with shoulder pain.",
    "Weak abduction.",
    "Night pain.",
    "MRI confirms tear."
  ],
  diagnosis: [
    "rotator cuff tear"
  ]
},

/* =========================
   13. CARPAL TUNNEL
========================= */
{
  id: 13,
  topic: "Hand",
  mode: "Elective",
  stages: [
    "Numbness in thumb, index and middle finger.",
    "Worse at night.",
    "Positive Phalen’s test.",
    "NCS confirms diagnosis."
  ],
  diagnosis: [
    "carpal tunnel syndrome"
  ]
},

/* =========================
   14. FLEXOR TENDON
========================= */
{
  id: 14,
  topic: "Hand",
  mode: "Trauma",
  stages: [
    "Knife injury to finger.",
    "Unable to flex DIP.",
    "Clean laceration.",
    "Zone II injury."
  ],
  diagnosis: [
    "flexor tendon injury",
    "flexor tendon laceration"
  ]
},

/* =========================
   15. SUPRACONDYLAR FRACTURE
========================= */
{
  id: 15,
  topic: "Paediatrics",
  mode: "Trauma",
  stages: [
    "Child falls onto outstretched hand.",
    "Painful swollen elbow.",
    "Limited movement.",
    "X-ray: supracondylar fracture."
  ],
  diagnosis: [
    "supracondylar fracture"
  ]
},

/* =========================
   16. SUFE
========================= */
{
  id: 16,
  topic: "Paediatrics",
  mode: "Emergency",
  stages: [
    "Obese adolescent with hip pain.",
    "Knee pain referral.",
    "Reduced internal rotation.",
    "X-ray: slipped epiphysis."
  ],
  diagnosis: [
    "slipped capital femoral epiphysis",
    "sufe",
    "scfe"
  ]
},

/* =========================
   17. PERTHES
========================= */
{
  id: 17,
  topic: "Paediatrics",
  mode: "Elective",
  stages: [
    "Child with limp.",
    "Reduced abduction.",
    "Pain in hip.",
    "X-ray: femoral head changes."
  ],
  diagnosis: [
    "perthes disease"
  ]
},

/* =========================
   18. SEPTIC HIP CHILD
========================= */
{
  id: 18,
  topic: "Paediatrics",
  mode: "Emergency",
  stages: [
    "Child refuses to weight bear.",
    "Fever.",
    "Raised CRP.",
    "Ultrasound shows effusion."
  ],
  diagnosis: [
    "septic arthritis hip",
    "septic hip"
  ]
},

/* =========================
   19. NON UNION
========================= */
{
  id: 19,
  topic: "Trauma",
  mode: "Complication",
  stages: [
    "Fracture 9 months ago.",
    "Persistent pain.",
    "No radiological healing.",
    "Movement at fracture site."
  ],
  diagnosis: [
    "non union",
    "fracture non union"
  ]
},

/* =========================
   20. ASEPTIC LOOSENING
========================= */
{
  id: 20,
  topic: "Arthroplasty",
  mode: "Complication",
  stages: [
    "Painful hip replacement.",
    "Gradual onset.",
    "No infection markers.",
    "X-ray shows loosening."
  ],
  diagnosis: [
    "aseptic loosening",
    "aseptic loosening of total hip replacement",
    "implant loosening"
  ]
},

/* =========================
   21. PJI
========================= */
{
  id: 21,
  topic: "Arthroplasty",
  mode: "Complication",
  stages: [
    "Painful joint replacement.",
    "Fever.",
    "Raised CRP.",
    "Joint aspirate positive."
  ],
  diagnosis: [
    "prosthetic joint infection",
    "pji"
  ]
},

/* =========================
   22. COMPARTMENT SYNDROME
========================= */
{
  id: 22,
  topic: "Trauma",
  mode: "Emergency",
  stages: [
    "Severe pain after fracture.",
    "Pain out of proportion.",
    "Pain on passive stretch.",
    "Tense compartments."
  ],
  diagnosis: [
    "compartment syndrome"
  ]
},

/* =========================
   23. FAT EMBOLISM
========================= */
{
  id: 23,
  topic: "Trauma",
  mode: "Emergency",
  stages: [
    "Long bone fracture.",
    "Respiratory distress.",
    "Petechial rash.",
    "Confusion."
  ],
  diagnosis: [
    "fat embolism syndrome"
  ]
},

/* =========================
   24. OPEN FRACTURE
========================= */
{
  id: 24,
  topic: "Trauma",
  mode: "Emergency",
  stages: [
    "High energy injury.",
    "Bone visible.",
    "Contaminated wound.",
    "X-ray confirms fracture."
  ],
  diagnosis: [
    "open fracture"
  ]
},

/* =========================
   25. PELVIC FRACTURE
========================= */
{
  id: 25,
  topic: "Trauma",
  mode: "Emergency",
  stages: [
    "High speed RTC.",
    "Hypotensive.",
    "Pelvic instability.",
    "FAST scan negative."
  ],
  diagnosis: [
    "pelvic fracture"
  ]
},

/* =========================
   26. DDH
========================= */
{
  id: 26,
  topic: "Paediatrics",
  mode: "Elective",
  stages: [
    "Infant with asymmetrical skin folds.",
    "Limited abduction.",
    "Positive Ortolani.",
    "Ultrasound abnormal."
  ],
  diagnosis: [
    "developmental dysplasia of hip",
    "ddh"
  ]
},

/* =========================
   27. OSTEOMYELITIS
========================= */
{
  id: 27,
  topic: "Infection",
  mode: "Emergency",
  stages: [
    "Child with bone pain.",
    "Fever.",
    "Raised inflammatory markers.",
    "MRI confirms infection."
  ],
  diagnosis: [
    "osteomyelitis"
  ]
},

/* =========================
   28. SARCOMA
========================= */
{
  id: 28,
  topic: "Oncology",
  mode: "Elective",
  stages: [
    "Painless enlarging lump.",
    "Firm and deep.",
    "MRI suspicious.",
    "Biopsy planned."
  ],
  diagnosis: [
    "soft tissue sarcoma"
  ]
},

/* =========================
   29. AVN HIP
========================= */
{
  id: 29,
  topic: "Hip",
  mode: "Elective",
  stages: [
    "Young adult with hip pain.",
    "Steroid use.",
    "Reduced ROM.",
    "MRI shows AVN."
  ],
  diagnosis: [
    "avascular necrosis",
    "avn hip"
  ]
},

/* =========================
   30. CRPS
========================= */
{
  id: 30,
  topic: "Pain",
  mode: "Complication",
  stages: [
    "Pain after minor injury.",
    "Allodynia.",
    "Swelling.",
    "Reduced function."
  ],
  diagnosis: [
    "complex regional pain syndrome",
    "crps"
  ]
}

];

// ==============================
// VERSION DISPLAY (UI SAFE)
// ==============================
window.addEventListener("load", () => {
  const versionTag = document.createElement("div");
  versionTag.innerText = APP_VERSION;
  versionTag.style.position = "fixed";
  versionTag.style.bottom = "5px";
  versionTag.style.right = "10px";
  versionTag.style.fontSize = "10px";
  versionTag.style.opacity = "0.5";
  document.body.appendChild(versionTag);
});
