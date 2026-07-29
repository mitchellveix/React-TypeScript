import type { ConversationMemory } from "../../types/chat";


export function buildMemorySavedResponse(
    memory: Partial<ConversationMemory>
): string {


    const responses: string[] = [];


    if (memory.name) {

        responses.push(
            `Nice to meet you, ${memory.name}!`
        );

    }


    if (memory.favoriteLanguage) {

        responses.push(
            `I'll remember that your favorite language is ${memory.favoriteLanguage}.`
        );

    }


    if (memory.favoriteFramework) {

        responses.push(
            `I'll remember that your favorite framework is ${memory.favoriteFramework}.`
        );

    }


    if (responses.length === 0) {

        return "Got it! I'll remember that.";

    }


    return responses.join(" ");

}



export function buildMemoryRecallResponse(
    memory: ConversationMemory,
    question: string
): string {


    const text =
        question.toLowerCase();


    if (
        text.includes("name")
        &&
        memory.name
    ) {

        return `Your name is ${memory.name}.`;

    }


    if (
        text.includes("language")
        &&
        memory.favoriteLanguage
    ) {

        return `Your favorite language is ${memory.favoriteLanguage}.`;

    }


    if (
        text.includes("framework")
        &&
        memory.favoriteFramework
    ) {

        return `Your favorite framework is ${memory.favoriteFramework}.`;

    }


    return "I don't remember that yet.";

}