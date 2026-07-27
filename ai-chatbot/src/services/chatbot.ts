import type {
    ChatMessage,
    ConversationContext
} from "../types/chat";

import { detectIntent } from "./intentDetector";
import { generateResponse } from "./responseGenerator";
import { detectProject } from "./projectDetector";

export async function getBotReply(
    conversation: ChatMessage[],
    context: ConversationContext
): Promise<string> {

    return new Promise((resolve) => {

        setTimeout(() => {

            const latestMessage =
                conversation[conversation.length - 1];

            const question =
                latestMessage.content;

            const project =
                detectProject(question)
                ?? context.currentProject;

            const intent =
                project
                    ? "projects"
                    : detectIntent(
                        question,
                        conversation
                    );

            resolve(
                generateResponse(
                    intent,
                    project,
                    question
                )
            );

        }, 1500);

    });

}