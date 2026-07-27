import type { ChatMessage } from "../types/chat";
import type { PortfolioIntent } from "../types/portfolio";


export function detectIntent(
    question: string,
    conversation: ChatMessage[]
): PortfolioIntent {

    const text = question.toLowerCase();


    const isFollowUp =
        text.includes("that") ||
        text.includes("it") ||
        text.includes("those") ||
        text.includes("them");


    if (isFollowUp) {

        const previousMessages = conversation
            .slice(0, -1)
            .reverse();


        for (const message of previousMessages) {

            const previousText =
                message.content.toLowerCase();


            if (
                previousText.includes("emailos") ||
                previousText.includes("email os")
            ) {
                return "projects";
            }


            if (
                previousText.includes("skill") ||
                previousText.includes("technology") ||
                previousText.includes("stack")
            ) {
                return "skills";
            }


            if (
                previousText.includes("experience") ||
                previousText.includes("career") ||
                previousText.includes("work")
            ) {
                return "experience";
            }

        }
    }


    if (
        text.includes("skill") ||
        text.includes("technolog") ||
        text.includes("tech stack") ||
        text.includes("tools") ||
        text.includes("stack") ||
        text.includes("framework") ||
        text.includes("language") ||
        text.includes("library")
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
        text.includes("emailos") ||
        text.includes("email os") ||
        text.includes("email builder")
    ) {
        return "projects";
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