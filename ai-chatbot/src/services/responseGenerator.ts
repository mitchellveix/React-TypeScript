import { portfolioData } from "../data/portfolio";
import type { PortfolioIntent } from "../types/portfolio";


export function generateResponse(
    intent: PortfolioIntent
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


        case "projects":

            return `
Featured projects:

${portfolioData.projects.map(
    project =>
`${project.name}

${project.description}

Technologies:
${project.technologies?.join(", ") ?? "Not specified"}`
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