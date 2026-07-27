import { portfolioData } from "../data/portfolio";


export function findProjectEntity(
    question: string
): string | undefined {


    const text =
        question.toLowerCase();


    for (
        const project of portfolioData.projects
    ) {


        const projectName =
            project.name.toLowerCase();


        const words =
            projectName.split(" ");


        const matchedWords =
            words.filter(word =>
                text.includes(word)
            );


        if (
            text.includes(projectName) ||
            matchedWords.length >= 2
        ) {

            return project.name;

        }

    }


    return undefined;
}