export const USER = {
  firstName: "Nándán",
  lastName: "Mạnnạ",
  displayName: "Nándán",
  username: "codernandan",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Creating with code. Small details matter.",
    "Build products, not just projects.",
    "Truly love working on Web",
    "Open Source Contributor",
  ],
  address: "Kalyani Ward, Nadia District, West Bengal",
  timeZone: "Asia/Kolkata",
  phoneNumber: "KzkxODUwOTczNjU4NQ==", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "Y29kZXJuYW5kYW5AZ21haWwuY29t", // base64 encoded
  website: "https://codernandan.in",
  otherWebsites: ["https://codernandan.vercel.app"],
  jobTitle: "Software Engineer",
  jobs: [
    {
      title: "Software Engineering Intern",
      company: "SparksSphere",
      website: "https://sparksspheresoftwares.in",
    },
    {
      title: "Founder",
      company: "Leetmaster",
      website: "https://leetmaster.in",
    },
  ],
  about: `
Hello, World! I am Nandan Manna — a Full-Stack Engineer passionate about building scalable, user-friendly software solutions with clean code and creative UI designs.

With 4+ years of experience, I specialize in developing high-performance web applications using Next.js, React, Node.js, TypeScript, and modern full-stack technologies. Beyond work, I love experimenting with new tools, coding for fun, and turning ideas into real-world products.

I am the founder of [LeetMaster](https://leetmaster.in) — a platform designed to help learners master coding challenges through structured problem sets, playlists, and editorial support.  
I also created [Crazxy UI](https://crazxyui.in) — a collection of modern, reusable UI components that simplify building beautiful interfaces.   

Currently, I’m exploring advanced system designs, scalable architectures, and open-source contributions to push my engineering journey further.

Let’s connect and build something amazing together!
`,
  hero: {
    intro:
      "Hey, I'm Nandan, a full-stack developer who loves building clean, scalable websites and apps where design, functionality, and even the smallest details matter, with a focus on making products that are both practical and visually satisfying.",
    current: {
      pre: "I'm currently working on my own thing ",
      project: {
        name: "LeetMaster",
        href: "https://leetmaster.in",
      },
      post: ", helping learners master coding challenges through structured practice.",
    },
  },
  avatar: "https://assets.codernandan.in/images/codernandan-avatar-ghibli.webp",
  // Avatars cycled by the switch button in the profile header (first = default).
  // `zoom`/`origin` crop portrait photos in on the face.
  avatars: [
    {
      src: "https://assets.codernandan.in/images/codernandan-avatar-ghibli.webp",
    },
    {
      src: "https://assets.codernandan.in/images/codernandan-avatar-2.jpeg",
    },
  ] as { src: string; zoom?: number; origin?: string }[],
  ogImage: "https://assets.codernandan.in/images/screenshot-og-image.webp",
  namePronunciationUrl: "https://assets.codernandan.in/audio/nandan-manna.mp3",
  galleryImages: [
    {
      src: "https://assets.codernandan.in/images/gallery/nandan-chaicode.webp",
      alt: "nandan-chaicode",
    },
    {
      src: "https://assets.codernandan.in/images/gallery/nandan-darjeeling.webp",
      alt: "nandan-darjeeling",
    },
    {
      src: "https://assets.codernandan.in/images/gallery/nandan-puri.webp",
      alt: "nandan-puri",
    },
  ],
  description:
    "Software Engineer with 4 years of software engineering experience in startups and a strong foundation in coding and design principles, with a focus on building efficient, intuitive digital experiences and a passion for turning complex challenges into elegant solutions.",
  keywords:
    "codernandan, codernandanin, coder nandan manna, nandan, manna nandan, manna, coder Nándán Mạnnạ, Nándán Mạnnạ ,Nandan Manna, coder nandan",
  dateCreated: "2024-10-20", // YYYY-MM-DD
};
