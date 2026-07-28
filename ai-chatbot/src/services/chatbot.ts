import type {
    ChatMessage,
    ConversationContext
} from "../types/chat";

import { detectIntent } from "./intentDetector";
import { generateResponse } from "./responseGenerator";
import {
    detectProject,
    detectProjects
} from "./projectDetector";


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

            
            const detectedProjects =
                detectProjects(question);


            const detectedProject =
                detectProject(question);


            const detectedIntent =
                detectIntent(
                    question,
                    conversation
                );


            const project =
                detectedProject ??
                (
                    detectedIntent === "projects"
                        ? context.currentProject
                        : undefined
                );


            const intent =
                detectedIntent === "projectList"
                    ? "projectList"
                    : project
                        ? "projects"
                        : detectedIntent;


            resolve(
                generateResponse(
                    intent,
                    project,
                    detectedProjects,
                    question
                )
            );


        }, 1500);

    });

}