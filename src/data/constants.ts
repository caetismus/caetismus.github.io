import {
  Project,
  SkillItem,
  EducationItem,
  ExperienceItem,
  CertificationItem,
  ContactInfo,
} from './types';

// =============================================================================
//  PERSONAL IDENTITY
// =============================================================================
export const ENGINEER_NAME = 'James Cubito';
export const ENGINEER_ROLE = 'Registered Electrical Engineer';
export const HERO_DESCRIPTION =
  'Graduate Electrical Engineer from Pamantasan ng Lungsod ng Maynila with a focus on power systems, protection & controls, energy, and electrical infrastructure. Interested in gaining hands-on experience, developing technical expertise, and contributing to sustainable energy solutions. Open to opportunities for learning, collaboration, and professional growth.';

// Portrait image path (place file at public/assets/images/portrait.jpg)
// If the file is missing, the Hero component will show an initials placeholder.
export const PORTRAIT_IMAGE = 'assets/images/portrait.jpg';

// =============================================================================
//  CONTACT INFORMATION
//  - Upload resume.pdf   → public/assets/documents/
// =============================================================================
export const CONTACT_INFO: ContactInfo = {
  email: 'jamescubito@gmail.com',
  linkedinUrl: 'https://linkedin.com/in/jamescubito',
  linkedinDisplay: 'in/jamescubito',
  githubUrl: 'https://github.com/caetismus',
  githubDisplay: 'caetismus',
};

export const RESUME_PATH = 'assets/documents/resume.pdf';

// =============================================================================
//  EDUCATION
//  Logo images → public/assets/images/
// =============================================================================
export const EDUCATION: EducationItem[] = [
  {
    school: 'Pamantasan ng Lungsod ng Maynila',
    degree: 'Bachelor of Science in Electrical Engineering',
    location: 'Intramuros, Manila',
    year: 'Aug 2026',
    logo: 'assets/images/plm.png',
    highlights: [
      'Scholar: DOST-SEI Merit 2020',
      'Member: PLM DOST Scholars Association',
      'Member: PLM Junior Institute of Electrical Engineers',
    ],
  },
  {
    school: 'De La Salle University – Manila',
    degree: 'Senior High School, STEM',
    location: 'Malate, Manila',
    year: 'May 2020',
    logo: 'assets/images/dlsu.png',
    highlights: [
      'Member: DLSU SHS Robotics and Engineering Club',
      'Member: DLSU SHS Student Ambassadors',
    ],
  },
];

// =============================================================================
//  EXPERIENCE / INTERNSHIPS
//  Wrap text in **double asterisks** to render bold (e.g. **AutoCAD**)
//  Logo images → public/assets/images/
// =============================================================================
export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Intern, Plant Performance and Asset Management',
    company: 'ACEN Corporation',
    location: 'Makati',
    duration: 'July – Oct 2025',
    type: 'Internship',
    logo: 'assets/images/acen.png',
    description: [
      'Assisted the **Plant Performance Team** in consolidating operational data from multiple plant sites.',
      'Streamlined plant downtime data collection and analysis using **advanced MS Excel** automation, reducing manual overhead and entry errors.',
      'Prepared and presented daily performance reports for management using **Tableau** and **Excel Power Query**.',
      'Utilised **Snowflake SQL** for data extraction and analysis to support reporting accuracy.',
      'Coordinated with solar and wind plants on submission of **RCA reports** on issues for team analysis.',
      'Spearheaded the successful handover of the **Daily Asset Performance Report** framework to the Data Management team within a 1-month timeline.',
    ],
  },
  {
    role: 'Engineering Intern',
    company: 'IRAH Solutions and Service, Inc.',
    location: 'Quezon City',
    duration: 'July – Aug 2024',
    type: 'Internship',
    logo: 'assets/images/irah.png',
    description: [
      'Assisted in the design and physical installation of **FDAS and auxiliary systems**, ensuring accurate wiring compliant with safety standards.',
      'Resolved site equipment shortages by coordinating with the main office to expedite logistics, effectively preventing project downtime.',
      'Managed onsite administrative logistics of allowance distribution to the intern team assigned to the site.',
    ],
  },
];

// =============================================================================
//  CERTIFICATIONS & AWARDS
//  Logo images → public/assets/images/
// =============================================================================
export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Registered Electrical Engineer',
    issuer: 'Professional Regulation Commission',
    year: '2026',
    logo: 'assets/images/prc.png',
    highlight: true,
    // link: 'https://...',  // Uncomment and add URL when available
  },
  {
    title: 'Electrical Installation & Maintenance NC II',
    issuer: 'TESDA',
    year: '2025',
    logo: 'assets/images/tesda.png',
    link: 'https://www.tesda.gov.ph/Rwac/Rwac2017',
    highlight: true,
  },
  {
    title: 'Lean Six Sigma Yellow Belt',
    issuer: 'MF Treinamentos',
    year: '2025',
    logo: 'assets/images/mf_treinamentos.png',
    link: 'https://www.linkedin.com/in/jamescubito/overlay/Certifications/18319228/treasury/?profileId=ACoAAB-vvhABwkL8ZdOhGpXwW1ysdkBLFnUlenc',
  },
  {
    title: 'Photovoltaic System Installation NC II',
    issuer: 'eTESDA',
    year: '2025',
    logo: 'assets/images/tesda.png',
    link: 'https://drive.google.com/drive/folders/17bun6aQXyKUEdBzQPfa1MNRRDbFNbrkr?usp=sharing',
  },
//  {
//    title: 'Merit Scholar',
//    issuer: 'DOST-Science Education Institute',
//    year: '2020',
//    logo: 'assets/images/dost.png',
//    link: 'https://www.thesummitexpress.com/2020/02/a-g-passers-october-2019-dost-scholarship-exam-result-ay-2020-2021.html',
//  },
];

// =============================================================================
//  ACADEMIC PROJECTS
// =============================================================================
export const ACADEMIC_PROJECTS: Project[] = [
  {
    id: 'thesis',
    title: 'Project Thesis: Biofuel Production',
    subtitle: 'Anaerobic Digestion of Chlorophyta Biomass Co-digested with Livestock Manure: Harnessing Biogas for Methane-Derived Electrochemical Energy Conversion in Cabuyao, Laguna',
    category: 'Research',
    description: 'Small-scale exploratory study on a modified biomass feedstock based on algae and cattle waste for methane gas production as an alternative fuel source for biogas generators.',
    technologies: ['Biogas', 'Biomass Feedstock', 'Renewable Energy', 'Research Methodology'],
  },
  {
    id: 'salestrackr',
    title: 'AquaSales: Python-Based Sales Tracking System',
    category: 'Software',
    description: 'Developed a digital tracking system to tabulate daily sales and stock of a water refilling station, increasing daily productivity and operational efficiency.',
    technologies: ['Python', 'Data Management', 'Business Application'],
  },
  {
    id: 'xl-fault-calc',
    title: 'Excel-Based Symmetrical Fault Calculator',
    category: 'Power Systems',
    description: 'Developed a fault calculator for three-phase faults based on a configurable number of buses and line parameters using the Z-bus method.',
    technologies: ['MS Excel', 'Power System Analysis', 'Z-bus Method'],
  },
  {
    id: 'shs-capstone',
    title: 'Research Capstone: Statistical Correlational Study',
    subtitle: 'Statistical Analysis of Psychological Health and GWA of DLSU 118 STEM Students',
    category: 'Research',
    description: 'Conducted a statistical correlational study of GWA and mental health among SHS STEM students; presented at the DLSU SHS 1st Research Congress.',
    technologies: ['Statistical Analysis', 'Data Correlation', 'Academic Research'],
  },
];

// =============================================================================
//  PERSONAL PROJECTS
//  Engineering projects currently in active development.
//  Toggle 'isUpcoming: false' to remove the preview blur once completed.
// =============================================================================
export const SPECIALIZED_PROJECTS: Project[] = [
  {
    id:          'specialized-project-1',
    title:       '[Upcoming Specialized Project 1]',
    subtitle:    '[Optional Subtitle / Focus Area]',
    category:    '[Specialization / Field]',
    description: '[In Development] Fill this section with your project description, methodology, and technical outcomes once ready to showcase.',
    technologies: ['[Tool 1]', '[Tool 2]', '[Tool 3]'],
    isUpcoming:   true,
  },
  {
    id:          'specialized-project-2',
    title:       '[Upcoming Specialized Project 2]',
    subtitle:    '[Optional Subtitle / Focus Area]',
    category:    '[Specialization / Field]',
    description: '[In Development] Fill this section with your project description, methodology, and technical outcomes once ready to showcase.',
    technologies: ['[Tool 1]', '[Tool 2]', '[Tool 3]'],
    isUpcoming:   true,
  },
];

// =============================================================================
//  TECHNICAL SKILLS (Consolidated Tech Stack & Skills)
// =============================================================================
export const TECHNICAL_SKILLS: SkillItem[] = [
  // Power Systems Software
  { name: 'Pandapower', category: 'Power Systems Analysis' },
  { name: 'ETAP', category: 'Power Systems Analysis' },
  { name: 'PSS/E', category: 'Power Systems Analysis' },
  { name: 'PSCAD', category: 'Power Systems Analysis' },
  { name: 'PowerWorld', category: 'Power Systems Analysis' },

  // Design & CAD Software
  { name: 'AutoCAD', category: 'Engineering Design & CAD' },
  { name: 'EPLAN', category: 'Engineering Design & CAD' },
  { name: 'Revit', category: 'Engineering Design & CAD' },
  { name: 'DIALux evo', category: 'Engineering Design & CAD' },
  { name: 'PVSyst', category: 'Engineering Design & CAD' },

  // Data Analytics & Programming
  { name: 'Python', category: 'Data Analytics & Programming' },
  { name: 'MATLAB / Simulink', category: 'Data Analytics & Programming' },
  { name: 'C', category: 'Data Analytics & Programming' },
  { name: 'SQL (Snowflake)', category: 'Data Analytics & Programming' },
  { name: 'Tableau / Power BI', category: 'Data Analytics & Programming' },
  { name: 'MS Excel', category: 'Data Analytics & Programming' },
  
  // General Software
  { name: 'Microsoft Office Suite', category: 'General Software', details: 'Word, Excel, Powerpoint ' },
  { name: 'Google Workspace', category: 'General Software', details: 'Docs, Sheets, Slide, Drive' },
  { name: 'Canva', category: 'General Software' },
];
