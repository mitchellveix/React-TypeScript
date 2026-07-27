import { portfolioData } from "../data/portfolio";


export function detectProject(
    question: string
): string | undefined {


    const text = question.toLowerCase();


    for (const project of portfolioData.projects) {

        const projectName =
            project.name.toLowerCase();


        if (
            text.includes(projectName) ||
            text.includes(
                projectName.replace(" ", "")
            )
        ) {
            return project.name;
        }
    }


    return undefined;
}