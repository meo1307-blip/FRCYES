window.FRCYES_CASES = [
  {
    id: 1,
    topic: "Tumour",
    diagnosis: "Osteosarcoma",
    stageTitles: ["Initial presentation", "History", "Examination", "Investigations", "Decision point"],
    stages: [
      "16-year-old boy with progressive distal thigh pain for 3 months, worse at night and now limiting sport.",
      "Pain is deep and persistent. No preceding trauma. He reports recent swelling and a 3 kg weight loss.",
      "Firm tender swelling around the distal femur. Knee movement slightly reduced. No erythema. Neurovascular status intact.",
      "X-ray: aggressive metaphyseal lesion in distal femur with mixed lytic/sclerotic change, periosteal elevation and cloud-like ossification. MRI shows soft tissue extension.",
      "You need to state the diagnosis, immediate next steps, and principles of management."
    ],
    idealDifferentials: [
      { name: "Osteosarcoma", weight: "strong", why: "Age, metaphyseal location, night pain, aggressive radiographic appearance and soft tissue mass fit best." },
      { name: "Ewing sarcoma", weight: "partial", why: "A malignant bone tumour differential in this age group, but the imaging pattern here is more in keeping with osteosarcoma." },
      { name: "Chronic osteomyelitis", weight: "partial", why: "Can mimic malignancy but the radiographic aggressiveness and systemic pattern make it less likely." }
    ],
    management: {
      immediate: ["Do not biopsy through an unplanned incision.", "Refer urgently to a specialist sarcoma MDT.", "Non-weight bearing and analgesia if fracture risk or severe pain."],
      definitive: ["Staging with MRI of entire bone and CT chest.", "Image-guided or planned biopsy by tumour team.", "Neoadjuvant chemotherapy and limb salvage or appropriate resection depending on staging."],
      complications: ["Pulmonary metastases", "Pathological fracture", "Local recurrence"]
    },
    compare: {
      against: "Ewing sarcoma",
      rows: [
        ["Typical age", "Adolescents, often slightly older teens", "Children and adolescents"],
        ["Typical site", "Metaphysis of long bones", "Diaphysis or metadiaphysis"],
        ["Matrix", "Osteoid production", "No osteoid matrix"],
        ["Periosteal reaction", "Sunburst / Codman triangle", "Onion-skin may be seen"]
      ]
    },
    takeaways: [
      "Suspected primary bone tumours should be imaged and biopsied only via a specialist sarcoma pathway.",
      "Night pain, a mass, and aggressive periosteal reaction are red flags.",
      "Never perform casual biopsy or fixation before tumour team input."
    ]
  },
  {
    id: 2,
    topic: "Paediatrics",
    diagnosis: "Slipped capital femoral epiphysis",
    stageTitles: ["Initial presentation", "History", "Examination", "Investigations", "Decision point"],
    stages: [
      "13-year-old overweight boy presents with a limp and vague knee pain for 4 weeks.",
      "No major trauma. Symptoms worse after activity. Parents mention the foot has started turning out.",
      "Antalgic gait. Reduced internal rotation of the hip and obligatory external rotation on flexion.",
      "AP pelvis and frog lateral radiographs show posterior and inferior displacement of the capital femoral epiphysis.",
      "State the diagnosis, classify stability, and outline treatment."
    ],
    idealDifferentials: [
      { name: "Slipped capital femoral epiphysis", weight: "strong", why: "Classic age, body habitus, knee pain referral, obligatory external rotation and radiographic slip." },
      { name: "Perthes disease", weight: "partial", why: "Paediatric hip pathology with limp, but age and radiographs fit SCFE better." },
      { name: "Transient synovitis", weight: "partial", why: "A limp differential, but chronicity and examination findings do not fit as well." }
    ],
    management: {
      immediate: ["Make the patient non-weight bearing immediately.", "Assess whether the slip is stable or unstable.", "Urgent orthopaedic management to reduce AVN risk."],
      definitive: ["In situ screw fixation for stable slips.", "Consider contralateral assessment and prophylactic fixation in selected patients.", "Endocrine workup if atypical age or bilateral presentation."],
      complications: ["Avascular necrosis", "Chondrolysis", "Residual femoroacetabular impingement"]
    },
    compare: {
      against: "Perthes disease",
      rows: [
        ["Typical age", "10 to 16 years", "4 to 8 years"],
        ["Body habitus", "Often overweight", "Not classically linked"],
        ["Rotation", "Loss of internal rotation; obligatory external rotation", "Reduced abduction/internal rotation"],
        ["Radiographs", "Epiphyseal slip", "Femoral head fragmentation / collapse"]
      ]
    },
    takeaways: [
      "Never forget hip pathology can present as knee pain in children.",
      "SCFE is an urgent condition because unstable slips carry major AVN risk.",
      "Use AP pelvis and frog lateral unless instability makes lateral unsafe."
    ]
  },
  {
    id: 3,
    topic: "Infection",
    diagnosis: "Periprosthetic joint infection",
    stageTitles: ["Initial presentation", "History", "Examination", "Investigations", "Decision point"],
    stages: [
      "72-year-old woman presents 18 months after total knee replacement with pain, swelling, and difficulty mobilising.",
      "Symptoms have been worsening over 6 weeks. She reports intermittent fevers and a recent dental abscess."
      ,"Warm swollen knee with moderate effusion. Healed scar. Range of motion painful and reduced.",
      "Bloods: CRP 92, ESR elevated. X-rays show subtle radiolucent lines. Aspiration reveals cloudy fluid with raised synovial white cell count.",
      "State the diagnosis and explain your management algorithm."
    ],
    idealDifferentials: [
      { name: "Periprosthetic joint infection", weight: "strong", why: "Painful prosthetic joint with inflammation, raised markers and positive aspirate is classic." },
      { name: "Aseptic loosening", weight: "partial", why: "Can cause pain and radiolucencies, but inflammatory markers and aspirate favour infection." },
      { name: "Crystal arthropathy", weight: "partial", why: "Can mimic infection but prosthetic joint context and systemic clues make PJI more likely." }
    ],
    management: {
      immediate: ["Do not start antibiotics before aspiration unless septic and unstable.", "Obtain cultures and optimise comorbidities.", "Discuss at revision arthroplasty / infection MDT."],
      definitive: ["Acute early or acute haematogenous infection may be suitable for DAIR in selected cases.", "Chronic infection more often requires one-stage or two-stage revision depending on host, organism and soft tissues.", "Targeted antibiotics with microbiology input."],
      complications: ["Persistent infection", "Implant failure", "Poor function or need for salvage procedure"]
    },
    compare: {
      against: "Aseptic loosening",
      rows: [
        ["Inflammatory markers", "Often raised", "Usually normal"],
        ["Joint aspiration", "Raised WCC / positive culture", "Negative culture"],
        ["Symptoms", "Pain ± swelling, warmth, fevers", "Mechanical pain predominates"],
        ["Management", "DAIR or revision strategy + antibiotics", "Revision for loosening if indicated"]
      ]
    },
    takeaways: [
      "Pain in a replaced joint is infection until convincingly excluded.",
      "Aspirate before antibiotics whenever possible.",
      "Management depends on chronicity, organism, host factors and implant stability."
    ]
  },
  {
    id: 4,
    topic: "Trauma",
    diagnosis: "Acute compartment syndrome",
    stageTitles: ["Initial presentation", "History", "Examination", "Investigations", "Decision point"],
    stages: [
      "28-year-old man after tibial shaft fracture complains of escalating leg pain despite opioids.",
      "Pain is severe, worsening, and disproportionate. It increases markedly when his toes are passively stretched.",
      "Tense swollen compartments. Pain on passive stretch. Distal pulses present. Sensation beginning to reduce in the first web space.",
      "No imaging or blood test will safely rule this out. Intracompartment pressure measurement is only an adjunct if the diagnosis is unclear.",
      "State the diagnosis and immediate treatment."
    ],
    idealDifferentials: [
      { name: "Acute compartment syndrome", weight: "strong", why: "Disproportionate pain and pain on passive stretch after tibial fracture are key discriminators." },
      { name: "Deep vein thrombosis", weight: "partial", why: "May cause swelling and pain but not the classic compartment findings." },
      { name: "Peripheral nerve injury", weight: "partial", why: "Can explain sensory symptoms but not the severe tense painful compartments." }
    ],
    management: {
      immediate: ["Remove constrictive dressings and split casts.", "Keep limb at heart level, not elevated high.", "Urgent four-compartment fasciotomy if clinical suspicion is high."],
      definitive: ["Reassess muscle viability and fracture management.", "Planned second look and delayed closure or skin grafting.", "Document neurology and perfusion carefully."],
      complications: ["Muscle necrosis", "Volkmann-type contracture", "Renal injury from rhabdomyolysis"]
    },
    compare: {
      against: "Deep vein thrombosis",
      rows: [
        ["Pain pattern", "Severe, escalating, disproportionate", "Aching or cramping"],
        ["Passive stretch", "Marked pain", "Not typical"],
        ["Compartments", "Tense and wooden", "Usually soft"],
        ["Treatment urgency", "Immediate surgery", "Anticoagulation workup pathway"]
      ]
    },
    takeaways: [
      "Pulses do not exclude compartment syndrome.",
      "Compartment syndrome is a clinical diagnosis; do not delay fasciotomy when suspicion is high.",
      "Pain on passive stretch remains one of the most useful early signs."
    ]
  },
  {
    id: 5,
    topic: "Adult Reconstruction",
    diagnosis: "Aseptic loosening of total hip replacement",
    stageTitles: ["Initial presentation", "History", "Examination", "Investigations", "Decision point"],
    stages: [
      "68-year-old man presents 12 years after total hip replacement with increasing groin and start-up pain.",
      "No fever or wound issues. Pain is mechanical, worse on first rising and with walking.",
      "Antalgic gait. Pain at extremes of movement. No erythema, sinus, or systemic upset.",
      "X-rays show progressive radiolucent lines and migration around the acetabular component. CRP and ESR are normal.",
      "State the diagnosis and revision considerations."
    ],
    idealDifferentials: [
      { name: "Aseptic loosening of total hip replacement", weight: "strong", why: "Late mechanical pain with migration and normal infection markers fits aseptic loosening." },
      { name: "Periprosthetic joint infection", weight: "partial", why: "Always worth excluding in a painful arthroplasty, but the picture is less inflammatory." },
      { name: "Trochanteric pain syndrome", weight: "partial", why: "A pain source after THR, but radiographic migration points elsewhere." }
    ],
    management: {
      immediate: ["Rule out infection before revision planning.", "Assess implant fixation, bone loss, and patient factors.", "Optimise host factors before major revision surgery."],
      definitive: ["Revision arthroplasty with appropriate reconstruction strategy based on bone loss.", "Plan stems/cups/augments or graft depending on defect.", "Use templating and possible advanced imaging for bone stock assessment."],
      complications: ["Further bone loss", "Periprosthetic fracture", "Dislocation after revision"]
    },
    compare: {
      against: "Periprosthetic joint infection",
      rows: [
        ["Pain pattern", "Mechanical / start-up pain", "May be constant and inflammatory"],
        ["Markers", "Usually normal", "Often raised"],
        ["Sinus / warmth", "Absent", "May be present"],
        ["Workup", "Loosening and bone loss assessment", "Culture-based infection workup"]
      ]
    },
    takeaways: [
      "A painful arthroplasty must always be assessed systematically: infection, loosening, instability, fracture, soft tissues.",
      "Normal inflammatory markers help but do not absolutely exclude infection.",
      "Revision planning hinges on bone loss classification and implant fixation."
    ]
  },
  {
    id: 6,
    topic: "Shoulder",
    diagnosis: "Anterior shoulder dislocation",
    stageTitles: ["Initial presentation", "History", "Examination", "Investigations", "Decision point"],
    stages: [
      "22-year-old rugby player attends after a fall onto an abducted externally rotated arm.",
      "Immediate severe shoulder pain and inability to continue playing.",
      "Arm held slightly abducted and externally rotated. Loss of normal shoulder contour. Check axillary nerve sensation.",
      "Radiographs confirm an anterior glenohumeral dislocation without associated fracture.",
      "State the diagnosis and management including recurrence counselling."
    ],
    idealDifferentials: [
      { name: "Anterior shoulder dislocation", weight: "strong", why: "Mechanism, posture and contour loss are classic." },
      { name: "Greater tuberosity fracture", weight: "partial", why: "Can follow similar mechanism but clinical deformity/radiology point to dislocation." },
      { name: "Acromioclavicular joint dislocation", weight: "partial", why: "Shoulder injury differential but typical contour and arm position differ." }
    ],
    management: {
      immediate: ["Document neurovascular status before reduction.", "Provide analgesia or sedation as required and perform reduction.", "Post-reduction neurovascular reassessment and radiographs."],
      definitive: ["Short period of sling then rehabilitation.", "Consider early stabilisation discussion in young contact athletes with high recurrence risk.", "Assess for associated Bankart / Hill-Sachs lesions if recurrent."],
      complications: ["Recurrence", "Axillary nerve neuropraxia", "Associated labral or bony injury"]
    },
    compare: {
      against: "Posterior shoulder dislocation",
      rows: [
        ["Mechanism", "Abduction/external rotation trauma", "Seizure, electric shock, axial load in adduction/internal rotation"],
        ["Arm position", "Abducted and externally rotated", "Adducted and internally rotated"],
        ["Radiograph clues", "Humeral head anteroinferior", "Lightbulb sign may be seen"],
        ["Missed diagnosis", "Less commonly missed", "Often missed initially"]
      ]
    },
    takeaways: [
      "Always document axillary nerve sensation before and after reduction.",
      "Young male contact athletes have high recurrence risk.",
      "Post-reduction radiographs are mandatory."
    ]
  },
  {
    id: 7,
    topic: "Foot and Ankle",
    diagnosis: "Achilles tendon rupture",
    stageTitles: ["Initial presentation", "History", "Examination", "Investigations", "Decision point"],
    stages: [
      "44-year-old recreational footballer felt a sudden kick to the back of the ankle while sprinting.",
      "He stopped immediately and struggles to push off when walking.",
      "Palpable gap 4 cm proximal to the calcaneal insertion. Positive Simmonds-Thompson test.",
      "Ultrasound can confirm if uncertain, but the diagnosis is usually clinical.",
      "State the diagnosis and compare operative versus non-operative treatment."
    ],
    idealDifferentials: [
      { name: "Achilles tendon rupture", weight: "strong", why: "Classic mechanism, palpable gap and positive Thompson test." },
      { name: "Plantaris rupture", weight: "partial", why: "Can mimic a pop in the calf but power loss and gap point to Achilles rupture." },
      { name: "Gastrocnemius tear", weight: "partial", why: "May cause acute calf pain but the ankle findings fit Achilles rupture better." }
    ],
    management: {
      immediate: ["Immobilise in equinus and arrange urgent foot and ankle review.", "Discuss VTE risk, weight-bearing protocol and patient factors.", "Document skin condition and tendon gap."],
      definitive: ["Functional bracing pathway can give good outcomes in many patients.", "Surgery may reduce re-rupture risk in selected active patients but has wound/nerve risks.", "Early rehabilitation is central regardless of pathway."],
      complications: ["Re-rupture", "Sural nerve injury after surgery", "Stiffness and calf weakness"]
    },
    compare: {
      against: "Gastrocnemius tear",
      rows: [
        ["Gap", "Often palpable tendon gap", "No tendon gap"],
        ["Thompson test", "Positive", "Negative"],
        ["Push off", "Marked weakness", "Painful but tendon intact"],
        ["Treatment focus", "Boot/bracing vs repair", "Physiotherapy and relative rest"]
      ]
    },
    takeaways: [
      "Most Achilles ruptures are diagnosed clinically.",
      "The modern question is rarely simply surgery versus no surgery; it is which patients benefit from which pathway.",
      "Early functional rehabilitation matters."
    ]
  },
  {
    id: 8,
    topic: "Hand",
    diagnosis: "Scaphoid fracture",
    stageTitles: ["Initial presentation", "History", "Examination", "Investigations", "Decision point"],
    stages: [
      "24-year-old man falls onto an outstretched hand while skiing.",
      "He has radial-sided wrist pain and reduced grip strength.",
      "Anatomical snuffbox tenderness and pain on axial loading of the thumb.",
      "Initial plain radiographs are normal.",
      "State the likely diagnosis and your next investigation and management steps."
    ],
    idealDifferentials: [
      { name: "Scaphoid fracture", weight: "strong", why: "Mechanism and snuffbox tenderness with normal initial radiographs are classic." },
      { name: "Wrist sprain", weight: "partial", why: "Possible, but missing an occult scaphoid fracture is the key concern." },
      { name: "Distal radius fracture", weight: "partial", why: "Common FOOSH injury but imaging and focal signs are less supportive." }
    ],
    management: {
      immediate: ["Immobilise in a splint or cast if clinically suspected.", "Arrange MRI or repeat imaging pathway according to local protocol.", "Advise smoking cessation if relevant because union matters."],
      definitive: ["Undisplaced fractures often treated in cast.", "Displaced, proximal pole, or unstable patterns may need fixation.", "Monitor for union and watch for non-union or AVN."],
      complications: ["Non-union", "Avascular necrosis of proximal pole", "SNAC wrist"]
    },
    compare: {
      against: "Wrist sprain",
      rows: [
        ["Mechanism", "FOOSH common", "FOOSH common"],
        ["Snuffbox tenderness", "Typical", "Not specifically typical"],
        ["Initial X-ray", "May be normal", "Normal"],
        ["Risk if missed", "Non-union / AVN", "Usually self-limiting"]
      ]
    },
    takeaways: [
      "A normal initial X-ray does not exclude scaphoid fracture.",
      "Occult scaphoid injury is a classic viva trap.",
      "Think about displacement and proximal pole location when discussing management."
    ]
  },
  {
    id: 9,
    topic: "Spine",
    diagnosis: "Cauda equina syndrome",
    stageTitles: ["Initial presentation", "History", "Examination", "Investigations", "Decision point"],
    stages: [
      "48-year-old man presents with severe low back pain and bilateral sciatica.",
      "He now reports urinary difficulty, saddle numbness, and altered perianal sensation over the last 12 hours.",
      "Reduced ankle reflexes bilaterally. Saddle sensory change present. Anal tone reduced.",
      "Urgent MRI demonstrates a large central L4/5 disc prolapse compressing the cauda equina.",
      "State the diagnosis and emergency management."
    ],
    idealDifferentials: [
      { name: "Cauda equina syndrome", weight: "strong", why: "Red-flag bowel/bladder and saddle symptoms with MRI confirmation are classic." },
      { name: "Lumbar disc prolapse without cauda equina", weight: "partial", why: "Related pathology but the sphincter/saddle features elevate this to cauda equina syndrome." },
      { name: "Conus medullaris syndrome", weight: "partial", why: "A cord-end differential, though imaging here identifies a lower lumbar disc cause." }
    ],
    management: {
      immediate: ["This is an emergency: urgent senior review and decompression pathway.", "Document neurology, bladder status and timing carefully.", "Urgent MRI if not already obtained."],
      definitive: ["Emergency decompression, commonly discectomy/laminectomy depending on pathology.", "Post-op rehab and bladder management support.", "Clear documentation is crucial for both patient care and medicolegal reasons."],
      complications: ["Permanent bladder/bowel dysfunction", "Sexual dysfunction", "Persistent neurological deficit"]
    },
    compare: {
      against: "Lumbar disc prolapse without cauda equina",
      rows: [
        ["Sciatica", "Often bilateral", "Often unilateral"],
        ["Saddle anaesthesia", "Present", "Absent"],
        ["Bladder symptoms", "Present", "Absent"],
        ["Urgency", "Neurosurgical/orthopaedic emergency", "Urgent but not same emergency"]
      ]
    },
    takeaways: [
      "Cauda equina syndrome is about red flags plus action, not just naming the diagnosis.",
      "Timing, documentation, and decompression pathway are central exam themes.",
      "Do not falsely reassure on the basis of preserved motor power alone."
    ]
  },
  {
    id: 10,
    topic: "Sports",
    diagnosis: "Anterior cruciate ligament rupture",
    stageTitles: ["Initial presentation", "History", "Examination", "Investigations", "Decision point"],
    stages: [
      "25-year-old woman twists while pivoting in netball and hears a pop in the knee.",
      "Rapid swelling develops within 2 hours and she feels the knee is unstable.",
      "Positive Lachman test and soft endpoint. Joint line not especially tender.",
      "MRI shows complete ACL rupture with pivot shift bone bruising pattern.",
      "State the diagnosis and discuss operative versus non-operative management."
    ],
    idealDifferentials: [
      { name: "Anterior cruciate ligament rupture", weight: "strong", why: "Pivot injury, pop, immediate haemarthrosis and positive Lachman are classic." },
      { name: "Meniscal tear", weight: "partial", why: "Twisting injury differential, but immediate haemarthrosis and Lachman fit ACL rupture better." },
      { name: "Patellar dislocation", weight: "partial", why: "Can produce haemarthrosis but the examination and mechanism are less typical here." }
    ],
    management: {
      immediate: ["Reduce swelling, restore extension, and start rehabilitation.", "Assess for associated meniscal or collateral injury.", "Counsel regarding instability risk and sporting demands."],
      definitive: ["Structured non-operative rehab suits some low-demand or coping patients.", "Reconstruction for symptomatic instability, pivoting sports, or associated meniscal goals in selected patients.", "Timing should respect swelling control and range recovery."],
      complications: ["Recurrent instability", "Secondary meniscal damage", "Post-traumatic osteoarthritis"]
    },
    compare: {
      against: "Meniscal tear",
      rows: [
        ["Swelling onset", "Rapid haemarthrosis", "Often delayed effusion"],
        ["Instability", "Giving way common", "Locking/catching may predominate"],
        ["Lachman", "Positive", "Usually negative"],
        ["Treatment focus", "Rehab ± reconstruction", "Rehab or meniscal preservation strategy"]
      ]
    },
    takeaways: [
      "FRCS answers on ACL should balance patient goals, instability, and associated injury rather than reflexively saying reconstruct.",
      "Restore motion before reconstruction if possible.",
      "Pivot-shift bone bruise pattern is a classic MRI clue."
    ]
  }
];
