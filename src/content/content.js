export const content = {
  socials: {
    github: "https://github.com/VarunKrishnaC-18",
    linkedin: "https://www.linkedin.com/in/varun-krishna-c/",
    email: "mailto:varunkrishna281@gmail.com",
  },


  hero: {
    title: "Varun Krishna",
    subtitle: "Full Stack Developer",
    tagline: "I build scalable, user-centric web experiences.",
    showScrollHint: true
  },

  about: [
    "Hello, I’m Varun Krishna, a full-stack developer and machine learning enthusiast who enjoys building clean, reliable, and intelligent applications. What started as curiosity about how websites work has evolved into a strong interest in designing systems that are both user-friendly and data-driven.",

    "I approach development as a problem-solving process. Whether it’s structuring backend logic, working with databases, building ML models, or refining frontend experiences, I focus on writing clean, maintainable code that turns requirements into practical and scalable solutions. I’m also interested in cloud technologies and how modern applications leverage data, AI, and automation to deliver real-world impact. I continuously improve my skills through hands-on projects, with the goal of building production-ready and intelligent systems."
  ],
  // ENHANCEMENT #5: Skills with proficiency levels
  skillsWithProficiency: {
    frontend: [
      { name: "React", proficiency: 90 },
      { name: "HTML", proficiency: 95 },
      { name: "CSS", proficiency: 90 },
      { name: "Tailwind", proficiency: 85 },
      { name: "JavaScript", proficiency: 85 },
      { name: "Next.js", proficiency: 80 }
    ],
    backend: [
      { name: "Node.js", proficiency: 85 },
      { name: "Express", proficiency: 85 },
      { name: "Python", proficiency: 80 },
      { name: "Java", proficiency: 75 },
      { name: "C++", proficiency: 70 }
    ],
    database: [
      { name: "MySQL", proficiency: 90 },
      { name: "MongoDB", proficiency: 85 },
      { name: "PL/SQL", proficiency: 80 }
    ]
  },
  skills: {
    frontend: ["React", "HTML", "CSS", "Tailwind"],
    backend: ["Node.js", "Express"],
    database: ["MySQL"],
    tools: ["Git", "Docker"]
  },

 projects: [
  {
    title: "CareerPro – Smart India Hackathon",
    description:
      "A government-focused career guidance platform selected in the Top 50 of Smart India Hackathon. Designed to support large-scale users with secure authentication, real-time data flow, and scalable backend architecture.",
    tech: ["React", "TypeScript", "Firebase", "REST APIs"],
    image: "/careerpro.png",
    live: "https://v0-career-guidance-app-eta.vercel.app/auth",
    github: "https://github.com/VarunKrishnaC-18/CareerPro",
    featured: true
  },
  {
    title: "Excel Analytics Platform",
    description:
      "A full-stack analytics dashboard that parses Excel files and converts raw data into interactive 2D visualizations. Enables secure user sessions, trend analysis, and decision-making insights through dynamic charts.",
    tech: ["React", "Next.js", "Node.js", "MongoDB", "Chart.js", "Sheet.js"],
    image: "/excel-analytics.png",
    live: "https://excel-analytics-platform-wheat.vercel.app",
    github: "https://github.com/VarunKrishnaC-18/excel-analytics-platform"
  },
  {
    title: "Inventory Pro Management System",
    description:
      "A full-stack inventory management system with real-time stock tracking, vendor updates, and role-based authentication. Includes interactive dashboards and analytics to reduce manual inventory effort.",
    tech: ["React", "TypeScript", "Node.js", "Chart.js", "REST APIs"],
    image: "/inventory-pro.png",
    live: "https://inventorypro1.vercel.app",
    github: "https://github.com/VarunKrishnaC-18/inventory-pro"
  },
  {
    title: "Downscaling of Satellite based air quality map using AI/ML - UROP",
    description:
      "A full-stack AI system that downscales coarse satellite air quality data into high-resolution PM2.5 maps. Integrates machine learning models with a FastAPI backend and React frontend to deliver real-time predictions, interactive spatial visualization, and data-driven environmental insights.",
    tech: ["React", "FastAPI", "Python", "Machine Learning", "XGBoost", "GeoJSON", "Leaflet", "REST APIs"],
    image: "/vaayu.png",
    live: " https://vaayu-india-air-quality-downscaler-alpha.vercel.app",
    github: "https://github.com/VarunKrishnaC-18/VAAYU-India-Air-Quality-Downscaler--UROP-"
  }
],

 certifications: [
  {
    title: "AWS Certified Cloud Practitioner",
    url: "https://www.credly.com/"
  },
  {
    title: "AWS Certified AI Practitioner",
    url: "https://www.credly.com/"
  },
  {
    title: "AWS Certified Solutions Architect",
    url: "https://www.credly.com/"
  },
  {
    title: "AWS Certified Developer Associate",
    url: "https://www.credly.com/"
  },
  {
    title: "MongoDB Associate Developer",
    url: "https://www.credly.com/"
  }
 ]

};

