import { portfolioData } from "../../data/portfolio";

export function buildCategoryProjectsResponse(
    category: string
): string {

    const projects =
        portfolioData.projects.filter(project =>
            project.categories?.includes(category)
        );

    if (!projects.length) {

        return `I couldn't find any projects related to ${category}.`;

    }

    return `
Projects related to ${category}:

${projects
    .map(project =>
        `• ${project.name}\n${project.description}`
    )
    .join("\n\n")}
`;

}