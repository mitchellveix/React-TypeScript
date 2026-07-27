import { portfolioData } from "../../data/portfolio";

export function buildEducationResponse(): string {

    return `
    Education:

    ${portfolioData.education.join("\n")}
    `;

}