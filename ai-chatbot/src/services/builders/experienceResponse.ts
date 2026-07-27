import { portfolioData } from "../../data/portfolio";

export function buildExperienceResponse(): string {

    return `
    Mitchell has 18+ years of professional experience.

    ${portfolioData.experience.map(job =>
    `${job.role} at ${job.company} (${job.dates})

    ${job.description}`
    ).join("\n\n")}
    `;

}