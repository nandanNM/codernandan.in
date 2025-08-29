import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  //   {
  //     id: "simplamo",
  //     companyName: "Simplamo Enterprise JSC",
  //     companyLogo: "https://assets.codernandan.inhttps://assets.codernandan.in/images/companies/simplamo.webp",
  //     positions: [
  //       {
  //         id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
  //         title: "Senior Frontend Developer",
  //         employmentPeriod: {
  //           start: "10.2022",
  //         },
  //         employmentType: "Full-time",
  //         icon: "code",
  //         description: `- Develop [AI Chat](https://help.simplamo.com/features/simplamo-ai/ai-chat/guide_simplamo_ai_chat?ref=IN-926722) and [AI Assistant](https://help.simplamo.com/features/simplamo-ai/ai-expert/aiexpert-rockdiscribe?ref=IN-926722) features.
  // - Develop [Whiteboards](https://help.simplamo.com/features/whiteboard/overview?ref=IN-926722) with real-time collaboration.
  // - Build and maintain the [Zalo Mini App](https://zalo.me/s/1736112917405511258/) for Simplamo with seamless integration.
  // - Develop interactive chart and analytics widgets for the [Dashboard](https://help.simplamo.com/features/dashboard/overview) to enhance data visualization.
  // - Develop and maintain core features to enhance functionality and user experience.
  // - Ensure UI/UX consistency and adherence to standards.
  // - Implement robust frontend solutions for web and mobile platforms.
  // - Analyze technical capabilities and provide optimal solutions.`,
  //         skills: [
  //           "TypeScript",
  //           "Next.js",
  //           "React Native",
  //           "MobX",
  //           "MobX-State-Tree",
  //           "Tailwind CSS",
  //           "Dify",
  //           "Zalo Mini App",
  //           "Agile",
  //           "Teamwork",
  //           "Research",
  //           "Problem-solving",
  //         ],
  //         isExpanded: true,
  //       },
  //       {
  //         id: "cedd7adb-4118-4085-9983-ae00530b49e2",
  //         title: "UI Design Lead",
  //         employmentPeriod: {
  //           start: "10.2022",
  //         },
  //         employmentType: "Full-time",
  //         icon: "design",
  //         description: `- Ensure UI/UX consistency and high-quality standards.
  // - Design intuitive, user-focused interfaces aligned with business goals.
  // - Define and establish a cohesive UI style for Simplamo.`,
  //         skills: ["Creativity", "UI/UX Design", "Figma"],
  //       },
  //     ],
  //     isCurrentEmployer: true,
  //   },
  //   {
  //     id: "tungtung",
  //     companyName: "Tung Tung JSC",
  //     companyLogo: "https://assets.codernandan.inhttps://assets.codernandan.in/images/companies/tungtung.webp",
  //     positions: [
  //       {
  //         id: "3e831244-8d8c-41e2-b2ce-7f3946956afd",
  //         title: "Web Developer",
  //         employmentPeriod: {
  //           start: "2020",
  //           end: "2022",
  //         },
  //         employmentType: "Full-time",
  //         description: `- Built a scalable design system for consistency and efficiency.
  // - Built a complex rich-text editor based on ProseMirror and Slate for customizable content creation.
  // - Integrated APIs with the Backend Team to enhance functionality.`,
  //         icon: "code",
  //         skills: [
  //           "React",
  //           "Redux",
  //           "Storybook",
  //           "Lerna",
  //           "Agile",
  //           "Teamwork",
  //           "Research",
  //         ],
  //       },
  //       {
  //         id: "13bd34c3-db84-4fad-8132-a6c89a42957e",
  //         title: "Mobile Developer",
  //         employmentPeriod: {
  //           start: "2019",
  //           end: "2020",
  //         },
  //         employmentType: "Full-time",
  //         description: `- Rebuilt the app with React Native for better UX and performance.
  // - Integrated MoMo and in-app purchases for seamless payments.
  // - Optimized deployment for staging and production.
  // - Published on App Store and Google Play, ensuring compliance.`,
  //         icon: "code",
  //         skills: [
  //           "React Native",
  //           "Redux",
  //           "MoMo Payment API",
  //           "App Store",
  //           "Google Play Store",
  //           "App Center",
  //           "Agile",
  //           "Teamwork",
  //           "Research",
  //         ],
  //       },
  //       {
  //         id: "73151add-7adf-4035-a237-b5803ceb5478",
  //         title: "UI/UX Designer",
  //         employmentPeriod: {
  //           start: "2018",
  //           end: "2019",
  //         },
  //         employmentType: "Full-time",
  //         description: `- Designed a Landing Page for enterprise clients.
  // - Redesigned the Online Quiz Platform for a modern look on web and mobile.
  // - Redesigned the Pricing interface for individual customers.
  // - Enhanced UX by improving usability, navigation, and user flow.`,
  //         icon: "design",
  //         skills: ["UI/UX Design", "Sketch"],
  //       },
  //     ],
  //   },
  {
    id: "freelance",
    companyName: "Freelance",
    positions: [
      {
        id: "f0becfba-057d-40db-b252-739e1654faa1",
        title: "Full-Stack Developer — Exam Portal",
        employmentPeriod: {
          start: "2024",
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
          start: "2024",
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
          start: "09.2023",
        },
        icon: "education",
        description: `- Currently pursuing a Bachelor's degree in Electronics & Instrumentation Engineering.  
- Learning advanced concepts in circuits, sensors, control systems, and instrumentation.  
- Alongside academics, developing strong skills in full-stack web development and system design.  
- Actively working on projects that combine software engineering and real-world applications.`,
        skills: [
          "Electronics",
          "Instrumentation",
          "Control Systems",
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
