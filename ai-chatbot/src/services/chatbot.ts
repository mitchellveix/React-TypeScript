import type { ChatMessage } from "../types/chat";
import { portfolioData } from "../data/portfolio";


export async function getBotReply(
    conversation: ChatMessage[]
): Promise<string> {

    return new Promise((resolve) => {

        setTimeout(() => {

            const latestMessage = conversation[
                conversation.length - 1
            ];

            const question = latestMessage.content.toLowerCase();

            if (question.includes("react")) {

                resolve(
                    `${portfolioData.name} uses React and TypeScript to build modern applications.`
                );

            }

            else if (question.includes("skills")) {

                resolve(
                    `My skills include ${portfolioData.skills.join(", ")}.`
                );

            }

            else if (question.includes("project")) {

                resolve(
                    `One of my projects is ${portfolioData.projects[0].name}. ${portfolioData.projects[0].description}`
                );

            }

            else if (question.includes("experience")) {

                resolve(
                    portfolioData.summary
                );

            }

            else {

                resolve(
                    "I can answer questions about my skills, projects, and experience."
                );

            }

        }, 1500);

    });

}