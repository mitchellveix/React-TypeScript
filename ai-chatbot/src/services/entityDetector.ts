import { portfolioData } from "../data/portfolio";


export function findProjectEntity(
    question: string
): string | undefined {

    const projects =
        findProjectEntities(question);

    return projects[0];

}



export function findProjectEntities(
    question: string
): string[] {


    const text =
        question.toLowerCase();


    const matches: string[] = [];


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

            matches.push(
                project.name
            );

        }

    }


    return matches;

}