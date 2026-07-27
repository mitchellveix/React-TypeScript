import { portfolioData } from "../data/portfolio";
import type { PortfolioIntent } from "../types/portfolio";
import { detectProjectQuestion } from "./projectQuestionDetector";

export function generateResponse(
    intent: PortfolioIntent,
    project?: string,
    question: string = ""
): string {

    switch (intent) {

        case "skills":

            return `
Mitchell's technology stack includes:

${portfolioData.skills.join(", ")}

Platforms:

${portfolioData.platforms.join(", ")}
`;

        case "experience":

            return `
Mitchell has 18+ years of professional experience.

${portfolioData.experience.map(job =>
`${job.role} at ${job.company} (${job.dates})

${job.description}`
).join("\n\n")}
`;

        case "projects":

            if (project) {

                const selectedProject =
                    portfolioData.projects.find(
                        item => item.name === project
                    );

                if (!selectedProject) {
                    return "I couldn't find that project.";
                }

                const projectQuestion =
                    detectProjectQuestion(question);

                switch (projectQuestion) {

                    case "technologies":

                        return `
${selectedProject.name} uses:

${selectedProject.technologies?.join(", ") ?? "Not specified"}
`;

                    case "audience":

                        return `
${selectedProject.name} is designed for:

${selectedProject.audience ?? "Not specified"}
`;

                    case "purpose":

                        return `
${selectedProject.name} was created to:

${selectedProject.purpose ?? "Not specified"}
`;

                    case "features":

                        return `
Key features of ${selectedProject.name}:

${selectedProject.highlights?.join("\n") ?? "Not specified"}
`;

                    default:

                        return `
${selectedProject.name}

${selectedProject.description}

Technologies:

${selectedProject.technologies?.join(", ") ?? "Not specified"}
`;
                }
            }

            return `
Featured projects:

${portfolioData.projects.map(project =>
`${project.name}

${project.description}`
).join("\n\n")}
`;

        case "email":

            return `
Mitchell specializes in HTML email development.

Highlights:

${portfolioData.achievements
    .filter(item => item.toLowerCase().includes("email"))
    .join("\n")}
`;

        case "education":

            return `
Education:

${portfolioData.education.join("\n")}
`;

        case "achievements":

            return `
Some of Mitchell's notable achievements:

${portfolioData.achievements.join("\n")}
`;

        default:

            return `
I can answer questions about Mitchell's skills, experience, projects, education, and email development background.
`;
    }

}