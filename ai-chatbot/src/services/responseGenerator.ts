import { portfolioData } from "../data/portfolio";
import type { PortfolioIntent } from "../types/portfolio";


export function generateResponse(
    intent: PortfolioIntent
): string {


    switch(intent) {


        case "skills":

            return `
My main technologies include:

${portfolioData.skills.join(", ")}

I also work with platforms such as:

${portfolioData.platforms.join(", ")}
            `;


        case "experience":

            return `
I have 18+ years of experience in web development and email development.

My recent experience includes:

${portfolioData.experience
.map(
(exp) =>
`${exp.role} at ${exp.company} (${exp.dates})
${exp.description}`
)
.join("\n\n")}
            `;


        case "projects":

            return `
Some of my featured projects include:

${portfolioData.projects
.map(
(project) =>
`${project.name}:
${project.description}`
)
.join("\n\n")}
            `;


        case "email":

            return `
My email development background includes:

${portfolioData.specialties.join(", ")}

Some achievements:
${portfolioData.achievements.join("\n")}
            `;


        case "education":

            return `
My education includes:

${portfolioData.education.join("\n")}
            `;


        default:

            return `
I can answer questions about:

- my skills
- my experience
- my projects
- my email development background
- my education
            `;

    }

}