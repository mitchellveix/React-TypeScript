export async function getBotReply(message: string): Promise<string> {

    return new Promise((resolve) => {

        setTimeout(() => {

            if (message.toLowerCase().includes("react")) {

                resolve(
                    "I use React and TypeScript to build applications."
                );

            } else {

                resolve(
                    "Thanks for your question! I'll add more knowledge soon."
                );

            }

        }, 1500);

    });

}