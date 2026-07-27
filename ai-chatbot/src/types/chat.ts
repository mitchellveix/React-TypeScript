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


export interface ConversationContext {

    currentProject?: string;

    currentIntent?: string;

}