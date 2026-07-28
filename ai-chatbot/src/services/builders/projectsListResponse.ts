import { portfolioData } from "../../data/portfolio";


export function buildProjectsListResponse(): string {

    const projects =
        portfolioData.projects;


    return `
Mitchell has built several projects, including:

${projects
    .map(project =>
        `• ${project.name}: ${project.description}`
    )
    .join("\n\n")}
`;

}