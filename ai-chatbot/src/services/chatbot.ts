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
import { detectTechnology } from "./technologyDetector";
import { detectCategory } from "./categoryDetector";
import { detectMemory } from "./memoryDetector";
import { saveMemory } from "./memoryStorage";


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

            const detectedMemory =
                detectMemory(question);


                if (
                    Object.keys(detectedMemory).length > 0
                ) {

                    context.memory = {
                        ...context.memory,
                        ...detectedMemory
                    };


                    saveMemory(
                        context.memory
                    );


                    resolve(
                        generateResponse(
                            "memorySaved",
                            undefined,
                            [],
                            undefined,
                            undefined,
                            question,
                            detectedMemory
                        )
                    );

                    return;

                }

            
            const detectedProjects =
                detectProjects(question);


            const detectedTechnology =
                detectTechnology(question);


            const detectedCategory =
                detectCategory(question);


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


            if (
                question.toLowerCase().includes("what is my")
                ||
                question.toLowerCase().includes("what's my")
            ) {

                resolve(
                    generateResponse(
                        "memoryRecall",
                        undefined,
                        [],
                        undefined,
                        undefined,
                        question,
                        context.memory
                    )
                );

                return;

            }

            resolve(
                generateResponse(
                    intent,
                    project,
                    detectedProjects,
                    detectedTechnology,
                    detectedCategory,
                    question
                )
            );


        }, 1500);

    });

}