import { createSvgPlaceholderDataUri } from "@/lib/placeholders";

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ProjectImage = {
  src: string;
  alt: string;
  aspect?: "16:9" | "9:16";
};

export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  features: string[];
  images: ProjectImage[];
};

export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  stack: string[];
  images: ProjectImage[];
  mobileImages?: ProjectImage[];
};

export type EducationItem = {
  degree: string;
  school: string;
  period?: string;
  details?: string;
  logo?: string;
};

export type AboutInfo = {
  profile: string;
  focus: string;
  education: EducationItem[];
  languages: string[];
  methodologies: string[];
  availability: string;
};

export const portfolio: {
  name: string;
  title: string;
  summary: string;
  email: string;
  phone: string;
  heroStack: string;
  links: {
    linkedin: string;
    github?: string;
  };
  about: AboutInfo;
  skills: SkillGroup[];
  projects: Project[];
  experience: ExperienceItem[];
} = {
  name: "ADAM NSSIR",
  title: "Ingénieur en informatique",
  summary:
    "Ingénieur informatique junior diplômé avec mention Excellent de l’ESPRIT, spécialisé en développement full stack, frameworks modernes et conception d’applications performantes, évolutives et sécurisées. Curieux, autonome et impliqué, je suis prêt à contribuer à des projets ambitieux en CDI.",
  email: "adem.nssir@gmail.com",
  phone: "+216 27 213 682",
  heroStack: "Software Engineer | Full-Stack Developer | Web & Mobile Applications",
  links: {
    linkedin: "https://www.linkedin.com/in/adam-nssir",
    github: "https://github.com/ademnsir",
  },
  about: {
    profile:
      "Je conçois des applications web et mobiles complètes, avec une attention particulière portée à la qualité du code, à l’expérience utilisateur, à la sécurité et à la maintenabilité. Mon parcours m’a permis de travailler sur des plateformes métiers, des applications mobiles natives et des pipelines DevOps complets.",
    focus:
      "Mes points forts couvrent le développement frontend et backend, l’architecture d’API, l’intégration temps réel via WebSocket, la sécurisation avec JWT et RBAC, ainsi que la containerisation et l’automatisation CI/CD.",
    education: [
      {
        degree: "Ingénierie Informatique",
        school: "ESPRIT – École Supérieure Privée d’Ingénierie et de Technologies",
        period: "2020 - 2025",
        details: "Diplômé avec mention Excellent",
        logo: "/logo_esprit.jpg",
      },
      {
        degree: "Baccalauréat en Sciences de l’Informatique",
        school: "Lycée Carthage Présidence",
        period: "2015 - 2020",
        logo: "/carthageprecidence%20logo.jpg",
      },
    ],
    languages: ["Arabe (C2)", "Français (B2)", "Anglais (B2)"],
    methodologies: ["Agile (Scrum)"],
    availability: "Ouvert aux opportunités Full Stack, Mobile et Software Engineering en CDI.",
  },
  skills: [
    {
      title: "Frontend",
      items: ["React", "Next.js", "Angular", "TypeScript", "JavaScript", "Tailwind CSS"],
    },
    {
      title: "Backend",
      items: ["NestJS", "Node.js", "Spring Boot", "Symfony", "REST API", "JWT", "RBAC", "WebSocket"],
    },
    {
      title: "Database",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Oracle Database", "Microsoft Access"],
    },
    {
      title: "DevOps & Quality",
      items: ["Docker", "Docker Compose", "Jenkins", "GitLab CI/CD", "GitHub Actions", "SonarQube", "Nginx", "Nexus", "Prometheus", "Grafana"],
    },
    {
      title: "Mobile",
      items: ["Kotlin", "Jetpack Compose", "Swift", "Android Studio", "Xcode", "iOS / Android"],
    },
    {
      title: "Langages",
      items: ["C++", "C", "Dart", "TypeScript", "JavaScript", "Kotlin", "Swift"],
    },
  ],
  projects: [
    {
      id: "collabhub-ai",
      title: "Développeur Full Stack - CollabHub AI, ESPRIT",
      description:
        "Développé une plateforme web de collaboration intégrant IA avec fonctionnalités temps réel pour la gestion de projets et travail d’équipe, avec pipeline CI/CD et tests.",
      stack: ["React", "Vite", "Node.js", "MongoDB", "Socket.io", "Stripe", "Docker", "GitHub Actions"],
      features: [
        "Collaboration web en temps réel pour projets d'équipe (chat, vidéoconférence)",
        "Intégration IA (ChatGemeni) pour assister les utilisateurs",
        "Pipeline CI/CD avec GitHub Actions",
        "Architecture backend Node.js avec synchro WebSocket (Socket.io)",
      ],
      images: [
        {
          src: "/Projet/Collabhub/1-1.png",
          alt: "CollabHub AI accueil",
          aspect: "16:9",
        },
        {
          src: "/Projet/Collabhub/2-2.png",
          alt: "CollabHub AI workspace",
          aspect: "16:9",
        },
        {
          src: "/Projet/Collabhub/1.png",
          alt: "CollabHub AI assistant IA",
          aspect: "16:9",
        },
        {
          src: "/Projet/Collabhub/2.png",
          alt: "CollabHub AI taches",
          aspect: "16:9",
        },
        {
          src: "/Projet/Collabhub/3.png",
          alt: "CollabHub AI fonctionnalité",
          aspect: "16:9",
        },
        {
          src: "/Projet/Collabhub/4.png",
          alt: "CollabHub AI interface",
          aspect: "16:9",
        },
        {
          src: "/Projet/Collabhub/5.png",
          alt: "CollabHub AI autre écran",
          aspect: "16:9",
        },
      ],
    },
    {
      id: "electrigo",
      title: "Développeur Mobile (iOS et Android) - ElectriGo, ESPRIT",
      description:
        "Développé une application native de location de vélos et trottinettes électriques avec géolocalisation, gestion des réservations via Mapbox et interface interactive.",
      stack: ["Android Studio", "Kotlin", "Xcode", "Swift", "Node.js", "MySQL", "Mapbox", "WebSocket", "GitHub"],
      features: [
        "Application native iOS et Android",
        "Geolocalisation en temps reel",
        "Gestion des reservations avec Mapbox",
        "Interface mobile interactive",
      ],
      images: [],
    },
    {
      id: "habit-tracker",
      title: "Développeur Mobile Android - Habit Tracker, ESPRIT",
      description:
        "Développé une application mobile pour suivre les habitudes quotidiennes et objectifs des utilisateurs avec interface intuitive et notifications personnalisées.",
      stack: ["Android Studio", "Kotlin", "Spring Boot", "MySQL", "XML", "GitHub"],
      features: [
        "Suivi des habitudes et objectifs quotidiens",
        "Interface mobile intuitive",
        "Notifications personnalisees",
        "Backend Spring Boot avec persistance MySQL",
      ],
      images: [],
    },
    {
      id: "pipeline-devops-spring",
      title: "Développeur DevOps - Projet Spring, ESPRIT",
      description:
        "Conçu et automatisé un pipeline CI/CD complet pour une application Spring Boot complet, incluant compilation, tests, déploiement et surveillance en temps réel, tout en appliquant des bonnes pratiques de sécurité et qualité du code.",
      stack: ["GitHub", "Maven", "Jenkins", "SonarQube", "Nexus", "Docker", "Docker Compose", "Prometheus", "Grafana"],
      features: [
        "Pipeline CI/CD de bout en bout",
        "Compilation, tests et deploiement automatises",
        "Qualite code avec SonarQube et artefacts Nexus",
        "Monitoring avec Prometheus et Grafana",
      ],
      images: [],
    },
  ],
  experience: [
    {
      title: "Développeur Full Stack",
      company: "Soinaura",
      period: "Janv 2026 – Mars 2026",
      summary:
        "Conçu et développé une plateforme e-commerce complète dédiée aux produits de soin et beauté, incluant un catalogue multi-niveaux avec gestion des catégories, promotions, stock, et statuts produits.",
      highlights: [
        "Implémenté un système de paiement sécurisé via Stripe Checkout, une gestion des commandes avec suivi, et un tableau de bord administrateur avec visualisation des revenus, commandes et top produits.",
        "Intégré le stockage d'images sur Cloudinary, le tracking analytique via Google Analytics 4, et la protection via Cloudflare.",
      ],
      stack: ["Next.js", "Node.js", "MongoDB", "TypeScript", "Stripe", "Cloudinary", "Docker", "GitHub Actions", "AWS", "Google Analytics", "Cloudflare"],
      images: [
        { src: "/ExpPro/Soinaura/1.png", alt: "Soinaura interface 1" },
        { src: "/ExpPro/Soinaura/2.png", alt: "Soinaura interface 2" },
        { src: "/ExpPro/Soinaura/3.png", alt: "Soinaura interface 3" },
        { src: "/ExpPro/Soinaura/4.png", alt: "Soinaura interface 4" },
        { src: "/ExpPro/Soinaura/5.png", alt: "Soinaura interface 5" },
        { src: "/ExpPro/Soinaura/6.png", alt: "Soinaura interface 6" },
        { src: "/ExpPro/Soinaura/7.png", alt: "Soinaura interface 7" },
        { src: "/ExpPro/Soinaura/8.png", alt: "Soinaura interface 8" },
        { src: "/ExpPro/Soinaura/9.png", alt: "Soinaura interface 9" },
        { src: "/ExpPro/Soinaura/10.png", alt: "Soinaura interface 10" },
        { src: "/ExpPro/Soinaura/11.png", alt: "Soinaura interface 11" },
        { src: "/ExpPro/Soinaura/12.png", alt: "Soinaura interface 12" },
        { src: "/ExpPro/Soinaura/13.png", alt: "Soinaura interface 13" },
      ],
      mobileImages: [
        { src: "/ExpPro/Soinaura/mobile/1.png", alt: "Soinaura mobile 1" },
        { src: "/ExpPro/Soinaura/mobile/2.png", alt: "Soinaura mobile 2" },
        { src: "/ExpPro/Soinaura/mobile/3.png", alt: "Soinaura mobile 3" },
        { src: "/ExpPro/Soinaura/mobile/4.png", alt: "Soinaura mobile 4" },
        { src: "/ExpPro/Soinaura/mobile/5.png", alt: "Soinaura mobile 5" },
        { src: "/ExpPro/Soinaura/mobile/6.png", alt: "Soinaura mobile 6" },
        { src: "/ExpPro/Soinaura/mobile/7.png", alt: "Soinaura mobile 7" },
        { src: "/ExpPro/Soinaura/mobile/8.png", alt: "Soinaura mobile 8" },
        { src: "/ExpPro/Soinaura/mobile/9.png", alt: "Soinaura mobile 9" },
        { src: "/ExpPro/Soinaura/mobile/10.png", alt: "Soinaura mobile 10" },
      ],
    },
    {
      title: "Développeur Full Stack – Projet Freelance",
      company: "Drivoxe",
      period: "Juil 2025 – Oct 2025",
      summary:
        "Conçu et développé une plateforme web d’enchères et de vente de véhicules, incluant gestion des annonces et système d’enchères en temps réel.",
      highlights: [
        "Implémenté un modèle 3D interactif pour localiser les dommages sur les véhicules, améliorant l’expérience utilisateur et la transparence.",
        "Intégré des paiements sécurisés avec gestion des transactions et contrôle d’accès via JWT et RBAC.",
      ],
      stack: ["Next.js", "NestJS", "PostgreSQL", "TypeScript", "Docker", "Docker Compose", "Jenkins", "Nginx", "GitLab CI/CD", "WebSocket", "Jest", "Gemini API"],
      images: [
        {
          src: "/ExpPro/Drivoxe/1.png",
          alt: "Experience freelance Drivoxe",
        },
        {
          src: "/ExpPro/Drivoxe/2.png",
          alt: "Encheres en temps reel Drivoxe",
        },
        {
          src: "/ExpPro/Drivoxe/3.png",
          alt: "Modele 3D Drivoxe",
        },
        {
          src: "/ExpPro/Drivoxe/4.png",
          alt: "Paiement securise Drivoxe",
        },
        {
          src: "/ExpPro/Drivoxe/5.png",
          alt: "Drivoxe interface 5",
        },
        {
          src: "/ExpPro/Drivoxe/6.png",
          alt: "Drivoxe interface 6",
        },
        {
          src: "/ExpPro/Drivoxe/7.png",
          alt: "Drivoxe interface 7",
        },
        {
          src: "/ExpPro/Drivoxe/8.png",
          alt: "Drivoxe interface 8",
        },
        {
          src: "/ExpPro/Drivoxe/9.png",
          alt: "Drivoxe interface 9",
        },
        {
          src: "/ExpPro/Drivoxe/10.png",
          alt: "Drivoxe interface 10",
        },
        {
          src: "/ExpPro/Drivoxe/11-1.png",
          alt: "Drivoxe interface 11-1",
        },
        {
          src: "/ExpPro/Drivoxe/11.png",
          alt: "Drivoxe interface 11",
        },
        {
          src: "/ExpPro/Drivoxe/12.png",
          alt: "Drivoxe interface 12",
        },
        {
          src: "/ExpPro/Drivoxe/13.png",
          alt: "Drivoxe interface 13",
        },
        {
          src: "/ExpPro/Drivoxe/14.png",
          alt: "Drivoxe interface 14",
        },
        {
          src: "/ExpPro/Drivoxe/15.png",
          alt: "Drivoxe interface 15",
        },
        {
          src: "/ExpPro/Drivoxe/16.png",
          alt: "Drivoxe interface 16",
        },
        {
          src: "/ExpPro/Drivoxe/17.png",
          alt: "Drivoxe interface 17",
        },
        {
          src: "/ExpPro/Drivoxe/18.png",
          alt: "Drivoxe interface 18",
        },
        {
          src: "/ExpPro/Drivoxe/19.png",
          alt: "Drivoxe interface 19",
        },
        {
          src: "/ExpPro/Drivoxe/20.png",
          alt: "Drivoxe interface 20",
        },
        {
          src: "/ExpPro/Drivoxe/21.png",
          alt: "Drivoxe interface 21",
        },
        {
          src: "/ExpPro/Drivoxe/22.png",
          alt: "Drivoxe interface 22",
        },
        {
          src: "/ExpPro/Drivoxe/23.png",
          alt: "Drivoxe interface 23",
        },
        {
          src: "/ExpPro/Drivoxe/24.png",
          alt: "Drivoxe interface 24",
        },
        {
          src: "/ExpPro/Drivoxe/25.png",
          alt: "Drivoxe interface 25",
        },
      ],
    },
    {
      title: "Stagiaire en développement Full Stack",
      company: "Wifak International Bank",
      period: "Janv 2025 – Juin 2025",
      summary:
        "Conçu et développé une application web de gestion de projets collaboratifs, incluant interfaces personnalisées et tableau Kanban interactif.",
      highlights: [
        "Implémenté un assistant IA et un système intelligent d’optimisation des tâches, fournissant des suggestions et estimations de durée pour améliorer la planification et la productivité.",
        "Déployé et intégré l’application avec sécurité et gestion des accès via JWT et RBAC, assurant performance et fiabilité.",
      ],
      stack: ["Next.js", "NestJS", "PostgreSQL", "TypeScript", "Docker", "Docker Compose", "Jenkins", "Nginx", "GitLab CI/CD", "WebSocket", "JWT", "RBAC", "Jest", "Gemini API"],
      images: [
        {
          src: "/ExpPro/GDP/1.png",
          alt: "Experience Wifak International Bank 1",
        },
        {
          src: "/ExpPro/GDP/2.png",
          alt: "Experience Wifak International Bank 2",
        },
        {
          src: "/ExpPro/GDP/3.png",
          alt: "Experience Wifak International Bank 3",
        },
        {
          src: "/ExpPro/GDP/4.png",
          alt: "Experience Wifak International Bank 4",
        },
        {
          src: "/ExpPro/GDP/5.png",
          alt: "Experience Wifak International Bank 5",
        },
        {
          src: "/ExpPro/GDP/6.png",
          alt: "Experience Wifak International Bank 6",
        },
        {
          src: "/ExpPro/GDP/7.png",
          alt: "Experience Wifak International Bank 7",
        },
        {
          src: "/ExpPro/GDP/8.png",
          alt: "Experience Wifak International Bank 8",
        },
        {
          src: "/ExpPro/GDP/10.png",
          alt: "Experience Wifak International Bank 10",
        },
        {
          src: "/ExpPro/GDP/11.png",
          alt: "Experience Wifak International Bank 11",
        },
        {
          src: "/ExpPro/GDP/12.png",
          alt: "Experience Wifak International Bank 12",
        },
        {
          src: "/ExpPro/GDP/13.png",
          alt: "Experience Wifak International Bank 13",
        },
        {
          src: "/ExpPro/GDP/14.png",
          alt: "Experience Wifak International Bank 14",
        },
        {
          src: "/ExpPro/GDP/15.png",
          alt: "Experience Wifak International Bank 15",
        },
        {
          src: "/ExpPro/GDP/16.png",
          alt: "Experience Wifak International Bank 16",
        },
        {
          src: "/ExpPro/GDP/17.png",
          alt: "Experience Wifak International Bank 17",
        },
        {
          src: "/ExpPro/GDP/18.png",
          alt: "Experience Wifak International Bank 18",
        },
        {
          src: "/ExpPro/GDP/19.png",
          alt: "Experience Wifak International Bank 19",
        },
        {
          src: "/ExpPro/GDP/20.png",
          alt: "Experience Wifak International Bank 20",
        },
        {
          src: "/ExpPro/GDP/21.png",
          alt: "Experience Wifak International Bank 21",
        },
      ],
    },
    {
      title: "Stagiaire en développement Full Stack",
      company: "Billcom Consulting",
      period: "Juin 2024 – Août 2024",
      summary:
        "Conçu et développé une application web sécurisée de vente de produits technologiques, avec des interfaces utilisateur intuitives, gestion du panier et processus d’achat optimisé.",
      highlights: [
        "Intégré un système de paiement en ligne sécurisé avec Stripe ainsi que des notifications en temps réel pour les commandes et les offres via WebSocket, afin d’améliorer l’expérience utilisateur.",
        "Mis en place une architecture sécurisée avec gestion des produits, des utilisateurs et des transactions, ainsi qu’un système de recommandations personnalisées basé sur l’historique et les préférences des utilisateurs.",
      ],
      stack: ["React", "Spring Boot", "MongoDB", "JavaScript", "Stripe", "GitHub", "WebSocket", "JWT", "RBAC"],
      images: [
        {
          src: "/ExpPro/Billcom/1.png",
          alt: "Experience Billcom Consulting 1",
        },
        {
          src: "/ExpPro/Billcom/2.png",
          alt: "Experience Billcom Consulting 2",
        },
        {
          src: "/ExpPro/Billcom/3.png",
          alt: "Experience Billcom Consulting 3",
        },
        {
          src: "/ExpPro/Billcom/4.png",
          alt: "Experience Billcom Consulting 4",
        },
        {
          src: "/ExpPro/Billcom/5.png",
          alt: "Experience Billcom Consulting 5",
        },
        {
          src: "/ExpPro/Billcom/6.png",
          alt: "Experience Billcom Consulting 6",
        },
        {
          src: "/ExpPro/Billcom/7.png",
          alt: "Experience Billcom Consulting 7",
        },
        {
          src: "/ExpPro/Billcom/8.png",
          alt: "Experience Billcom Consulting 8",
        },
        {
          src: "/ExpPro/Billcom/9.png",
          alt: "Experience Billcom Consulting 9",
        },
        {
          src: "/ExpPro/Billcom/10.png",
          alt: "Experience Billcom Consulting 10",
        },
        {
          src: "/ExpPro/Billcom/11.png",
          alt: "Experience Billcom Consulting 11",
        },
        {
          src: "/ExpPro/Billcom/12.png",
          alt: "Experience Billcom Consulting 12",
        },
        {
          src: "/ExpPro/Billcom/13.png",
          alt: "Experience Billcom Consulting 13",
        },
        {
          src: "/ExpPro/Billcom/14.png",
          alt: "Experience Billcom Consulting 14",
        },
        {
          src: "/ExpPro/Billcom/15.png",
          alt: "Experience Billcom Consulting 15",
        },
      ],
    },
  ],
};

