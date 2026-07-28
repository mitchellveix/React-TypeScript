import {
    findProjectEntity,
    findProjectEntities
} from "./entityDetector";


export function detectProject(
    question: string
): string | undefined {

    return findProjectEntity(question);

}



export function detectProjects(
    question: string
): string[] {

    return findProjectEntities(question);

}