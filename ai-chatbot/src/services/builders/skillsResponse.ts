import { portfolioData } from "../../data/portfolio";

export function buildSkillsResponse(): string {

    return `
    Mitchell's technology stack includes:

    ${portfolioData.skills.join(", ")}

    Platforms:

    ${portfolioData.platforms.join(", ")}
    `;

}