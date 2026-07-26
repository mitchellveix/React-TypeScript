import type { ChatMessage } from "../types/chat";
import { detectIntent } from "./intentDetector";
import { generateResponse } from "./responseGenerator";


export async function getBotReply(
    conversation: ChatMessage[]
): Promise<string> {

    return new Promise((resolve) => {

        setTimeout(() => {

            const latestMessage =
                conversation[conversation.length - 1];

            const question = latestMessage.content;

            const intent = detectIntent(question);

            const response = generateResponse(intent);

            resolve(response);


        }, 1500);

    });

}