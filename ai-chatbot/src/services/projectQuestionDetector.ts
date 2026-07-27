import type { ProjectQuestion } from "../types/projectQuestion";


export function detectProjectQuestion(
    question: string
): ProjectQuestion {

    const text = question.toLowerCase();


    if (
        text.includes("technology") ||
        text.includes("technologies") ||
        text.includes("stack") ||
        text.includes("tools") ||
        text.includes("built with")
    ) {
        return "technologies";
    }


    if (
        text.includes("who") ||
        text.includes("audience") ||
        text.includes("for")
    ) {
        return "audience";
    }


    if (
        text.includes("why") ||
        text.includes("purpose") ||
        text.includes("problem") ||
        text.includes("solve")
    ) {
        return "purpose";
    }


    if (
        text.includes("feature") ||
        text.includes("features") ||
        text.includes("functionality")
    ) {
        return "features";
    }


    return "description";
}