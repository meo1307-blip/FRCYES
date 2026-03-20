const CONDITIONS = [
  {
    "name": "Developmental dysplasia of the hip",
    "subspecialty": "Paediatric",
    "region": "Hip",
    "pathology": "Developmental",
    "age": "Infant",
    "acuity": "Chronic",
    "investigation": "Ultrasound",
    "management": "Harness",
    "hints": [
      "Ortolani/Barlow and acetabular development are relevant.",
      "Think Pavlik harness then reduction/osteotomy if late."
    ]
  },
  {
    "name": "Slipped capital femoral epiphysis",
    "subspecialty": "Paediatric",
    "region": "Hip",
    "pathology": "Developmental",
    "age": "Adolescent",
    "acuity": "Subacute",
    "investigation": "X-ray",
    "management": "Fixation",
    "hints": [
      "Obese adolescent with externally rotated gait.",
      "Southwick slip angle and in-situ screw fixation are key."
    ]
  },
  {
    "name": "Perthes disease",
    "subspecialty": "Paediatric",
    "region": "Hip",
    "pathology": "Avascular",
    "age": "Child",
    "acuity": "Chronic",
    "investigation": "X-ray",
    "management": "Containment",
    "hints": [
      "Limping child with reduced abduction and internal rotation.",
      "Think femoral head collapse and containment strategy."
    ]
  },
  {
    "name": "Septic arthritis of the hip in a child",
    "subspecialty": "Paediatric",
    "region": "Hip",
    "pathology": "Infection",
    "age": "Child",
    "acuity": "Acute",
    "investigation": "Ultrasound",
    "management": "Washout",
    "hints": [
      "Febrile child refusing to weight bear.",
      "Kocher criteria and urgent drainage matter."
    ]
  },
  {
    "name": "Transient synovitis of the hip",
    "subspecialty": "Paediatric",
    "region": "Hip",
    "pathology": "Inflammatory",
    "age": "Child",
    "acuity": "Acute",
    "investigation": "Ultrasound",
    "management": "Observation",
    "hints": [
      "Post-viral limp and generally systemically well.",
      "Differentiate from septic arthritis."
    ]
  },
  {
    "name": "Supracondylar humeral fracture",
    "subspecialty": "Paediatric",
    "region": "Elbow",
    "pathology": "Trauma",
    "age": "Child",
    "acuity": "Acute",
    "investigation": "X-ray",
    "management": "Fixation",
    "hints": [
      "Check anterior humeral line and neurovascular status.",
      "Closed reduction with percutaneous pinning is classic."
    ]
  },
  {
    "name": "Lateral condyle fracture of the humerus",
    "subspecialty": "Paediatric",
    "region": "Elbow",
    "pathology": "Trauma",
    "age": "Child",
    "acuity": "Acute",
    "investigation": "X-ray",
    "management": "Fixation",
    "hints": [
      "Beware displacement and non-union risk.",
      "Internal oblique views are useful."
    ]
  },
  {
    "name": "Pulled elbow",
    "subspecialty": "Paediatric",
    "region": "Elbow",
    "pathology": "Instability",
    "age": "Child",
    "acuity": "Acute",
    "investigation": "Clinical",
    "management": "Reduction",
    "hints": [
      "Toddler after traction injury with pronated forearm.",
      "Usually reduced without imaging if classic."
    ]
  },
  {
    "name": "Monteggia fracture-dislocation in a child",
    "subspecialty": "Paediatric",
    "region": "Forearm",
    "pathology": "Trauma",
    "age": "Child",
    "acuity": "Acute",
    "investigation": "X-ray",
    "management": "Fixation",
    "hints": [
      "Always inspect the radiocapitellar line.",
      "Ulna reduction restores radial head alignment."
    ]
  },
  {
    "name": "Toddler's fracture",
    "subspecialty": "Paediatric",
    "region": "Tibia",
    "pathology": "Trauma",
    "age": "Child",
    "acuity": "Acute",
    "investigation": "X-ray",
    "management": "Casting",
    "hints": [
      "Subtle spiral tibial fracture with limp/refusal to bear weight.",
      "Initial radiographs can be normal."
    ]
  },
  {
    "name": "Blount disease",
    "subspecialty": "Paediatric",
    "region": "Knee",
    "pathology": "Deformity",
    "age": "Child",
    "acuity": "Chronic",
    "investigation": "X-ray",
    "management": "Osteotomy",
    "hints": [
      "Progressive varus centred at proximal tibia.",
      "Differentiate from physiological bowing."
    ]
  },
  {
    "name": "Osgood-Schlatter disease",
    "subspecialty": "Paediatric",
    "region": "Knee",
    "pathology": "Overuse",
    "age": "Adolescent",
    "acuity": "Chronic",
    "investigation": "Clinical",
    "management": "Physiotherapy",
    "hints": [
      "Tibial tubercle pain in active adolescent.",
      "Usually self-limiting traction apophysitis."
    ]
  },
  {
    "name": "Adolescent idiopathic scoliosis",
    "subspecialty": "Spine",
    "region": "Spine",
    "pathology": "Deformity",
    "age": "Adolescent",
    "acuity": "Chronic",
    "investigation": "X-ray",
    "management": "Fusion",
    "hints": [
      "Think Cobb angle and skeletal maturity.",
      "Bracing versus fusion depends on curve and growth remaining."
    ]
  },
  {
    "name": "Congenital talipes equinovarus",
    "subspecialty": "Paediatric",
    "region": "Foot and ankle",
    "pathology": "Deformity",
    "age": "Infant",
    "acuity": "Chronic",
    "investigation": "Clinical",
    "management": "Casting",
    "hints": [
      "CAVE deformity pattern is classic.",
      "Ponseti casting with Achilles tenotomy is standard."
    ]
  },
  {
    "name": "Tarsal coalition",
    "subspecialty": "Paediatric",
    "region": "Foot and ankle",
    "pathology": "Developmental",
    "age": "Adolescent",
    "acuity": "Chronic",
    "investigation": "CT",
    "management": "Reconstruction",
    "hints": [
      "Rigid painful flatfoot in adolescent.",
      "Calcaneonavicular or talocalcaneal coalition are typical."
    ]
  },
  {
    "name": "Cauda equina syndrome",
    "subspecialty": "Spine",
    "region": "Spine",
    "pathology": "Neurological",
    "age": "Adult",
    "acuity": "Acute",
    "investigation": "MRI",
    "management": "Decompression",
    "hints": [
      "Saddle anaesthesia and bladder symptoms are red flags.",
      "Urgent MRI and decompression are time-critical."
    ]
  },
  {
    "name": "Cervical spondylotic myelopathy",
    "subspecialty": "Spine",
    "region": "Spine",
    "pathology": "Degenerative",
    "age": "Older adult",
    "acuity": "Chronic",
    "investigation": "MRI",
    "management": "Decompression",
    "hints": [
      "Hand clumsiness, gait disturbance, upper motor neuron signs.",
      "Cord signal change and canal stenosis influence management."
    ]
  },
  {
    "name": "Metastatic spinal cord compression",
    "subspecialty": "Tumour",
    "region": "Spine",
    "pathology": "Tumour",
    "age": "Older adult",
    "acuity": "Acute",
    "investigation": "MRI",
    "management": "Oncological",
    "hints": [
      "Back pain with neurology in a patient with malignancy.",
      "Steroids, MRI, oncology discussion and possible decompression/stabilisation."
    ]
  },
  {
    "name": "Lumbar disc prolapse with radiculopathy",
    "subspecialty": "Spine",
    "region": "Spine",
    "pathology": "Degenerative",
    "age": "Adult",
    "acuity": "Subacute",
    "investigation": "MRI",
    "management": "Decompression",
    "hints": [
      "Sciatica with root tension signs.",
      "Most settle, but progressive deficit pushes intervention."
    ]
  },
  {
    "name": "Lumbar spinal stenosis",
    "subspecialty": "Spine",
    "region": "Spine",
    "pathology": "Degenerative",
    "age": "Older adult",
    "acuity": "Chronic",
    "investigation": "MRI",
    "management": "Decompression",
    "hints": [
      "Neurogenic claudication relieved by flexion.",
      "Differentiate from vascular claudication."
    ]
  },
  {
    "name": "Pyogenic spondylodiscitis",
    "subspecialty": "Spine",
    "region": "Spine",
    "pathology": "Infection",
    "age": "Older adult",
    "acuity": "Subacute",
    "investigation": "MRI",
    "management": "Antibiotics",
    "hints": [
      "Severe back pain with inflammatory markers and possible sepsis.",
      "Image-guided biopsy and prolonged antibiotics are common."
    ]
  },
  {
    "name": "Ankylosing spondylitis kyphotic deformity",
    "subspecialty": "Spine",
    "region": "Spine",
    "pathology": "Inflammatory",
    "age": "Adult",
    "acuity": "Chronic",
    "investigation": "X-ray",
    "management": "Fusion",
    "hints": [
      "Sagittal imbalance and rigid inflammatory spine.",
      "Fracture risk after minor trauma is high."
    ]
  },
  {
    "name": "Odontoid fracture in an older adult",
    "subspecialty": "Spine",
    "region": "Spine",
    "pathology": "Trauma",
    "age": "Older adult",
    "acuity": "Acute",
    "investigation": "CT",
    "management": "Fusion",
    "hints": [
      "Upper cervical injury after low-energy fall.",
      "Type II odontoid fractures are exam favourites."
    ]
  },
  {
    "name": "Thoracolumbar burst fracture",
    "subspecialty": "Spine",
    "region": "Spine",
    "pathology": "Trauma",
    "age": "Adult",
    "acuity": "Acute",
    "investigation": "CT",
    "management": "Fixation",
    "hints": [
      "Assess canal compromise and posterior ligamentous complex.",
      "Neurology and stability drive operative decisions."
    ]
  },
  {
    "name": "Scheuermann kyphosis",
    "subspecialty": "Spine",
    "region": "Spine",
    "pathology": "Deformity",
    "age": "Adolescent",
    "acuity": "Chronic",
    "investigation": "X-ray",
    "management": "Physiotherapy",
    "hints": [
      "Structural kyphosis with wedged vertebrae.",
      "Severe rigid deformity can need fusion."
    ]
  },
  {
    "name": "Rotator cuff tear arthropathy",
    "subspecialty": "Shoulder",
    "region": "Shoulder",
    "pathology": "Degenerative",
    "age": "Older adult",
    "acuity": "Chronic",
    "investigation": "X-ray",
    "management": "Arthroplasty",
    "hints": [
      "Pseudoparalysis with superior humeral migration.",
      "Reverse shoulder arthroplasty often provides function."
    ]
  },
  {
    "name": "Anterior shoulder instability",
    "subspecialty": "Shoulder",
    "region": "Shoulder",
    "pathology": "Instability",
    "age": "Young adult",
    "acuity": "Recurrent",
    "investigation": "MRI",
    "management": "Reconstruction",
    "hints": [
      "Young patient with repeated dislocation episodes.",
      "Think Bankart, Hill-Sachs and glenoid bone loss."
    ]
  },
  {
    "name": "Acromioclavicular joint dislocation",
    "subspecialty": "Shoulder",
    "region": "Shoulder",
    "pathology": "Trauma",
    "age": "Young adult",
    "acuity": "Acute",
    "investigation": "X-ray",
    "management": "Reconstruction",
    "hints": [
      "Superior shoulder pain after direct blow.",
      "Rockwood classification guides management."
    ]
  },
  {
    "name": "Proximal humeral fracture-dislocation",
    "subspecialty": "Shoulder",
    "region": "Shoulder",
    "pathology": "Trauma",
    "age": "Older adult",
    "acuity": "Acute",
    "investigation": "CT",
    "management": "Arthroplasty",
    "hints": [
      "Evaluate tuberosities, head-split pattern and viability.",
      "Fixation versus arthroplasty depends on fracture pattern and patient."
    ]
  },
  {
    "name": "Pancoast tumour with brachial plexus involvement",
    "subspecialty": "Tumour",
    "region": "Shoulder",
    "pathology": "Tumour",
    "age": "Older adult",
    "acuity": "Subacute",
    "investigation": "MRI",
    "management": "Oncological",
    "hints": [
      "Shoulder pain with hand weakness and Horner syndrome.",
      "A non-orthopaedic mimic but important viva differential."
    ]
  },
  {
    "name": "Distal biceps rupture",
    "subspecialty": "Elbow",
    "region": "Elbow",
    "pathology": "Trauma",
    "age": "Adult",
    "acuity": "Acute",
    "investigation": "MRI",
    "management": "Repair",
    "hints": [
      "Sudden pain with loss of supination power.",
      "Hook test and urgent repair in high-demand patients."
    ]
  },
  {
    "name": "Terrible triad injury of the elbow",
    "subspecialty": "Elbow",
    "region": "Elbow",
    "pathology": "Trauma",
    "age": "Adult",
    "acuity": "Acute",
    "investigation": "CT",
    "management": "Fixation",
    "hints": [
      "Dislocation with radial head and coronoid injury.",
      "Restore stability with radial head/coronoid/LCL strategy."
    ]
  },
  {
    "name": "Cubital tunnel syndrome",
    "subspecialty": "Hand",
    "region": "Elbow",
    "pathology": "Neurological",
    "age": "Adult",
    "acuity": "Chronic",
    "investigation": "Neurophysiology",
    "management": "Decompression",
    "hints": [
      "Ulnar paraesthesia and intrinsic weakness.",
      "Differentiate from C8/T1 and Guyon canal."
    ]
  },
  {
    "name": "Lateral epicondylitis",
    "subspecialty": "Elbow",
    "region": "Elbow",
    "pathology": "Overuse",
    "age": "Adult",
    "acuity": "Chronic",
    "investigation": "Clinical",
    "management": "Physiotherapy",
    "hints": [
      "Tender common extensor origin with gripping pain.",
      "Usually non-operative first-line."
    ]
  },
  {
    "name": "Olecranon bursitis",
    "subspecialty": "Elbow",
    "region": "Elbow",
    "pathology": "Inflammatory",
    "age": "Adult",
    "acuity": "Subacute",
    "investigation": "Clinical",
    "management": "Observation",
    "hints": [
      "Posterior elbow swelling, consider sepsis and gout.",
      "Aspiration is selective because of fistula/infection risk."
    ]
  },
  {
    "name": "Dupuytren disease",
    "subspecialty": "Hand",
    "region": "Hand",
    "pathology": "Degenerative",
    "age": "Older adult",
    "acuity": "Chronic",
    "investigation": "Clinical",
    "management": "Release",
    "hints": [
      "Palmar cords and MCP/PIP contractures.",
      "Table-top test and procedure threshold are common viva points."
    ]
  },
  {
    "name": "Scaphoid non-union",
    "subspecialty": "Hand",
    "region": "Wrist",
    "pathology": "Non-union",
    "age": "Young adult",
    "acuity": "Chronic",
    "investigation": "CT",
    "management": "Fixation",
    "hints": [
      "Persistent radial-sided wrist pain after missed fracture.",
      "CT for union pattern and graft planning."
    ]
  },
  {
    "name": "Kienbock disease",
    "subspecialty": "Hand",
    "region": "Wrist",
    "pathology": "Avascular",
    "age": "Young adult",
    "acuity": "Chronic",
    "investigation": "MRI",
    "management": "Reconstruction",
    "hints": [
      "Lunate osteonecrosis with dorsal wrist pain.",
      "Ulnar variance matters."
    ]
  },
  {
    "name": "Flexor tendon zone II injury",
    "subspecialty": "Hand",
    "region": "Hand",
    "pathology": "Trauma",
    "age": "Adult",
    "acuity": "Acute",
    "investigation": "Clinical",
    "management": "Repair",
    "hints": [
      "No-man's-land tendon injury.",
      "Repair quality and early hand therapy are critical."
    ]
  },
  {
    "name": "Mallet finger",
    "subspecialty": "Hand",
    "region": "Hand",
    "pathology": "Trauma",
    "age": "Adult",
    "acuity": "Acute",
    "investigation": "Clinical",
    "management": "Splintage",
    "hints": [
      "Extensor lag at DIP after forced flexion.",
      "Continuous DIP splintage is the standard."
    ]
  },
  {
    "name": "Jersey finger",
    "subspecialty": "Hand",
    "region": "Hand",
    "pathology": "Trauma",
    "age": "Adult",
    "acuity": "Acute",
    "investigation": "MRI",
    "management": "Repair",
    "hints": [
      "FDP avulsion after grabbing an opponent's shirt.",
      "Classically ring finger and inability to flex DIP."
    ]
  },
  {
    "name": "Scapholunate ligament injury",
    "subspecialty": "Hand",
    "region": "Wrist",
    "pathology": "Instability",
    "age": "Adult",
    "acuity": "Subacute",
    "investigation": "MRI",
    "management": "Reconstruction",
    "hints": [
      "Dorsal wrist pain and widened scapholunate gap.",
      "DISI pattern is a frequent exam point."
    ]
  },
  {
    "name": "Carpal tunnel syndrome",
    "subspecialty": "Hand",
    "region": "Wrist",
    "pathology": "Neurological",
    "age": "Adult",
    "acuity": "Chronic",
    "investigation": "Neurophysiology",
    "management": "Decompression",
    "hints": [
      "Median paraesthesia worse at night.",
      "Thenar weakness and red flags matter."
    ]
  },
  {
    "name": "Swan-neck deformity in rheumatoid hand",
    "subspecialty": "Hand",
    "region": "Hand",
    "pathology": "Inflammatory",
    "age": "Adult",
    "acuity": "Chronic",
    "investigation": "Clinical",
    "management": "Reconstruction",
    "hints": [
      "Systemic inflammatory disease with tendon imbalance.",
      "Look at overall hand pattern, not just one digit."
    ]
  },
  {
    "name": "Boutonniere deformity",
    "subspecialty": "Hand",
    "region": "Hand",
    "pathology": "Trauma",
    "age": "Adult",
    "acuity": "Subacute",
    "investigation": "Clinical",
    "management": "Splintage",
    "hints": [
      "Central slip injury with PIP flexion and DIP hyperextension.",
      "Elson test is useful."
    ]
  },
  {
    "name": "Pelvic ring injury",
    "subspecialty": "Trauma",
    "region": "Pelvis",
    "pathology": "Trauma",
    "age": "Adult",
    "acuity": "Acute",
    "investigation": "CT",
    "management": "Fixation",
    "hints": [
      "Think haemodynamic status and pelvic binder first.",
      "Young-Burgess/Tile principles guide stability thinking."
    ]
  },
  {
    "name": "Acetabular fracture",
    "subspecialty": "Trauma",
    "region": "Pelvis",
    "pathology": "Trauma",
    "age": "Adult",
    "acuity": "Acute",
    "investigation": "CT",
    "management": "Fixation",
    "hints": [
      "Assess columns, roof arc and hip congruity.",
      "Associated dislocation changes urgency."
    ]
  },
  {
    "name": "Neck of femur fracture",
    "subspecialty": "Trauma",
    "region": "Hip",
    "pathology": "Trauma",
    "age": "Older adult",
    "acuity": "Acute",
    "investigation": "X-ray",
    "management": "Arthroplasty",
    "hints": [
      "Displaced intracapsular fracture in frail patient is a classic viva.",
      "Garden classification and arthroplasty criteria matter."
    ]
  },
  {
    "name": "Intertrochanteric femoral fracture",
    "subspecialty": "Trauma",
    "region": "Hip",
    "pathology": "Trauma",
    "age": "Older adult",
    "acuity": "Acute",
    "investigation": "X-ray",
    "management": "Fixation",
    "hints": [
      "Extracapsular proximal femur fracture.",
      "Sliding hip screw versus nail depends on stability."
    ]
  },
  {
    "name": "Subtrochanteric femoral fracture",
    "subspecialty": "Trauma",
    "region": "Femur",
    "pathology": "Trauma",
    "age": "Adult",
    "acuity": "Acute",
    "investigation": "X-ray",
    "management": "Fixation",
    "hints": [
      "High mechanical stress region with deforming forces.",
      "Reduction strategy is key."
    ]
  },
  {
    "name": "Periprosthetic femoral fracture around a total hip replacement",
    "subspecialty": "Trauma",
    "region": "Hip",
    "pathology": "Periprosthetic",
    "age": "Older adult",
    "acuity": "Acute",
    "investigation": "X-ray",
    "management": "Revision",
    "hints": [
      "Vancouver classification is the main exam framework.",
      "Stem stability determines fixation versus revision."
    ]
  },
  {
    "name": "Distal femoral fracture",
    "subspecialty": "Trauma",
    "region": "Knee",
    "pathology": "Trauma",
    "age": "Older adult",
    "acuity": "Acute",
    "investigation": "CT",
    "management": "Fixation",
    "hints": [
      "Consider intra-articular extension and implant status.",
      "Nail, plate, or DFR in selected cases."
    ]
  },
  {
    "name": "Tibial plateau fracture",
    "subspecialty": "Trauma",
    "region": "Knee",
    "pathology": "Trauma",
    "age": "Adult",
    "acuity": "Acute",
    "investigation": "CT",
    "management": "Fixation",
    "hints": [
      "Look at depression, split pattern and soft tissues.",
      "Staged management may be safer."
    ]
  },
  {
    "name": "Patellar fracture",
    "subspecialty": "Trauma",
    "region": "Knee",
    "pathology": "Trauma",
    "age": "Adult",
    "acuity": "Acute",
    "investigation": "X-ray",
    "management": "Fixation",
    "hints": [
      "Assess extensor mechanism continuity.",
      "Displacement and step-off influence surgery."
    ]
  },
  {
    "name": "Quadriceps tendon rupture",
    "subspecialty": "Trauma",
    "region": "Knee",
    "pathology": "Trauma",
    "age": "Older adult",
    "acuity": "Acute",
    "investigation": "Ultrasound",
    "management": "Repair",
    "hints": [
      "Extensor lag above the patella.",
      "Often associated with systemic disease."
    ]
  },
  {
    "name": "Patellar tendon rupture",
    "subspecialty": "Trauma",
    "region": "Knee",
    "pathology": "Trauma",
    "age": "Young adult",
    "acuity": "Acute",
    "investigation": "Ultrasound",
    "management": "Repair",
    "hints": [
      "High-riding patella after explosive contraction.",
      "Check for inferior pole avulsion."
    ]
  },
  {
    "name": "ACL rupture",
    "subspecialty": "Sports knee",
    "region": "Knee",
    "pathology": "Instability",
    "age": "Young adult",
    "acuity": "Acute",
    "investigation": "MRI",
    "management": "Reconstruction",
    "hints": [
      "Pivoting injury with haemarthrosis.",
      "Think associated meniscal and osteochondral injury."
    ]
  },
  {
    "name": "Multiligament knee injury",
    "subspecialty": "Sports knee",
    "region": "Knee",
    "pathology": "Instability",
    "age": "Adult",
    "acuity": "Acute",
    "investigation": "MRI",
    "management": "Reconstruction",
    "hints": [
      "Always check vascular status and common peroneal nerve.",
      "KD classification and staged reconstruction may come up."
    ]
  },
  {
    "name": "Posterolateral corner injury of the knee",
    "subspecialty": "Sports knee",
    "region": "Knee",
    "pathology": "Instability",
    "age": "Adult",
    "acuity": "Subacute",
    "investigation": "MRI",
    "management": "Reconstruction",
    "hints": [
      "Varus thrust and dial test are useful clues.",
      "Often missed if focus is only on cruciates."
    ]
  },
  {
    "name": "Native knee septic arthritis",
    "subspecialty": "Knee",
    "region": "Knee",
    "pathology": "Infection",
    "age": "Adult",
    "acuity": "Acute",
    "investigation": "Aspiration",
    "management": "Washout",
    "hints": [
      "Hot swollen knee with raised inflammatory markers.",
      "Aspiration before antibiotics where feasible."
    ]
  },
  {
    "name": "Dislocated native hip",
    "subspecialty": "Trauma",
    "region": "Hip",
    "pathology": "Instability",
    "age": "Adult",
    "acuity": "Acute",
    "investigation": "X-ray",
    "management": "Reduction",
    "hints": [
      "Posterior dislocation after dashboard injury is classic.",
      "Urgent reduction reduces AVN risk."
    ]
  },
  {
    "name": "Open tibial fracture",
    "subspecialty": "Trauma",
    "region": "Tibia",
    "pathology": "Trauma",
    "age": "Adult",
    "acuity": "Acute",
    "investigation": "CT",
    "management": "Fixation",
    "hints": [
      "BOAST principles, antibiotics, debridement and soft tissue cover.",
      "Think temporary external fixation if needed."
    ]
  },
  {
    "name": "Pilon fracture",
    "subspecialty": "Trauma",
    "region": "Ankle",
    "pathology": "Trauma",
    "age": "Adult",
    "acuity": "Acute",
    "investigation": "CT",
    "management": "Fixation",
    "hints": [
      "Axial load distal tibial plafond injury.",
      "Soft tissues often dictate staged treatment."
    ]
  },
  {
    "name": "Ankle fracture-dislocation",
    "subspecialty": "Trauma",
    "region": "Ankle",
    "pathology": "Trauma",
    "age": "Adult",
    "acuity": "Acute",
    "investigation": "X-ray",
    "management": "Fixation",
    "hints": [
      "Urgent reduction before definitive fixation.",
      "Syndesmosis assessment is key."
    ]
  },
  {
    "name": "Achilles tendon rupture",
    "subspecialty": "Foot and ankle",
    "region": "Foot and ankle",
    "pathology": "Trauma",
    "age": "Adult",
    "acuity": "Acute",
    "investigation": "Ultrasound",
    "management": "Rehabilitation",
    "hints": [
      "Sudden calf pain and positive Simmonds test.",
      "Functional rehab versus surgery debate is examinable."
    ]
  },
  {
    "name": "Lisfranc injury",
    "subspecialty": "Foot and ankle",
    "region": "Midfoot",
    "pathology": "Trauma",
    "age": "Adult",
    "acuity": "Acute",
    "investigation": "CT",
    "management": "Fixation",
    "hints": [
      "Plantar bruising and midfoot instability are clues.",
      "Weight-bearing radiographs help if subtle."
    ]
  },
  {
    "name": "Calcaneal fracture",
    "subspecialty": "Trauma",
    "region": "Foot and ankle",
    "pathology": "Trauma",
    "age": "Adult",
    "acuity": "Acute",
    "investigation": "CT",
    "management": "Fixation",
    "hints": [
      "Axial load injury with heel swelling.",
      "Bohler angle and soft tissue timing matter."
    ]
  },
  {
    "name": "Aseptic loosening of a total hip replacement",
    "subspecialty": "Arthroplasty",
    "region": "Hip",
    "pathology": "Implant failure",
    "age": "Older adult",
    "acuity": "Chronic",
    "investigation": "X-ray",
    "management": "Revision",
    "hints": [
      "Painful THR with radiolucent lines or migration.",
      "Exclude infection before revision planning."
    ]
  },
  {
    "name": "Prosthetic joint infection of the hip",
    "subspecialty": "Arthroplasty",
    "region": "Hip",
    "pathology": "Infection",
    "age": "Older adult",
    "acuity": "Subacute",
    "investigation": "Aspiration",
    "management": "Revision",
    "hints": [
      "Use a structured work-up with inflammatory markers and aspiration.",
      "DAIR versus staged revision depends on timing and host factors."
    ]
  },
  {
    "name": "Femoroacetabular impingement",
    "subspecialty": "Young adult hip",
    "region": "Hip",
    "pathology": "Impingement",
    "age": "Young adult",
    "acuity": "Chronic",
    "investigation": "MRI",
    "management": "Arthroscopy",
    "hints": [
      "Cam/pincer morphology with groin pain in flexion.",
      "Labral pathology often coexists."
    ]
  },
  {
    "name": "Osteonecrosis of the femoral head",
    "subspecialty": "Young adult hip",
    "region": "Hip",
    "pathology": "Avascular",
    "age": "Adult",
    "acuity": "Subacute",
    "investigation": "MRI",
    "management": "Arthroplasty",
    "hints": [
      "Risk factors include steroids and alcohol.",
      "Pre-collapse disease may be considered for head-preserving options."
    ]
  },
  {
    "name": "Hip dysplasia with secondary osteoarthritis",
    "subspecialty": "Young adult hip",
    "region": "Hip",
    "pathology": "Developmental",
    "age": "Adult",
    "acuity": "Chronic",
    "investigation": "X-ray",
    "management": "Arthroplasty",
    "hints": [
      "Young adult with shallow acetabulum and lateral uncovering.",
      "Periacetabular osteotomy versus arthroplasty depends on stage."
    ]
  },
  {
    "name": "Abductor deficiency after total hip replacement",
    "subspecialty": "Arthroplasty",
    "region": "Hip",
    "pathology": "Implant failure",
    "age": "Older adult",
    "acuity": "Chronic",
    "investigation": "MRI",
    "management": "Reconstruction",
    "hints": [
      "Trendelenburg gait after hip arthroplasty.",
      "Assess component position, tendon integrity and nerve status."
    ]
  },
  {
    "name": "Aseptic loosening of a total knee replacement",
    "subspecialty": "Arthroplasty",
    "region": "Knee",
    "pathology": "Implant failure",
    "age": "Older adult",
    "acuity": "Chronic",
    "investigation": "X-ray",
    "management": "Revision",
    "hints": [
      "Painful TKR with progressive radiolucency or subsidence.",
      "Rule out infection first."
    ]
  },
  {
    "name": "Periprosthetic joint infection of the knee",
    "subspecialty": "Arthroplasty",
    "region": "Knee",
    "pathology": "Infection",
    "age": "Older adult",
    "acuity": "Subacute",
    "investigation": "Aspiration",
    "management": "Revision",
    "hints": [
      "A painful hot TKR is infection until proven otherwise.",
      "Alpha-defensin, cultures and staged revision may be discussed."
    ]
  },
  {
    "name": "Instability after total knee replacement",
    "subspecialty": "Arthroplasty",
    "region": "Knee",
    "pathology": "Instability",
    "age": "Older adult",
    "acuity": "Recurrent",
    "investigation": "X-ray",
    "management": "Revision",
    "hints": [
      "Flexion versus extension instability patterns matter.",
      "Component sizing and joint line are frequent viva issues."
    ]
  },
  {
    "name": "Periprosthetic fracture around a total knee replacement",
    "subspecialty": "Arthroplasty",
    "region": "Knee",
    "pathology": "Periprosthetic",
    "age": "Older adult",
    "acuity": "Acute",
    "investigation": "CT",
    "management": "Fixation",
    "hints": [
      "Consider implant stability and remaining distal bone stock.",
      "Fixation versus distal femoral replacement may be needed."
    ]
  },
  {
    "name": "Rotator cuff failure after shoulder arthroplasty",
    "subspecialty": "Arthroplasty",
    "region": "Shoulder",
    "pathology": "Implant failure",
    "age": "Older adult",
    "acuity": "Chronic",
    "investigation": "CT",
    "management": "Revision",
    "hints": [
      "Painful anatomic shoulder arthroplasty losing function.",
      "Conversion to reverse may be required."
    ]
  },
  {
    "name": "Glenoid loosening after anatomic total shoulder replacement",
    "subspecialty": "Arthroplasty",
    "region": "Shoulder",
    "pathology": "Implant failure",
    "age": "Older adult",
    "acuity": "Chronic",
    "investigation": "CT",
    "management": "Revision",
    "hints": [
      "Pain and radiolucency around glenoid component.",
      "Bone loss planning is important."
    ]
  },
  {
    "name": "Osteosarcoma of the distal femur",
    "subspecialty": "Tumour",
    "region": "Knee",
    "pathology": "Tumour",
    "age": "Adolescent",
    "acuity": "Subacute",
    "investigation": "MRI",
    "management": "Oncological",
    "hints": [
      "Painful metaphyseal lesion around the knee in a teenager.",
      "Biopsy must be planned with the sarcoma unit."
    ]
  },
  {
    "name": "Ewing sarcoma of the pelvis",
    "subspecialty": "Tumour",
    "region": "Pelvis",
    "pathology": "Tumour",
    "age": "Child",
    "acuity": "Subacute",
    "investigation": "MRI",
    "management": "Oncological",
    "hints": [
      "Systemic symptoms and small round blue cell tumour.",
      "Neoadjuvant chemotherapy and MDT planning are central."
    ]
  },
  {
    "name": "Giant cell tumour of the distal radius",
    "subspecialty": "Tumour",
    "region": "Wrist",
    "pathology": "Tumour",
    "age": "Young adult",
    "acuity": "Subacute",
    "investigation": "MRI",
    "management": "Reconstruction",
    "hints": [
      "Epiphyseal lesion in skeletally mature patient.",
      "Curettage adjuvants versus resection depend on grade/location."
    ]
  },
  {
    "name": "Enchondroma of the hand",
    "subspecialty": "Tumour",
    "region": "Hand",
    "pathology": "Tumour",
    "age": "Adult",
    "acuity": "Chronic",
    "investigation": "X-ray",
    "management": "Observation",
    "hints": [
      "Common benign cartilaginous lesion in phalanges/metacarpals.",
      "Differentiate from low-grade chondrosarcoma where relevant."
    ]
  },
  {
    "name": "Metastatic lesion of the proximal femur",
    "subspecialty": "Tumour",
    "region": "Femur",
    "pathology": "Tumour",
    "age": "Older adult",
    "acuity": "Subacute",
    "investigation": "MRI",
    "management": "Fixation",
    "hints": [
      "Impending/pathological fracture with Mirels scoring.",
      "Aim for durable fixation or reconstruction."
    ]
  },
  {
    "name": "Solitary bone cyst of the proximal humerus",
    "subspecialty": "Tumour",
    "region": "Shoulder",
    "pathology": "Tumour",
    "age": "Child",
    "acuity": "Chronic",
    "investigation": "X-ray",
    "management": "Observation",
    "hints": [
      "Benign cystic lesion often found after fracture.",
      "May settle with growth; intervention selective."
    ]
  },
  {
    "name": "Chronic osteomyelitis of the tibia",
    "subspecialty": "Infection",
    "region": "Tibia",
    "pathology": "Infection",
    "age": "Adult",
    "acuity": "Chronic",
    "investigation": "MRI",
    "management": "Antibiotics",
    "hints": [
      "Sinus, sequestrum and involucrum are classic concepts.",
      "Debridement plus dead-space management are key."
    ]
  },
  {
    "name": "Diabetic foot osteomyelitis",
    "subspecialty": "Infection",
    "region": "Foot and ankle",
    "pathology": "Infection",
    "age": "Older adult",
    "acuity": "Subacute",
    "investigation": "MRI",
    "management": "Antibiotics",
    "hints": [
      "Neuropathy, ulcer, sepsis control and revascularisation thinking.",
      "Surgery depends on tissue viability and host factors."
    ]
  },
  {
    "name": "Necrotising fasciitis of the limb",
    "subspecialty": "Infection",
    "region": "Tibia",
    "pathology": "Infection",
    "age": "Adult",
    "acuity": "Acute",
    "investigation": "Clinical",
    "management": "Debridement",
    "hints": [
      "Pain out of proportion and rapid systemic toxicity.",
      "Immediate aggressive debridement saves life."
    ]
  },
  {
    "name": "Septic non-union of the tibia",
    "subspecialty": "Infection",
    "region": "Tibia",
    "pathology": "Infection",
    "age": "Adult",
    "acuity": "Chronic",
    "investigation": "CT",
    "management": "Fixation",
    "hints": [
      "Infected fracture with instability and bone loss.",
      "Think staged debridement, stability and biology."
    ]
  },
  {
    "name": "Hallux valgus",
    "subspecialty": "Foot and ankle",
    "region": "Forefoot",
    "pathology": "Deformity",
    "age": "Adult",
    "acuity": "Chronic",
    "investigation": "X-ray",
    "management": "Osteotomy",
    "hints": [
      "Painful bunion with first ray deformity.",
      "Angles and TMT instability guide procedure choice."
    ]
  },
  {
    "name": "Hallux rigidus",
    "subspecialty": "Foot and ankle",
    "region": "Forefoot",
    "pathology": "Degenerative",
    "age": "Older adult",
    "acuity": "Chronic",
    "investigation": "X-ray",
    "management": "Fusion",
    "hints": [
      "Stiff painful first MTP joint with dorsal osteophytes.",
      "Cheilectomy versus fusion depends on stage."
    ]
  },
  {
    "name": "Adult acquired flatfoot from tibialis posterior dysfunction",
    "subspecialty": "Foot and ankle",
    "region": "Foot and ankle",
    "pathology": "Degenerative",
    "age": "Older adult",
    "acuity": "Chronic",
    "investigation": "MRI",
    "management": "Reconstruction",
    "hints": [
      "Progressive planovalgus deformity with medial pain.",
      "Flexible versus rigid stage changes management."
    ]
  },
  {
    "name": "Charcot neuroarthropathy of the foot",
    "subspecialty": "Foot and ankle",
    "region": "Midfoot",
    "pathology": "Degenerative",
    "age": "Older adult",
    "acuity": "Subacute",
    "investigation": "X-ray",
    "management": "Offloading",
    "hints": [
      "Warm swollen neuropathic foot can mimic infection.",
      "Immobilisation and offloading are central early."
    ]
  },
  {
    "name": "End-stage ankle arthritis",
    "subspecialty": "Foot and ankle",
    "region": "Ankle",
    "pathology": "Degenerative",
    "age": "Older adult",
    "acuity": "Chronic",
    "investigation": "X-ray",
    "management": "Fusion",
    "hints": [
      "Painful stiff ankle with functional limitation.",
      "Fusion versus replacement is a common exam comparison."
    ]
  },
  {
    "name": "Osteochondral lesion of the talus",
    "subspecialty": "Foot and ankle",
    "region": "Ankle",
    "pathology": "Trauma",
    "age": "Young adult",
    "acuity": "Subacute",
    "investigation": "MRI",
    "management": "Arthroscopy",
    "hints": [
      "Persistent deep ankle pain after sprain.",
      "Berndt-Harty style thinking and lesion size matter."
    ]
  },
  {
    "name": "Chronic lateral ankle instability",
    "subspecialty": "Foot and ankle",
    "region": "Ankle",
    "pathology": "Instability",
    "age": "Young adult",
    "acuity": "Recurrent",
    "investigation": "MRI",
    "management": "Reconstruction",
    "hints": [
      "Repeated sprains and giving way.",
      "Brostrom-style repair is classic."
    ]
  },
  {
    "name": "Morton neuroma",
    "subspecialty": "Foot and ankle",
    "region": "Forefoot",
    "pathology": "Neurological",
    "age": "Adult",
    "acuity": "Chronic",
    "investigation": "Ultrasound",
    "management": "Excision",
    "hints": [
      "Interdigital burning pain, usually 3rd webspace.",
      "Footwear modification and injections before surgery."
    ]
  },
  {
    "name": "Plantar fasciitis",
    "subspecialty": "Foot and ankle",
    "region": "Foot and ankle",
    "pathology": "Overuse",
    "age": "Adult",
    "acuity": "Chronic",
    "investigation": "Clinical",
    "management": "Physiotherapy",
    "hints": [
      "First-step heel pain worst in the morning.",
      "Usually conservative management."
    ]
  },
  {
    "name": "Fifth metatarsal Jones fracture",
    "subspecialty": "Foot and ankle",
    "region": "Forefoot",
    "pathology": "Trauma",
    "age": "Young adult",
    "acuity": "Acute",
    "investigation": "X-ray",
    "management": "Fixation",
    "hints": [
      "Metadiaphyseal fifth metatarsal fracture with non-union risk.",
      "Athletes often push fixation."
    ]
  },
  {
    "name": "Primary varus knee osteoarthritis",
    "subspecialty": "Knee",
    "region": "Knee",
    "pathology": "Degenerative",
    "age": "Older adult",
    "acuity": "Chronic",
    "investigation": "X-ray",
    "management": "Arthroplasty",
    "hints": [
      "Medial compartment wear and varus deformity.",
      "HTO versus UKR versus TKR depends on age, pattern and demand."
    ]
  },
  {
    "name": "Osteochondritis dissecans of the knee",
    "subspecialty": "Sports knee",
    "region": "Knee",
    "pathology": "Avascular",
    "age": "Adolescent",
    "acuity": "Subacute",
    "investigation": "MRI",
    "management": "Fixation",
    "hints": [
      "Juvenile lesion of the femoral condyle with mechanical symptoms.",
      "Stability and physeal status guide treatment."
    ]
  },
  {
    "name": "Patellofemoral instability",
    "subspecialty": "Sports knee",
    "region": "Knee",
    "pathology": "Instability",
    "age": "Young adult",
    "acuity": "Recurrent",
    "investigation": "MRI",
    "management": "Reconstruction",
    "hints": [
      "Recurrent dislocator with apprehension.",
      "Think TT-TG, trochlear dysplasia and MPFL."
    ]
  },
  {
    "name": "Discoid lateral meniscus",
    "subspecialty": "Sports knee",
    "region": "Knee",
    "pathology": "Developmental",
    "age": "Child",
    "acuity": "Chronic",
    "investigation": "MRI",
    "management": "Arthroscopy",
    "hints": [
      "Snapping knee in a child or adolescent.",
      "Saucerisation may be discussed."
    ]
  },
  {
    "name": "Degenerative meniscal tear",
    "subspecialty": "Knee",
    "region": "Knee",
    "pathology": "Degenerative",
    "age": "Older adult",
    "acuity": "Chronic",
    "investigation": "MRI",
    "management": "Physiotherapy",
    "hints": [
      "Middle-aged/older patient with joint line pain and OA overlap.",
      "Routine arthroscopy is often not first-line."
    ]
  },
  {
    "name": "Distal radius fracture",
    "subspecialty": "Trauma",
    "region": "Wrist",
    "pathology": "Trauma",
    "age": "Older adult",
    "acuity": "Acute",
    "investigation": "X-ray",
    "management": "Fixation",
    "hints": [
      "Assess shortening, dorsal tilt and intra-articular involvement.",
      "Non-operative versus volar plate decisions are common."
    ]
  },
  {
    "name": "Essex-Lopresti injury",
    "subspecialty": "Elbow",
    "region": "Forearm",
    "pathology": "Instability",
    "age": "Adult",
    "acuity": "Acute",
    "investigation": "X-ray",
    "management": "Reconstruction",
    "hints": [
      "Radial head fracture with DRUJ and interosseous membrane injury.",
      "Do not miss forearm longitudinal instability."
    ]
  },
  {
    "name": "Radial head fracture",
    "subspecialty": "Elbow",
    "region": "Elbow",
    "pathology": "Trauma",
    "age": "Adult",
    "acuity": "Acute",
    "investigation": "X-ray",
    "management": "Fixation",
    "hints": [
      "Check for associated instability, coronoid and Essex-Lopresti pattern.",
      "Mason classification is central."
    ]
  },
  {
    "name": "Proximal humeral fracture",
    "subspecialty": "Trauma",
    "region": "Shoulder",
    "pathology": "Trauma",
    "age": "Older adult",
    "acuity": "Acute",
    "investigation": "CT",
    "management": "Fixation",
    "hints": [
      "Tuberosity displacement and fracture pattern matter.",
      "Neer framework often used in exams."
    ]
  },
  {
    "name": "Clavicle non-union",
    "subspecialty": "Shoulder",
    "region": "Shoulder",
    "pathology": "Non-union",
    "age": "Adult",
    "acuity": "Chronic",
    "investigation": "CT",
    "management": "Fixation",
    "hints": [
      "Persistent pain and motion at a previous fracture site.",
      "May need plating with graft."
    ]
  },
  {
    "name": "Scapular body fracture",
    "subspecialty": "Trauma",
    "region": "Shoulder",
    "pathology": "Trauma",
    "age": "Adult",
    "acuity": "Acute",
    "investigation": "CT",
    "management": "Observation",
    "hints": [
      "Usually high-energy injury with chest trauma associations.",
      "Most are treated non-operatively."
    ]
  },
  {
    "name": "Brachial plexus birth palsy with internal rotation contracture",
    "subspecialty": "Paediatric",
    "region": "Shoulder",
    "pathology": "Neurological",
    "age": "Child",
    "acuity": "Chronic",
    "investigation": "MRI",
    "management": "Reconstruction",
    "hints": [
      "Secondary shoulder deformity after obstetric palsy.",
      "Muscle balancing and osteotomy options can be discussed."
    ]
  },
  {
    "name": "Leg length discrepancy after childhood hip disease",
    "subspecialty": "Deformity",
    "region": "Hip",
    "pathology": "Deformity",
    "age": "Adolescent",
    "acuity": "Chronic",
    "investigation": "X-ray",
    "management": "Lengthening",
    "hints": [
      "Block testing and long-leg radiographs are useful.",
      "Consider growth remaining and method of correction."
    ]
  },
  {
    "name": "Varus malunion of the distal femur",
    "subspecialty": "Deformity",
    "region": "Femur",
    "pathology": "Deformity",
    "age": "Adult",
    "acuity": "Chronic",
    "investigation": "CT",
    "management": "Osteotomy",
    "hints": [
      "Mechanical axis planning is central.",
      "Think correction planes and fixation method."
    ]
  },
  {
    "name": "Post-traumatic elbow stiffness",
    "subspecialty": "Elbow",
    "region": "Elbow",
    "pathology": "Stiffness",
    "age": "Adult",
    "acuity": "Chronic",
    "investigation": "CT",
    "management": "Release",
    "hints": [
      "Loss of functional arc after injury/surgery.",
      "Heterotopic ossification and instability risk matter."
    ]
  },
  {
    "name": "Heterotopic ossification after acetabular surgery",
    "subspecialty": "Trauma",
    "region": "Hip",
    "pathology": "Inflammatory",
    "age": "Adult",
    "acuity": "Chronic",
    "investigation": "CT",
    "management": "Excision",
    "hints": [
      "Painful restricted hip motion after major trauma/surgery.",
      "Timing of excision and prophylaxis are common viva points."
    ]
  }
];

const PARTIAL_GROUPS = {
  "subspecialty": {
    "Paediatric": [
      "Young adult hip",
      "Sports knee",
      "Deformity"
    ],
    "Spine": [
      "Tumour"
    ],
    "Shoulder": [
      "Arthroplasty",
      "Trauma"
    ],
    "Elbow": [
      "Hand",
      "Trauma"
    ],
    "Hand": [
      "Elbow"
    ],
    "Trauma": [
      "Arthroplasty",
      "Foot and ankle",
      "Spine",
      "Elbow",
      "Shoulder"
    ],
    "Arthroplasty": [
      "Trauma",
      "Young adult hip",
      "Shoulder",
      "Knee"
    ],
    "Young adult hip": [
      "Arthroplasty",
      "Paediatric"
    ],
    "Sports knee": [
      "Knee",
      "Paediatric"
    ],
    "Knee": [
      "Sports knee",
      "Arthroplasty"
    ],
    "Tumour": [
      "Spine",
      "Infection"
    ],
    "Infection": [
      "Tumour",
      "Trauma"
    ],
    "Foot and ankle": [
      "Trauma",
      "Deformity"
    ],
    "Deformity": [
      "Paediatric",
      "Foot and ankle",
      "Young adult hip"
    ]
  },
  "region": {
    "Shoulder": [
      "Elbow",
      "Spine"
    ],
    "Elbow": [
      "Shoulder",
      "Forearm",
      "Hand"
    ],
    "Forearm": [
      "Elbow",
      "Wrist"
    ],
    "Wrist": [
      "Hand",
      "Forearm",
      "Elbow"
    ],
    "Hand": [
      "Wrist",
      "Elbow"
    ],
    "Spine": [
      "Pelvis",
      "Shoulder"
    ],
    "Pelvis": [
      "Hip",
      "Spine"
    ],
    "Hip": [
      "Pelvis",
      "Femur",
      "Knee"
    ],
    "Femur": [
      "Hip",
      "Knee"
    ],
    "Knee": [
      "Hip",
      "Femur",
      "Tibia"
    ],
    "Tibia": [
      "Knee",
      "Ankle"
    ],
    "Ankle": [
      "Foot and ankle",
      "Midfoot",
      "Forefoot",
      "Tibia"
    ],
    "Foot and ankle": [
      "Ankle",
      "Midfoot",
      "Forefoot"
    ],
    "Midfoot": [
      "Forefoot",
      "Foot and ankle",
      "Ankle"
    ],
    "Forefoot": [
      "Midfoot",
      "Foot and ankle",
      "Ankle"
    ]
  },
  "pathology": {
    "Trauma": [
      "Instability",
      "Periprosthetic",
      "Non-union",
      "Stiffness"
    ],
    "Instability": [
      "Trauma",
      "Degenerative"
    ],
    "Degenerative": [
      "Impingement",
      "Inflammatory",
      "Overuse",
      "Stiffness"
    ],
    "Inflammatory": [
      "Infection",
      "Degenerative"
    ],
    "Infection": [
      "Inflammatory",
      "Tumour"
    ],
    "Tumour": [
      "Infection"
    ],
    "Developmental": [
      "Deformity",
      "Avascular"
    ],
    "Deformity": [
      "Developmental",
      "Degenerative"
    ],
    "Avascular": [
      "Developmental",
      "Degenerative",
      "Tumour"
    ],
    "Implant failure": [
      "Periprosthetic",
      "Degenerative",
      "Infection"
    ],
    "Periprosthetic": [
      "Implant failure",
      "Trauma"
    ],
    "Neurological": [
      "Instability",
      "Inflammatory"
    ],
    "Overuse": [
      "Degenerative",
      "Inflammatory"
    ],
    "Impingement": [
      "Degenerative",
      "Instability"
    ],
    "Non-union": [
      "Trauma",
      "Implant failure"
    ],
    "Stiffness": [
      "Degenerative",
      "Inflammatory"
    ]
  },
  "investigation": {
    "X-ray": [
      "CT",
      "MRI",
      "Clinical"
    ],
    "CT": [
      "X-ray",
      "MRI"
    ],
    "MRI": [
      "CT",
      "X-ray",
      "Ultrasound"
    ],
    "Ultrasound": [
      "MRI",
      "Clinical",
      "Aspiration"
    ],
    "Aspiration": [
      "Ultrasound",
      "MRI"
    ],
    "Clinical": [
      "X-ray",
      "Ultrasound",
      "Neurophysiology"
    ],
    "Neurophysiology": [
      "Clinical",
      "MRI"
    ]
  },
  "management": {
    "Fixation": [
      "Revision",
      "Repair",
      "Reduction",
      "Fusion",
      "Casting"
    ],
    "Revision": [
      "Fixation",
      "Arthroplasty",
      "Reconstruction"
    ],
    "Arthroplasty": [
      "Revision",
      "Reconstruction",
      "Fixation"
    ],
    "Reconstruction": [
      "Repair",
      "Revision",
      "Arthroplasty",
      "Arthroscopy"
    ],
    "Repair": [
      "Reconstruction",
      "Fixation",
      "Splintage"
    ],
    "Reduction": [
      "Fixation",
      "Casting"
    ],
    "Washout": [
      "Antibiotics",
      "Debridement",
      "Revision"
    ],
    "Antibiotics": [
      "Washout",
      "Debridement",
      "Observation"
    ],
    "Debridement": [
      "Antibiotics",
      "Washout",
      "Fixation"
    ],
    "Observation": [
      "Physiotherapy",
      "Rehabilitation",
      "Antibiotics"
    ],
    "Physiotherapy": [
      "Observation",
      "Rehabilitation",
      "Splintage"
    ],
    "Rehabilitation": [
      "Physiotherapy",
      "Observation",
      "Splintage"
    ],
    "Splintage": [
      "Physiotherapy",
      "Repair",
      "Casting"
    ],
    "Casting": [
      "Splintage",
      "Reduction",
      "Fixation"
    ],
    "Fusion": [
      "Arthroplasty",
      "Fixation",
      "Reconstruction"
    ],
    "Arthroscopy": [
      "Reconstruction",
      "Fixation",
      "Physiotherapy"
    ],
    "Oncological": [
      "Fixation",
      "Reconstruction"
    ],
    "Containment": [
      "Observation",
      "Fixation"
    ],
    "Harness": [
      "Casting",
      "Reduction"
    ],
    "Release": [
      "Reconstruction",
      "Physiotherapy"
    ],
    "Lengthening": [
      "Osteotomy",
      "Reconstruction"
    ],
    "Osteotomy": [
      "Reconstruction",
      "Fixation",
      "Lengthening"
    ],
    "Offloading": [
      "Observation",
      "Casting"
    ]
  }
};
