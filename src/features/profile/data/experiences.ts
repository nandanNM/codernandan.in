import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "careercafe",
    companyName: "CareerCafe",
    companyLogo:
      "https://assets.codernandan.in/images/companies/careercafe.png",
    location: "India",
    locationType: "Remote",
    isCurrentEmployer: true,
    positions: [
      {
        id: "careercafe-founding-engineer",
        title: "Founding Engineer",
        employmentPeriod: {
          start: "06.2026",
        },
        employmentType: "Full-time",
        description: `- Building an AI-powered SQL Rule Engine for a scalable School Management System using FastAPI.
- Enables dynamic business rule execution, AI-generated feedback, and natural language to SQL rule creation.
- Built intelligent recommendations for administrators with real-time automation.
- Designed with FastAPI, PostgreSQL, Redis, Docker, Kubernetes, and modern DevOps practices.
- Architected for scalability, security, and production-readiness with multi-tenant support.`,
        icon: "idea",
        skills: [
          "FastAPI",
          "PostgreSQL",
          "Redis",
          "Docker",
          "Kubernetes",
          "Multi-tenant Architecture",
          "AI Integration",
          "DevOps",
        ],
        isExpanded: true,
      },
      {
        id: "careercafe-sd-intern",
        title: "Software Developer Intern — Full Stack & AI Integration",
        employmentPeriod: {
          start: "01.2026",
          end: "07.2026",
        },
        employmentType: "Internship",
        description: `- Engineered full-stack features using React.js and Node.js, improving platform usability.
- Implemented multi-tenant backend architecture to support multiple user groups efficiently.
- Developed CSV ingestion pipelines for structured data processing.
- Integrated Blockly-based visual tools to enhance user interaction.
- Built scalable APIs and optimized backend workflows.`,
        icon: "code",
        skills: [
          "React.js",
          "Node.js",
          "Multi-tenant Architecture",
          "CSV Pipelines",
          "Blockly",
          "REST APIs",
        ],
      },
    ],
  },
  {
    id: "lyzr-ai",
    companyName: "Lyzr AI",
    companyLogo: "https://assets.codernandan.in/images/companies/lyzr.png",
    companyWebsite: "https://www.lyzr.ai",
    location: "New York, United States",
    locationType: "Remote",
    isCurrentEmployer: true,
    positions: [
      {
        id: "lyzr-se-intern",
        title: "Software Engineer Intern — AI Systems",
        employmentPeriod: {
          start: "05.2026",
        },
        employmentType: "Internship",
        description: `- Built Agentic AI applications using Lyzr Studio and production-ready LLM workflows.
- Developed RAG pipelines with vector search for context-aware AI responses.
- Integrated APIs, MCP servers, and external tools through agent tool calling.
- Worked on prompt engineering, agent orchestration, memory, and multi-step reasoning.
- Collaborated with the Applied/Rapid Dev team to deliver production AI solutions.
- Contributed to backend development, AI integrations, and scalable system design.`,
        icon: "code",
        skills: [
          "Agentic AI",
          "Lyzr Studio",
          "RAG",
          "Vector Search",
          "LLM Workflows",
          "MCP",
          "Prompt Engineering",
          "Agent Orchestration",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "xrovo",
    companyName: "Xrovo",
    location: "India",
    locationType: "Remote",
    positions: [
      {
        id: "xrovo-se-intern",
        title: "Software Engineering Intern — AI Voice Agent & Test Automation",
        employmentPeriod: {
          start: "03.2026",
          end: "04.2026",
        },
        employmentType: "Internship",
        description: `- Implemented AI Voice Agents for automated interactions.
- Wrote automation tests using Selenium with Java.
- Integrated automated tests with Jenkins CI/CD pipelines.
- Improved testing workflows and automation reliability.`,
        icon: "code",
        skills: [
          "AI Voice Agents",
          "Selenium",
          "Java",
          "Jenkins",
          "CI/CD",
          "Test Automation",
        ],
      },
    ],
  },
  {
    id: "slogic",
    companyName: "SLOGIC",
    location: "India",
    locationType: "Remote",
    positions: [
      {
        id: "slogic-se-intern",
        title: "Software Engineer",
        employmentPeriod: {
          start: "12.2025",
          end: "01.2026",
        },
        employmentType: "Freelance",
        icon: "code",
      },
    ],
  },
  {
    id: "growify",
    companyName: "Growify India",
    location: "India",
    locationType: "Remote",
    positions: [
      {
        id: "growify-fullstack-intern",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "10.2025",
          end: "12.2025",
        },
        employmentType: "Freelance",
        icon: "code",
      },
    ],
  },
  {
    id: "sparks-sphere",
    companyName: "Sparks Sphere Softwares",
    companyLogo:
      "https://assets.codernandan.in/images/companies/sparks-sphere.webp",
    companyWebsite: "https://sparksspheresoftwares.in",
    location: "Kolkata",
    locationType: "Remote",
    positions: [
      {
        id: "a3c4b5f6-d7e8-49a1-9b10-11c12d13e14f",
        title: "Software Engineer",
        employmentPeriod: {
          start: "06.2025",
          end: "11.2025",
        },
        employmentType: "Internship",
        description: `- Developed a B2B salon management platform with integrated inventory and order tracking features.
- Implemented scalable frontend modules using Next.js and React.js, with Redux Toolkit and Redux Saga for state management.
- Built secure RESTful APIs with Express.js and Prisma ORM for managing salon branches, products, and stock operations.
- Worked on real-time data synchronization between dashboard views for smooth multi-branch management.
- Collaborated in an agile remote team, ensuring clean code practices and optimized SQL database performance.`,
        icon: "code",
        skills: [
          "B2B Platform Development",
          "Next.js",
          "React.js",
          "Redux Toolkit",
          "Redux Saga",
          "Express.js",
          "SQL",
          "Prisma ORM",
          "Inventory Management",
        ],
      },
    ],
  },
  {
    id: "freelance",
    companyName: "Freelance",
    location: "India",
    locationType: "Remote",
    positions: [
      {
        id: "f0becfba-057d-40db-b252-739e1654faa1",
        title: "Full-Stack Developer — Exam Portal",
        employmentPeriod: {
          start: "2024",
          end: "2025",
        },
        employmentType: "Freelance",
        description: `- Developed an online exam portal for students.
- Implemented features to help students fill exam forms, access previous year questions (PYQs), and check results.
- Built functionality to generate and print rank cards.
- Ensured a smooth user experience with secure authentication and role-based access.`,
        icon: "code",
        skills: [
          "React",
          "Next.js",
          "Node.js",
          "Express",
          "PostgreSQL",
          "Prisma",
          "Tailwind CSS",
          "Authentication",
          "Form Handling",
        ],
      },
      {
        id: "0eecdfcb-028d-41f4-93e9-1269ba7eff7e",
        title: "Full-Stack Developer — Hostel Management System",
        employmentPeriod: {
          start: "2025",
        },
        employmentType: "Freelance",
        description: `- Built a full-featured hostel management system to manage meals, payments, and attendance.
- Implemented features for meal toggling, banning/unbanning residents, and manager dashboards.
- Integrated ShadCN UI components with Next.js for a modern, responsive frontend.
- Used PostgreSQL and Prisma ORM for scalable database management.
- Designed a calendar-based attendance tracking system with React Query for real-time data fetching.`,
        icon: "code",
        skills: [
          "Next.js",
          "React",
          "TypeScript",
          "ShadCN UI",
          "PostgreSQL",
          "Prisma",
          "React Query",
          "Tailwind CSS",
          "date-fns",
        ],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "University of Kalyani — B.Tech",
        employmentPeriod: {
          start: "08.2023",
        },
        icon: "education",
        description: `- Pursuing a Bachelor's degree in Electronics and Communications Engineering (expected May 2027).
- Learning advanced concepts in circuits, sensors, control systems, and communication.
- Alongside academics, developing strong skills in full-stack web development, AI systems, and system design.
- Actively working on projects that combine software engineering and real-world applications.`,
        skills: [
          "Electronics",
          "Communications",
          "C++",
          "Java",
          "JavaScript",
          "React",
          "Next.js",
          "Node.js",
          "Express",
          "PostgreSQL",
          "MongoDB",
          "Prisma",
          "Data Structures",
          "Algorithms",
          "System Design",
          "Web Development",
          "Self-learning",
          "Teamwork",
        ],
      },
      {
        id: "70131ed8-36d9-4e54-8c78-eaed18240eca",
        title: "Bodhra Pantheswari High School (Class 10–12)",
        employmentPeriod: {
          start: "04.2021",
          end: "06.2023",
        },
        icon: "education",
        description: `- Completed higher secondary education with 82% marks.
- Learned programming fundamentals in C and JavaScript.
- Gained an understanding of how applications work and explored various technologies.
- Built a strong foundation in problem-solving and logical thinking.`,
        skills: [
          "C",
          "JavaScript",
          "Problem Solving",
          "Application Development Basics",
          "Self-learning",
        ],
      },
      {
        id: "36c4c6fb-02d0-48c0-8947-fda6e9a24af7",
        title: "Bodhra Pantheswari High School (Class 5–10)",
        employmentPeriod: {
          start: "01.2016",
          end: "03.2021",
        },
        icon: "education",
        description: `- Learned through self-study and exploration, developing curiosity for computers and technology.
- Participated in school-level football tournaments, achieving **1st position** with the team.
- Selected for a school science program where I learned basic computer operations and Linux.
- Built a strong foundation for future learning through curiosity-driven exploration.`,
        skills: [
          "Linux Basics",
          "Computer Fundamentals",
          "Self-learning",
          "Teamwork",
          "Football",
        ],
      },
    ],
  },
];
