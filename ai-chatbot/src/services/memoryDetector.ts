import type { ConversationMemory } from "../types/chat";


export function detectMemory(
    question: string
): Partial<ConversationMemory> {


    const text =
        question.toLowerCase();


    const memory: Partial<ConversationMemory> = {};


    /*
    -------------------------
    Name Detection
    -------------------------
    */


    const namePatterns = [
        "my name is",
        "i'm",
        "i am",
        "call me",
        "you can call me",
        "i go by"
    ];


    for (const pattern of namePatterns) {

        if (text.includes(pattern)) {

            const name =
                extractValue(
                    text,
                    pattern
                );


            if (name) {

                memory.name =
                    formatText(name);

            }

            break;
        }

    }



    /*
    -------------------------
    Favorite Language
    -------------------------
    */


    const languagePatterns = [
        "my favorite language is",
        "favorite language is",
        "i prefer",
        "i mostly code in",
        "i code with"
    ];


    for (const pattern of languagePatterns) {

        if (text.includes(pattern)) {

            const language =
                extractValue(
                    text,
                    pattern
                );


            if (language) {

                memory.favoriteLanguage =
                    formatText(language);

            }

            break;
        }

    }



    /*
    -------------------------
    Favorite Framework
    -------------------------
    */


    const frameworkPatterns = [
        "my favorite framework is",
        "favorite framework is",
        "i use",
        "i build with"
    ];


    for (const pattern of frameworkPatterns) {

        if (text.includes(pattern)) {

            const framework =
                extractValue(
                    text,
                    pattern
                );


            if (framework) {

                memory.favoriteFramework =
                    formatText(framework);

            }

            break;
        }

    }



    return memory;

}



/*
-------------------------
Extract value after phrase
-------------------------
*/


function extractValue(
    text: string,
    pattern: string
): string {


    const afterPattern =
        text.split(pattern)[1];


    if (!afterPattern) {
        return "";
    }


    return afterPattern
        .split(
            /and|but|also|my favorite|i prefer|i use|i build/
        )[0]
        .split(/[.,!?]/)[0]
        .trim();

}



/*
-------------------------
Formatting
-------------------------
*/


function formatText(
    value: string
): string {


    return (
        value.charAt(0).toUpperCase()
        +
        value.slice(1)
    );

}