import { portfolioData } from "../../data/portfolio";
import { detectProjectQuestion } from "../projectQuestionDetector";

export function buildProjectResponse(
    projectName: string,
    question: string
): string {

    const project =
        portfolioData.projects.find(
            p => p.name === projectName
        );

    if (!project) {
        return "I couldn't find that project.";
    }

    const type =
        detectProjectQuestion(question);

    switch (type) {

        case "technologies":

            return `
            ${project.name} uses:

            ${project.technologies?.join(", ") ?? "Not specified"}
            `;

        case "audience":

            return `
            ${project.name} is designed for:

            ${project.audience ?? "Not specified"}
            `;

        case "purpose":

            return `
            ${project.name} was created to:

            ${project.purpose ?? "Not specified"}
            `;

        case "features":

            return `
            Key features of ${project.name}:

            ${project.highlights?.join("\n") ?? "Not specified"}
            `;

        default:

            return `
            ${project.name}

            ${project.description}

            Purpose:

            ${project.purpose ?? "Not specified"}

            Technologies:

            ${project.technologies?.join(", ") ?? "Not specified"}

            Designed For:

            ${project.audience ?? "Not specified"}
            `;
    }

}