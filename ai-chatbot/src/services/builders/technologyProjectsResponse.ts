import { portfolioData } from "../../data/portfolio";

export function buildTechnologyProjectsResponse(
    technology: string
): string {

    const projects =
        portfolioData.projects.filter(project =>
            project.technologies?.includes(technology)
        );

    if (projects.length === 0) {

        return `I couldn't find any projects using ${technology}.`;

    }

    return `
Projects using ${technology}:

${projects
    .map(project =>
        `• ${project.name}\n${project.description}`
    )
    .join("\n\n")}
`;

}