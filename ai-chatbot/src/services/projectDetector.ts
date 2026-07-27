import { portfolioData } from "../data/portfolio";


export function detectProject(
    question: string
): string | undefined {


    const text = question.toLowerCase();


    for (const project of portfolioData.projects) {


        const name =
            project.name.toLowerCase();

            if (text.includes(name)) {
                return project.name;
            }


            if (
                project.name === "Email Materials Submission Tool" &&
                (
                    text.includes("email materials") ||
                    text.includes("submission tool") ||
                    text.includes("materials tool")
                )
            ) {
                return project.name;
            }


        const keywords =
            name.split(" ");


        const matches =
            keywords.filter(word =>
                text.includes(word)
            );


        if (
            matches.length >= 2 ||
            text.includes(name)
        ) {

            return project.name;

        }

    }


    return undefined;
}