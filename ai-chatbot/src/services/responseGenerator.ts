import { portfolioData } from "../data/portfolio";
import type { PortfolioIntent } from "../types/portfolio";


export function generateResponse(
    intent: PortfolioIntent,
    project?: string,
    question: string = ""
): string {


    switch(intent) {


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

${portfolioData.experience.map(
    job =>
`${job.role} at ${job.company} (${job.dates})

${job.description}`
).join("\n\n")}
            `;

case "achievements":

return `
Some of Mitchell's notable achievements:

${portfolioData.achievements.join("\n")}
`;


case "projects":

    if (project) {

        const selectedProject =
            portfolioData.projects.find(
                item =>
                    item.name === project
            );


        if (selectedProject) {

            const lowerQuestion =
                question.toLowerCase();


            if (
                (
                    lowerQuestion.includes("technology") ||
                    lowerQuestion.includes("technologies") ||
                    lowerQuestion.includes("tech stack") ||
                    lowerQuestion.includes("stack") ||
                    lowerQuestion.includes("tools") ||
                    lowerQuestion.includes("built with")
                )
                &&
                selectedProject.technologies
            ) {

                return `
${selectedProject.name} uses:

${selectedProject.technologies.join(", ")}
                `;
            }


            if (
                lowerQuestion.includes("who") &&
                selectedProject.audience
            ) {

                return `
${selectedProject.name} is designed for:

${selectedProject.audience}
                `;
            }


            return `
${selectedProject.name}

${selectedProject.description}


Purpose:

${selectedProject.purpose ?? "Not specified"}


Technologies:

${selectedProject.technologies?.join(", ") ?? "Not specified"}


Key Features:

${selectedProject.highlights?.join("\n") ?? "Not specified"}


Designed For:

${selectedProject.audience ?? "Not specified"}
`;
        }
    }


    return `
Featured projects:

${portfolioData.projects.map(
    project =>
`${project.name}

${project.description}`
).join("\n\n")}
    `;


        case "email":

            return `
Mitchell specializes in HTML email development.

Highlights:

${portfolioData.achievements
.filter(item =>
    item.toLowerCase().includes("email")
)
.join("\n")}
            `;


        case "education":

            return `
Education:

${portfolioData.education.join("\n")}
            `;


        default:

            return `
I can answer questions about Mitchell's skills, experience, projects, education, and email development background.
            `;
    }

}