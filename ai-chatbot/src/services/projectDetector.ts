import { findProjectEntity } from "./entityDetector";


export function detectProject(
    question: string
): string | undefined {

    return findProjectEntity(question);

}