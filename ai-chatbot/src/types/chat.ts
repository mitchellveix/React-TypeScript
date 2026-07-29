export interface Message {
    id: string;
    text: string;
    sender: "user" | "bot";
    timestamp: string;
}


export interface ChatMessage {
    role: "user" | "assistant";
    content: string;
}


export interface ConversationMemory {

    name?: string;

    favoriteLanguage?: string;

    favoriteFramework?: string;

}


export interface ConversationContext {

    currentProject?: string;

    currentIntent?: string;

    memory: ConversationMemory;

}