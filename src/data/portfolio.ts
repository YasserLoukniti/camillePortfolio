export const portfolioData = {
  personal: {
    firstName: "Camille",
    lastName: "Perlès",
    fullName: "Camille Perlès",
    headline: "Designer de produits IA",
    jobTitle: "Designer de produit IA",
    location: "Paris, Île-de-France, France",
    email: "contact@camilleperles.com",
    linkedIn: "https://www.linkedin.com/in/camille-perles/",
    profileImage: "https://media.licdn.com/dms/image/v2/D4E03AQHGYvAwcRbvFA/profile-displayphoto-shrink_800_800/B4EZdkGXGOHgAc-/0/1749731079423?e=1760572800&v=beta&t=tYLR2CNZoDmHzkyUm8NzFXnhaHS6NcUWjVtVlfkjsGg",
    bio: "Designer de produits spécialisée en IA avec une passion pour créer des expériences utilisateur exceptionnelles et innovantes."
  },

  experiences: [
    {
      company: "Weneeds",
      title: "Designer de produit IA",
      dateRange: "Avril 2024 - Présent",
      duration: "1 an 6 mois",
      current: true,
      description: "Conception d'expériences IA innovantes avec focus sur l'utilisabilité et la satisfaction client",
      skills: ["Méthodes agiles", "Product design", "Figma", "Design UX", "Intelligence artificielle", "Design Sprints", "Test utilisateur", "Lancement de produit"],
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQHdMHOeVu-NBA/company-logo_200_200/company-logo_200_200/0/1736939989055/weneeds_logo?e=1760572800&v=beta&t=hx8Ih3oHt7gX1MizuXByrxbH0C6DtmbNGAssJkeQUcs"
    },
    {
      company: "Pôle Emploi",
      title: "UX/UI Designer",
      dateRange: "Sept 2023 - Déc 2023",
      duration: "4 mois",
      current: false,
      description: "Design d'interfaces pour améliorer l'expérience des utilisateurs",
      skills: ["Product design", "Design UX"],
      logo: "https://media.licdn.com/dms/image/v2/C560BAQHO_oNGj-1-ZQ/company-logo_200_200/company-logo_200_200/0/1630589418385/bd_com_software_logo?e=1760572800&v=beta&t=2GUn_foxHJrLEMfK0xrXvmLN6eXJ7dSk4WF0EMQM1dA"
    },
    {
      company: "Agregio Solutions",
      title: "UX/UI Designer",
      dateRange: "Sept 2022 - Août 2023",
      duration: "1 an",
      current: false,
      description: "Conception d'interfaces utilisateur pour solutions énergétiques innovantes",
      skills: ["Recherche UX", "Méthodes agiles", "Figma", "Design Thinking", "Test utilisateur", "Entretiens utilisateurs"],
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQHCdnbJJdm2Dg/company-logo_100_100/B4EZVbfF3dGgAY-/0/1740996632394/agregio_solutions_groupe_edf_logo?e=1760572800&v=beta&t=IfZHS_k9STohHyk3_ePdpJzBdfYXkfMEEfxvf4CIw8s"
    },
    {
      company: "GreenScale",
      title: "Designer",
      dateRange: "Avril 2022 - Août 2022",
      duration: "5 mois",
      current: false,
      description: "Design d'interfaces pour solutions durables",
      skills: ["Adobe XD", "Product design", "Design Thinking", "Wireframing", "Test utilisateur"],
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQEoriJc_HYe8w/company-logo_200_200/company-logo_200_200/0/1630535872496/greenscale_fr_logo?e=1760572800&v=beta&t=G-Md05t89M3O06Kh0yU6M4c2gnDbPg368TCMKDyhoNs"
    }
  ],

  projects: [
    {
      id: 1,
      title: "AI Assistant Dashboard",
      category: "Product Design",
      description: "Interface intuitive pour assistant IA avec focus sur l'accessibilité",
      image: "/projects/ai-assistant.jpg",
      tags: ["UX Design", "AI", "Dashboard", "Figma"],
      featured: true
    },
    {
      id: 2,
      title: "Smart Energy Platform",
      category: "UX/UI Design",
      description: "Plateforme de gestion énergétique pour Agregio Solutions",
      image: "/projects/energy-platform.jpg",
      tags: ["Product Design", "Data Visualization", "B2B"],
      featured: true
    },
    {
      id: 3,
      title: "Mobile Banking App",
      category: "Mobile Design",
      description: "Application bancaire mobile avec focus sur la simplicité",
      image: "/projects/banking-app.jpg",
      tags: ["Mobile", "iOS", "Finance", "UX"],
      featured: false
    },
    {
      id: 4,
      title: "E-commerce Redesign",
      category: "Web Design",
      description: "Refonte complète d'une plateforme e-commerce",
      image: "/projects/ecommerce.jpg",
      tags: ["E-commerce", "Web", "Conversion", "A/B Testing"],
      featured: true
    },
    {
      id: 5,
      title: "Healthcare Portal",
      category: "Product Design",
      description: "Portail patient pour établissement de santé",
      image: "/projects/healthcare.jpg",
      tags: ["Healthcare", "Accessibility", "Web App"],
      featured: false
    },
    {
      id: 6,
      title: "AI Content Creator",
      category: "AI Tools",
      description: "Outil de création de contenu alimenté par l'IA",
      image: "/projects/ai-content.jpg",
      tags: ["AI", "Content", "SaaS", "Dashboard"],
      featured: true
    }
  ],

  skills: {
    design: [
      { name: "Figma", level: 95 },
      { name: "Product Design", level: 90 },
      { name: "Design Systems", level: 85 },
      { name: "Wireframing", level: 90 },
      { name: "Prototyping", level: 88 }
    ],
    research: [
      { name: "User Research", level: 85 },
      { name: "User Testing", level: 88 },
      { name: "User Interviews", level: 82 },
      { name: "Data Analysis", level: 75 },
      { name: "A/B Testing", level: 70 }
    ],
    technical: [
      { name: "HTML/CSS", level: 80 },
      { name: "Design Thinking", level: 90 },
      { name: "Agile Methods", level: 85 },
      { name: "AI Design", level: 88 },
      { name: "Design Sprints", level: 82 }
    ]
  },

  education: [
    {
      school: "University of Montpellier",
      degree: "Master Marketing",
      field: "Marketing",
      dateRange: "2021 - 2023",
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQFlLO95DxW91g/company-logo_200_200/company-logo_200_200/0/1700230998634/universite_de_montpellier_logo?e=1760572800&v=beta&t=t1RjNJ6K11aW65l9msqT2oUn6SmZfoinlc13kLNOzAo"
    },
    {
      school: "University of Montpellier",
      degree: "Diplôme Création de site web",
      field: "Design de pages Web",
      dateRange: "2021 - 2022",
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQFlLO95DxW91g/company-logo_200_200/company-logo_200_200/0/1700230998634/universite_de_montpellier_logo?e=1760572800&v=beta&t=t1RjNJ6K11aW65l9msqT2oUn6SmZfoinlc13kLNOzAo"
    },
    {
      school: "Université de Sherbrooke",
      degree: "Baccalauréat",
      field: "Administration des affaires",
      dateRange: "2019 - 2020",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQHPmp1zHRMp8Q/company-logo_200_200/company-logo_200_200/0/1633543567623/universite_de_sherbrooke_logo?e=1760572800&v=beta&t=lnjDR3PvgVbHrBrW3hG8ozDyVIV8ahMfiJ_DYOf7bSs"
    }
  ],

  certifications: [
    {
      name: "PimpMyApp",
      authority: "PimpMyApp by Warren Walter",
      issued: "Janvier 2024"
    },
    {
      name: "TOEIC - 930/990",
      authority: "ETS",
      issued: "Février 2019"
    }
  ],

  languages: [
    { name: "Français", proficiency: "Langue maternelle" },
    { name: "Anglais", proficiency: "Professionnel complet" },
    { name: "Espagnol", proficiency: "Intermédiaire" },
    { name: "Italien", proficiency: "Intermédiaire" }
  ]
};