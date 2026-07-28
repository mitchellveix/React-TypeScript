import { portfolioData } from "../../data/portfolio";


export function buildComparisonResponse(
    projects: string[]
): string {


    const foundProjects =
        portfolioData.projects.filter(project =>
            projects.includes(project.name)
        );


    if(foundProjects.length < 2){

        return "I couldn't find enough projects to compare.";

    }


    const first =
        foundProjects[0];


    const second =
        foundProjects[1];


    return `
    ${first.name} vs ${second.name}


    ${first.name}:

    ${first.description}


    Technologies:

    ${first.technologies?.join(", ") || "Not listed"}


    ${second.name}:

    ${second.description}


    Technologies:

    ${second.technologies?.join(", ") || "Not listed"}
    `;

}