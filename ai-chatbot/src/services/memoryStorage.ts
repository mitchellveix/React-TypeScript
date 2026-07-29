import type { ConversationMemory } from "../types/chat";


const MEMORY_KEY =
    "portfolio-chat-memory";



export function saveMemory(
    memory: ConversationMemory
): void {

    localStorage.setItem(
        MEMORY_KEY,
        JSON.stringify(memory)
    );

}



export function loadMemory(): ConversationMemory {

    const saved =
        localStorage.getItem(
            MEMORY_KEY
        );


    if (!saved) {

        return {};

    }


    return JSON.parse(saved);

}



export function clearMemory(): void {

    localStorage.removeItem(
        MEMORY_KEY
    );

}