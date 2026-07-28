import { portfolioData } from "../data/portfolio";

export function detectTechnology(
    question: string
): string | undefined {

    const text = question.toLowerCase();

    const technologies = new Set<string>();

    portfolioData.projects.forEach(project => {

        project.technologies?.forEach(technology => {
            technologies.add(technology);
        });

    });

    for (const technology of technologies) {

        if (
            text.includes(
                technology.toLowerCase()
            )
        ) {
            return technology;
        }

    }

    return undefined;

}