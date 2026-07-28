import { portfolioData } from "../data/portfolio";

export function detectCategory(
    question: string
): string | undefined {

    const text =
        question.toLowerCase();

    const categories =
        new Set<string>();


    portfolioData.projects.forEach(project => {

        project.categories?.forEach(category => {

            categories.add(category);

        });

    });


    for (const category of categories) {

        if (
            text.includes(
                category.toLowerCase()
            )
        ) {

            return category;

        }

    }

    return undefined;

}