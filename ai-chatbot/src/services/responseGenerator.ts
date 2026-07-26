import { portfolioData } from "../data/portfolio";
import type { PortfolioIntent } from "../types/portfolio";


export function generateResponse(
    intent: PortfolioIntent
): string {


    switch(intent) {

        case "skills":

            return (
                `My technical skills include ${portfolioData.skills.join(", ")}.`
            );


        case "experience":

            return (
                portfolioData.summary
            );


        case "projects":

            return (
                `One of my featured projects is ${portfolioData.projects[0].name}. ${portfolioData.projects[0].description}`
            );


        case "email":

            return (
                "I have built and deployed 11,000+ responsive HTML email campaigns and created 90+ reusable email templates."
            );


        case "education":

            return (
                portfolioData.education.join(". ")
            );


        default:

            return (
                "I can answer questions about my skills, experience, projects, and email development background."
            );
    }

}