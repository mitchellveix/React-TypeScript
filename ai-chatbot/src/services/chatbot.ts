import type { ChatMessage } from "../types/chat";

import { detectIntent } from "./intentDetector";
import { generateResponse } from "./responseGenerator";
import { detectProject } from "./projectDetector";


export async function getBotReply(
    conversation: ChatMessage[]
): Promise<string> {


    return new Promise((resolve) => {


        setTimeout(() => {


            const latestMessage =
                conversation[
                    conversation.length - 1
                ];


            const question =
                latestMessage.content;


            const intent =
                detectIntent(
                    question,
                    conversation
                );


            const project =
                detectProject(question);


            const response =
                generateResponse(
                    intent,
                    project
                );


            resolve(response);


        }, 1500);

    });

}