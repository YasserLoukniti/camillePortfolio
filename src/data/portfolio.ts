export const portfolioData = {
  personal: {
    firstName: "Camille",
    lastName: "Perlès",
    fullName: "Camille Perlès",
    headline: "Product Designer & Gestion Produit",
    jobTitle: "Product Designer | UX/UI | Gestion Produit",
    location: "Paris, Île-de-France, France",
    email: "perlescamille34@gmail.com",
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
      slug: "weneeds",
      title: "Plateforme Weneeds - Architecture Produit Complète",
      category: "Product Design",
      company: "Weneeds",
      role: "Product Designer & Gestion Produit",
      dateRange: "Avril 2024 - Aujourd'hui",
      description: "Startup B2B SaaS - Recrutement IA. Seule responsable Design & Produit avec une approche AI-powered.",
      shortDescription: "Plateforme de matching RH par IA",
      image: "/projects/weneeds/onb1.png",
      galleries: [
        {
          title: "Onboarding IA Magique",
          description: "Défi : Créer une expérience \"magique\" dès l'inscription où l'IA génère automatiquement un profil complet depuis un CV/LinkedIn en quelques secondes.\n\n→ Onboardings adaptatifs : candidat et recruteur différents\n\n→ Onboarding tour adapté à chaque type de profil, avec adaptation de tous les parcours (cas d'erreur, remplissage du profil, choix de widget, lancement du matching, création d'une offre et paramétrage, paramètres du paiement...)\n\nRésultat : transformation d'un point de friction (car produit nouveau et complexe) en avantage concurrentiel majeur (immersion, magie, simplicité, produit innovant...)",
          images: [
            "/projects/weneeds/onb1.png",
            "/projects/weneeds/onb2.png",
            "/projects/weneeds/onb3.png"
          ]
        },
        {
          title: "Système de Widgets Modulaires",
          description: "Architecture produit permettant une personnalisation poussée via des widgets.\n\n→ Créer un écosystème cohérent où chaque widget fonctionne indépendamment et qui fonctionnent tous ensemble.\n\n→ Les widgets existent en 3 formes (petit, moyen, grand) en format web et mobile.\n\n→ Adaptés à différents users : profil candidat, profil recruteur, annonce. Ils doivent être concis, compréhensibles, intuitifs et bien distincts. Création de chaque formulaire simple à remplir.\n\nExemples:\n• Widgets annonce : horaires, processus de recrutement, avantages\n• Widgets entreprise : Histoire, Valeurs et engagements, implémentation internationale\n• Widgets candidat : expériences pro, formation, portfolio, vidéo, photo, playlist, livres préférés, citation",
          images: [
            "/projects/weneeds/widg1.png",
            "/projects/weneeds/widg2.png",
            "/projects/weneeds/widg3.png"
          ],
          mobileImage: "/projects/weneeds/widg4.png"
        },
        {
          title: "Dashboard Analytics RH",
          description: "J'ai créé un dashboard analytics complet permettant d'obtenir une analyse poussée du candidat à partir de son interview IA et de son profil.\n\n→ Le dashboard génère un \"résumé\" du candidat permettant au recruteur de se faire une idée rapide du profil. Le but est de savoir très vite si le candidat est potentiellement intéressant ou s'il est hors de nos besoins.\n\n→ Ensuite le dashboard apporte un tableau très concret des points forts et points faibles du candidat, et recommande des points et des questions à poser lors de l'entretien pour approfondir.\n\nLe tout sur une interface moderne, très visuelle, qui ne donne pas la sensation du recrutement froid des applis RH habituelles.",
          images: [
            "/projects/weneeds/analyse.png"
          ]
        }
      ],
      tags: ["Product Strategy", "Web Design", "Mobile Design", "AI Integration", "User Research", "Data Visualization", "Business Intelligence"],
      featured: true,
      highlights: [
        "200+ entreprises clientes adoptant la plateforme",
        "70% de réduction du temps de pré-qualification RH",
        "Coordination agile avec 4 développeurs"
      ],
      keyProjects: [
        {
          name: "Onboarding IA",
          description: "Experience magique où l'IA génère automatiquement un profil complet depuis un CV/LinkedIn en quelques secondes"
        },
        {
          name: "Système de Widgets Modulaires",
          description: "Architecture produit permettant une personnalisation poussée via des widgets adaptés à différents users"
        },
        {
          name: "Dashboard Analytics & Gestion RH",
          description: "Dashboard analytics complet avec analyse poussée du candidat depuis son interview IA"
        }
      ]
    },
    {
      id: 2,
      slug: "edf-agregio",
      title: "Produit B2B Énergétique - EDF Agregio",
      category: "UX/UI Design",
      company: "EDF Agregio-Solutions",
      role: "Chargée design et communication",
      dateRange: "Septembre 2022 - Septembre 2023",
      description: "Filiale EDF - Solutions Énergétiques B2B. Seule UX/UI Designer d'une plateforme SaaS de gestion énergétique industrielle.",
      shortDescription: "Gestion énergétique B2B",
      image: "/projects/edf/edf-connexion.png",
      galleries: [
        {
          title: "Landing & Connexion",
          description: "Page d'accueil et parcours de connexion optimisés pour une prise en main rapide et sécurisée de la plateforme.",
          images: [
            "/projects/edf/edf-landing.png",
            "/projects/edf/edf-connexion.png"
          ]
        },
        {
          title: "Dashboard de Pilotage Énergétique",
          description: "Interface de gestion et de suivi de la consommation énergétique avec visualisations de données complexes et indicateurs clés de performance.",
          images: [
            "/projects/edf/edf-dashboard.png"
          ]
        }
      ],
      tags: ["B2B SaaS", "Product Design", "Energy Domain", "Cross-functional", "User Testing"],
      featured: true,
      highlights: [
        "Landing page et parcours de connexion optimisés",
        "Système EMS avec formulaires complexes",
        "Interfaces de pilotage énergétique adaptées à différentes cibles"
      ],
      keyProjects: [
        {
          name: "Interface EMS",
          description: "Système complet de gestion énergétique avec formulaires complexes"
        },
        {
          name: "Dashboard de pilotage",
          description: "Interfaces de suivi: stockage énergétique, dépenses, prévisions consommation"
        }
      ]
    },
    {
      id: 3,
      slug: "pole-emploi",
      title: "Design System & Expérience Utilisateur - Pôle Emploi",
      category: "Product Design",
      company: "Pôle Emploi",
      role: "UX UI Designer",
      dateRange: "Septembre 2023 - Janvier 2024",
      description: "Service Public de l'Emploi. Conception de l'Emploi Store nouvelle génération avec système de recommandations intelligentes.",
      shortDescription: "Refonte UX avec IA",
      image: "/projects/pole-emploi/pole-emploi-projet-creatin.png",
      galleries: [
        {
          title: "Système de Gestion des Projets",
          description: "Interface de création et gestion des projets d'emploi avec système de recommandations personnalisées.",
          images: [
            "/projects/pole-emploi/pole-emploi-projet-creatin.png",
            "/projects/pole-emploi/pole-emploi-gestion-des-projets.png"
          ]
        },
        {
          title: "Design System",
          description: "Système de design cohérent et accessible pour l'ensemble des interfaces de Pôle Emploi.",
          images: [
            "/projects/pole-emploi/pole-emploi-design.png"
          ]
        }
      ],
      tags: ["UX Strategy", "Government Scale", "User Research", "Web Design", "Workflow Optimization"],
      featured: true,
      highlights: [
        "Système de recommandations d'applications emploi personnalisées",
        "User research auprès des demandeurs d'emploi",
        "Personnalisation de l'accompagnement emploi à l'échelle nationale"
      ],
      keyProjects: [
        {
          name: "Système de Recommandations",
          description: "Fonctionnalité générant des recommandations d'applications emploi personnalisées"
        },
        {
          name: "User Research",
          description: "Research approfondi auprès des demandeurs d'emploi pour validation concept"
        }
      ]
    }
  ],

  skills: {
    design: [
      { name: "Figma", level: 95 },
      { name: "Product Design", level: 90 },
      { name: "Design Systems", level: 85 },
      { name: "Prototyping", level: 88 },
      { name: "Mobile Design", level: 90 }
    ],
    productManagement: [
      { name: "Product Strategy", level: 85 },
      { name: "Stakeholder Management", level: 88 },
      { name: "Roadmap Planning", level: 82 },
      { name: "User Research", level: 85 },
      { name: "Cross-team Coordination", level: 90 }
    ],
    aiTechnical: [
      { name: "Conversational AI", level: 88 },
      { name: "AI Product Design", level: 85 },
      { name: "Agile/Scrum", level: 85 },
      { name: "Technical Collaboration", level: 90 },
      { name: "Data-Driven Decisions", level: 80 }
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
      name: "TOEIC - 920/990",
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