import type { ChatMessage } from "../types/chat";
import type { PortfolioIntent } from "../types/portfolio";


export function detectIntent(
    question: string,
    conversation: ChatMessage[]
): PortfolioIntent {

    const text = question.toLowerCase();

    /*
    -------------------------
    Comparison detection
    -------------------------
    */

    if (
        containsAny(text, [
            "compare",
            "comparison",
            "difference",
            "different",
            "versus",
            "vs"
        ])
    ) {
        return "comparison";
    }


    /*
    -------------------------
    Technology Project Search
    -------------------------
    */

    if (

        containsAny(text, [
            "which projects use",
            "what projects use",
            "show projects using",
            "projects using",
            "built with",
            "made with",
            "created with"
        ])

    ) {

        return "technologyProjects";

    }


    /*
    -------------------------
    Follow-up detection
    -------------------------
    */

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

            if (message.role === "user") {

                const previousText =
                    message.content.toLowerCase();


                if (
                    containsAny(previousText, [
                        "emailos",
                        "email os",
                        "project"
                    ])
                ) {
                    return "projects";
                }


                if (
                    containsAny(previousText, [
                        "skill",
                        "technology",
                        "stack",
                        "tools"
                    ])
                ) {
                    return "skills";
                }


                if (
                    containsAny(previousText, [
                        "experience",
                        "career",
                        "work"
                    ])
                ) {
                    return "experience";
                }

            }
        }
    }



    /*
    -------------------------
    Skills
    -------------------------
    */

    if (
        containsAny(text, [
            "skills",
            "technology",
            "technologies",
            "tech stack",
            "stack",
            "framework",
            "frameworks",
            "languages",
            "tools",
            "libraries",
            "frontend",
            "front end",
            "coding",
            "programming"
        ])
    ) {
        return "skills";
    }



    /*
    -------------------------
    Experience
    -------------------------
    */

    if (
        containsAny(text, [
            "experience",
            "career",
            "background",
            "history",
            "worked",
            "jobs",
            "companies",
            "professional"
        ])
    ) {
        return "experience";
    }


    /*
    -------------------------
    Project List
    -------------------------
    */

    if (
        containsAny(text, [
            "what projects",
            "which projects",
            "list projects",
            "show projects",
            "projects have you built",
            "projects have you worked on",
            "what applications",
            "what apps have you built",
            "what apps have you created",
            "applications have you created"
        ])
    ) {
        return "projectList";
    }


    /*
    -------------------------
    Projects
    -------------------------
    */

    if (
        containsAny(text, [
            "project",
            "projects",
            "built",
            "created",
            "portfolio",
            "application",
            "app"
        ])
    ) {
        return "projects";
    }

    /*
    -------------------------
    Achievements
    -------------------------
    */

    if (
        containsAny(text, [
            "achievement",
            "achievements",
            "accomplishment",
            "success",
            "biggest project",
            "proud of"
        ])
    ) {
        return "achievements";
    }



    /*
    -------------------------
    Email Development
    -------------------------
    */

    if (
        containsAny(text, [
            "email",
            "newsletter",
            "campaign",
            "html email",
            "marketing cloud",
            "salesforce"
        ])
    ) {
        return "email";
    }



    /*
    -------------------------
    Education
    -------------------------
    */

    if (
        containsAny(text, [
            "education",
            "degree",
            "school",
            "certification"
        ])
    ) {
        return "education";
    }


    return "general";
}



/*
Helper function
Checks if text contains any phrase
*/

function containsAny(
    text: string,
    keywords: string[]
): boolean {

    return keywords.some(keyword =>
        text.includes(keyword)
    );

}