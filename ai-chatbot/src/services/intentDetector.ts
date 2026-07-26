import type { PortfolioIntent } from "../types/portfolio";


export function detectIntent(
    question: string
): PortfolioIntent {

    const text = question.toLowerCase();


    if (
        text.includes("skill") ||
        text.includes("technolog") ||
        text.includes("tech stack") ||
        text.includes("tools") ||
        text.includes("stack") ||
        text.includes("framework")
    ) {
        return "skills";
    }


    if (
        text.includes("experience") ||
        text.includes("work") ||
        text.includes("career") ||
        text.includes("background")
    ) {
        return "experience";
    }


    if (
        text.includes("project") ||
        text.includes("built") ||
        text.includes("created")
    ) {
        return "projects";
    }


    if (
        text.includes("email") ||
        text.includes("newsletter") ||
        text.includes("campaign")
    ) {
        return "email";
    }


    if (
        text.includes("education") ||
        text.includes("degree") ||
        text.includes("certification")
    ) {
        return "education";
    }


    return "general";
}