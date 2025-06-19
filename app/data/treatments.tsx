export const treatments: Record<string, any> = {
    rehabilitation: {
      title: "Rehabilitation",
      description:
        "Rehabilitation helps individuals recover strength, mobility, and independence after injuries or surgeries—involving physical, occupational, and emotional support.",
      images: [
        "/images/rehabilitation-1.jpg",
        "/images/rehabilitation-2.jpg",
        "/images/rehabilitation-3.jpg",
      ],
      steps: [
        { title: "Initial Assessment", detail: "Multidisciplinary evaluation of your condition and recovery goals." },
        { title: "Customized Treatment Plan", detail: "Tailored therapies and exercises for your needs." },
        { title: "Therapy Sessions", detail: "One-on-one sessions to rebuild strength and function." },
        { title: "Progress Monitoring", detail: "Regular assessments to track improvements." },
        { title: "Final Evaluation", detail: "Measuring recovery outcomes and future recommendations." },
      ],
    },
    diagnostics: {
      title: "Diagnostics",
      description:
        "Accurate and advanced diagnostic services to support fast and effective treatment decisions.",
      images: [
        "/images/diagnostics-1.jpg",
        "/images/diagnostics-2.jpg",
        "/images/diagnostics-3.jpg",
      ],
      steps: [
        { title: "Specialist Consultation", detail: "Discuss symptoms and medical history with our specialists." },
        { title: "Diagnostic Testing", detail: "Perform imaging, lab tests, or genetic screening." },
        { title: "Result Evaluation", detail: "Expert analysis of test outcomes." },
        { title: "Treatment Planning", detail: "Recommendations based on precise results." },
      ],
    },
    orthopaedics: {
      title: "Orthopaedics",
      description:
        "Treatment for musculoskeletal issues including bones, joints, and ligaments, via surgical and non-surgical methods.",
      images: [
        "/images/orthopaedics-1.jpg",
        "/images/orthopaedics-2.jpg",
        "/images/orthopaedics-3.jpg",
      ],
      steps: [
        { title: "Consultation", detail: "Initial assessment by orthopedic specialist." },
        { title: "Imaging & Diagnosis", detail: "Using X-ray, MRI, or CT scans." },
        { title: "Treatment Plan", detail: "Recommending surgery or conservative therapy." },
        { title: "Rehabilitation", detail: "Physical therapy for full recovery." },
      ],
    },
    "plastic-surgery": {
      title: "Plastic and Aesthetic Surgery",
      description:
        "Cosmetic and reconstructive procedures to enhance appearance or restore function.",
      images: [
        "/images/plastic-surgery-1.jpg",
        "/images/plastic-surgery-2.jpg",
        "/images/plastic-surgery-3.jpg",
      ],
      steps: [
        { title: "Initial Consultation", detail: "Understanding your goals and planning the procedure." },
        { title: "Preoperative Evaluation", detail: "Medical readiness and prep steps." },
        { title: "Surgery", detail: "Execution of cosmetic or reconstructive operation." },
        { title: "Recovery Monitoring", detail: "Guided post-op care and healing." },
      ],
    },
    oncology: {
      title: "Oncology",
      description:
        "Comprehensive cancer diagnosis and treatment using modern therapies and support.",
      images: [
        "/images/oncology-1.jpg",
        "/images/oncology-2.jpg",
        "/images/oncology-3.jpg",
      ],
      steps: [
        { title: "Screening", detail: "Detecting early signs using imaging or tests." },
        { title: "Diagnosis", detail: "Confirming and staging cancer." },
        { title: "Treatment Planning", detail: "Deciding on chemo, radiation, or surgery." },
        { title: "Therapy & Support", detail: "Continuous care and emotional support." },
      ],
    },
    "assisted-reproduction": {
      title: "Assisted Reproduction",
      description:
        "Helping families grow through advanced fertility treatments.",
      images: [
        "/images/reproduction-1.jpg",
        "/images/reproduction-2.jpg",
        "/images/reproduction-3.jpg",
      ],
      steps: [
        { title: "Fertility Testing", detail: "Evaluate reproductive health." },
        { title: "Hormonal Therapy", detail: "Stimulate ovulation and egg production." },
        { title: "IVF/ICSI", detail: "Fertilization of eggs in lab." },
        { title: "Embryo Transfer", detail: "Implantation into uterus." },
      ],
    },
    "spinal-surgery": {
      title: "Spinal Surgery",
      description:
        "Surgical treatments for spine conditions and injuries.",
      images: [
        "/images/spinal-surgery-1.jpg",
        "/images/spinal-surgery-2.jpg",
        "/images/spinal-surgery-3.jpg",
      ],
      steps: [
        { title: "Imaging & Diagnosis", detail: "Use MRI or CT to locate spinal issues." },
        { title: "Surgical Planning", detail: "Detailed pre-op discussion and planning." },
        { title: "Surgical Procedure", detail: "Minimally invasive or open spine surgery." },
        { title: "Recovery", detail: "Post-op care and rehabilitation." },
      ],
    },
    prosthetics: {
      title: "Prosthetics",
      description:
        "Creating and fitting artificial limbs and devices for mobility and comfort.",
      images: [
        "/images/prosthetics-1.jpg",
        "/images/prosthetics-2.jpg",
        "/images/prosthetics-3.jpg",
      ],
      steps: [
        { title: "Evaluation", detail: "Assessing patient needs and goals." },
        { title: "Design", detail: "Customizing prosthetic device." },
        { title: "Fitting", detail: "Testing and adjusting for comfort and use." },
        { title: "Rehab & Training", detail: "Training in movement and balance." },
      ],
    },
    "mental-rehabilitation": {
      title: "Mental Rehabilitation",
      description:
        "Supportive treatments to promote emotional healing and mental strength.",
      images: [
        "/images/mental-rehab-1.jpg",
        "/images/mental-rehab-2.jpg",
        "/images/mental-rehab-3.jpg",
      ],
      steps: [
        { title: "Psych Evaluation", detail: "Understanding mental health status." },
        { title: "Therapy Planning", detail: "Creating individualized plans." },
        { title: "Counseling", detail: "One-on-one or group therapy sessions." },
        { title: "Monitoring", detail: "Ongoing support and progress tracking." },
      ],
    },
    "general-surgery": {
      title: "General Surgery",
      description:
        "Surgical treatment for a wide variety of conditions performed by expert surgeons.",
      images: [
        "/images/general-surgery-1.jpg",
        "/images/general-surgery-2.jpg",
        "/images/general-surgery-3.jpg",
      ],
      steps: [
        { title: "Diagnosis", detail: "Consultation and testing." },
        { title: "Pre-op Prep", detail: "Getting ready for surgery safely." },
        { title: "Surgical Procedure", detail: "Performing the planned operation." },
        { title: "Recovery Care", detail: "Post-operative healing support." },
      ],
    },
    stomatology: {
      title: "Stomatology and Stomatosurgery",
      description:
        "Dental and oral surgical care from cleaning to complex operations.",
      images: [
        "/images/stomatology-1.jpg",
        "/images/stomatology-2.jpg",
        "/images/stomatology-3.jpg",
      ],
      steps: [
        { title: "Oral Exam", detail: "Complete check-up and screening." },
        { title: "Imaging", detail: "Dental X-rays or 3D scans." },
        { title: "Procedure", detail: "Cleaning, fillings, surgery as needed." },
        { title: "Follow-up", detail: "Healing checks and hygiene advice." },
      ],
    },
    "cardiac-surgery": {
      title: "Cardiac Surgery",
      description:
        "Life-saving heart surgeries using the latest techniques.",
      images: [
        "/images/cardiac-surgery-1.jpg",
        "/images/cardiac-surgery-2.jpg",
        "/images/cardiac-surgery-3.jpg",
      ],
      steps: [
        { title: "Cardiac Evaluation", detail: "Heart tests and consultations." },
        { title: "Surgery Planning", detail: "Determining the right surgical approach." },
        { title: "Procedure", detail: "Bypass, valve repair, or other heart ops." },
        { title: "Post-op Rehab", detail: "Heart health monitoring and rehab." },
      ],
    },
  };
  