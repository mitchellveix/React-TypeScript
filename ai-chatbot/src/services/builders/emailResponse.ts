import { portfolioData } from "../../data/portfolio";

export function buildEmailResponse(): string {

    return `
    Mitchell specializes in HTML email development.

    Highlights:

    ${portfolioData.achievements
        .filter(item =>
            item.toLowerCase().includes("email")
        )
        .join("\n")}
    `;

}