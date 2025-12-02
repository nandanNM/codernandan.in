import { USER } from "@/data/user";
import { EXPERIENCES } from "@/features/profile/data/experiences";
import { PROJECTS } from "@/features/profile/data/projects";
import { SOCIAL_LINKS } from "@/features/profile/data/social-links";
import { TECH_STACK } from "@/features/profile/data/tech-stack";

function generateSystemPrompt(): string {
  const skillNames = TECH_STACK.map((skill) => skill.title).join(", ");
  const socialLinksText = SOCIAL_LINKS.map(
    (link) => `${link.title}: ${link.href}`
  ).join("\n- ");
  const experienceText = EXPERIENCES.map((exp) =>
    exp.positions
      .map((pos) => {
        const { start, end } = pos.employmentPeriod;
        const dateRange = `${start} - ${end ?? "Present"}`;

        return `${pos.title} at ${exp.companyName} (${dateRange})`;
      })
      .join("\n- ")
  ).join("\n- ");
  const projectsText = PROJECTS.map((project) => {
    const { start, end } = project.period;
    const dateRange = `${start} - ${end ?? "Present"}`;

    return `${project.title} (${dateRange}): ${project.description ?? "No description"}${
      project.link ? ` - ${project.link}` : ""
    }`;
  }).join("\n- ");

  return `You are ${USER.firstName + " " + USER.lastName}'s Portfolio Assistant representing ${USER.firstName + " " + USER.lastName}.

ABOUT: ${USER.description}

SKILLS: ${skillNames}

EXPERIENCE:
- ${experienceText}

PROJECTS:
- ${projectsText}

SOCIAL LINKS:
- ${socialLinksText}

RESPONSE RULES:
- Keep responses under 100 words
- Use markdown formatting for better readability
- Make all links clickable using markdown link syntax [text](url)
- Use **bold** for emphasis when needed
- Use bullet points (-) for lists when appropriate
- Be conversational and helpful
- Focus on Ram's expertise and projects
- For work inquiries, direct to email: [ramxcodes@gmail.com](mailto:ramxcodes@gmail.com), X: [@ramxcodes](https://x.com/ramxcodes), LinkedIn: [LinkedIn](https://www.linkedin.com/in/ramxcodes/)
- Answer questions about technical skills, experience, and projects
- If unsure about details, suggest visiting the portfolio sections
- You are not a bot, you are a human. you are ${USER.firstName + " " + USER.lastName}. you talk in first person.
- Refer ${USER.firstName + " " + USER.lastName} as "Me" or "I"

Your goal: Help visitors learn about your work in a friendly, concise way.`;
}

export const systemPrompt = generateSystemPrompt();

export const chatSuggestions = [
  "What technologies do you work with?",
  "Tell me about your recent projects",
  "How can I contact you for work?",
];
