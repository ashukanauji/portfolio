export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const personalInfo = {
  name: 'Ashish Das',
  title: 'M.Tech Computer Science Student | Machine Learning | Full Stack Developer | Cloud Enthusiast',
  phone: '+91 7890848001',
  email: 'ashu.official1254@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ashish-das-190806193/',
  github: 'https://github.com/ashukanauji/',
  leetcode: 'https://leetcode.com/u/ashukanauji54/',
  shortBio:
    'M.Tech Computer Science student at NIT Rourkela with experience in Machine Learning, Cloud Computing, and Full Stack Development. Skilled in building scalable systems, medical image segmentation models, and modern web applications.',
};

export const aboutText =
  'I am currently pursuing my M.Tech in Computer Science and Engineering at NIT Rourkela, where I am deepening my expertise in machine learning systems and modern software architecture. My core interests lie at the intersection of Machine Learning, Cloud Computing, and Full Stack Development, with hands-on experience using Google Cloud Platform for deploying and managing scalable solutions. I have also worked on medical image segmentation research, including advanced dual-decoder U-Net models for ischemic stroke lesion detection. I am passionate about building robust, scalable products that solve real-world problems and create measurable impact.';

export const education = [
  {
    institute: 'National Institute of Technology Rourkela',
    degree: 'Master of Technology in Computer Science and Engineering',
    duration: '2024 – Present',
    score: 'CGPA: 8.02',
  },
  {
    institute: 'MCKV Institute of Engineering',
    degree: 'Bachelor of Technology in Information Technology',
    duration: '2019 – 2023',
    score: 'CGPA: 8.68',
  },
  {
    institute: 'Shree Jain Vidyalaya',
    degree: 'Higher Secondary',
    duration: '2018',
    score: '74.20%',
  },
];

export const experiences = [
  {
    company: 'Cognizant Technology Solutions',
    role: 'Programmer Analyst Trainee',
    duration: 'June 2024 – August 2024',
    location: 'Kochi, India',
    responsibilities: [
      'Configured and managed GCP storage solutions including Cloud Storage, Cloud SQL, and Bigtable.',
      'Deployed and maintained infrastructure using Compute Engine, Kubernetes Engine, and Cloud Functions.',
      'Optimized databases and analytics workflows using BigQuery and Datastore.',
    ],
  },
  {
    company: 'Cognizant Technology Solutions',
    role: 'GenC Intern',
    duration: 'December 2023 – May 2024',
    location: 'Coimbatore, India',
    responsibilities: [
      'Worked with core Google Cloud Platform services across storage and compute workflows.',
      'Built data pipelines using Apache PySpark and Hadoop for large-scale data processing.',
      'Processed and transformed large datasets efficiently for downstream analytics.',
    ],
  },
];

export const projects = [
  {
    title: 'Stroke Lesion Segmentation using Dual-Decoder U-Net',
    stack: ['TensorFlow', 'Python', 'Medical Imaging'],
    description: [
      'Built a dual-decoder U-Net architecture for ischemic stroke lesion segmentation.',
      'Designed one decoder for lesion masks and another for boundary map prediction.',
      'Implemented NIfTI data pipelines, slice extraction, and patient-level data splits.',
      'Achieved a Dice score of 0.7012 on unseen patient test data.',
    ],
    github: 'https://github.com/ashukanauji/',
  },
  {
    title: 'Commercelly – E-Commerce Platform',
    stack: ['MERN Stack', 'JWT', 'REST API'],
    description: [
      'Developed a full stack e-commerce platform with modular frontend and backend layers.',
      'Implemented JWT authentication and role-based access control.',
      'Built product management, cart, and checkout workflows.',
      'Managed state with React Context API for predictable UX flows.',
    ],
    github: 'https://github.com/ashukanauji/',
  },
  {
    title: 'Heart Disease Prediction Model',
    stack: ['Python', 'scikit-learn', 'pandas', 'numpy'],
    description: [
      'Implemented and compared KNN, Logistic Regression, SVM, and Random Forest models.',
      'Built a predictive pipeline for heart disease detection.',
      'Performed preprocessing, model training, and evaluation for robust accuracy.',
    ],
    github: 'https://github.com/ashukanauji/',
  },
];

export const skills = {
  'Programming Languages': ['Java', 'Python', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  'Web Technologies': ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
  'Big Data': ['Apache PySpark', 'Hadoop'],
  Cloud: ['Google Cloud Platform'],
  Tools: ['GitHub', 'VS Code', 'Eclipse', 'Spyder'],
  'Operating Systems': ['Linux', 'Windows'],
  Testing: ['JUnit', 'Jumble'],
};
