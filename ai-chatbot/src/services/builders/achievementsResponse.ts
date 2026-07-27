import { portfolioData } from "../../data/portfolio";

export function buildAchievementsResponse(): string {

    return `
    Some of Mitchell's notable achievements:

    ${portfolioData.achievements.join("\n")}
    `;

}