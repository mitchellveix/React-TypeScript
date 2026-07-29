import type { PortfolioIntent } from "../types/portfolio";
import { buildAchievementsResponse } from "./builders/achievementsResponse";
import { buildEducationResponse } from "./builders/educationResponse";
import { buildEmailResponse } from "./builders/emailResponse";
import { buildExperienceResponse } from "./builders/experienceResponse";
import { buildProjectResponse } from "./builders/projectResponse";
import { buildSkillsResponse } from "./builders/skillsResponse";
import { buildComparisonResponse } from "./builders/comparisonResponse";
import { buildProjectsListResponse } from "./builders/projectsListResponse";
import { buildTechnologyProjectsResponse } from "./builders/technologyProjectsResponse";
import { buildCategoryProjectsResponse } from "./builders/categoryProjectsResponse";
import {
    buildMemorySavedResponse,
    buildMemoryRecallResponse
} from "./builders/memoryResponse";
import type { ConversationContext } from "../types/chat";


export function generateResponse(
    intent: PortfolioIntent,
    project?: string,
    projects: string[] = [],
    technology?: string,
    category?: string,
    question = "",
    memory?: any,
    context?: ConversationContext
): string {

    switch (intent) {

        case "memorySaved":

            return buildMemorySavedResponse(
                memory
            );


        case "memoryRecall":

            return buildMemoryRecallResponse(
                memory,
                question
            );
            
        case "skills":
            return buildSkillsResponse();

        case "experience":
            return buildExperienceResponse();

        case "projectList":
            return buildProjectsListResponse();

        case "technologyProjects":

            if (context?.currentProject) {

                return `
                For ${context.currentProject}, 
                the main technologies used were React, TypeScript, Vite, and Cloudflare Workers.
                `;

            }

            return buildTechnologyProjectsResponse(
                technology ?? ""
            );

        case "categoryProjects":
            return buildCategoryProjectsResponse(
                category ?? ""
            );
            
        case "projects":

            if (project) {
                return buildProjectResponse(
                    project,
                    question
                );
            }

            return "Ask me about one of Mitchell's projects.";

        case "email":
            return buildEmailResponse();

        case "education":
            return buildEducationResponse();

        case "achievements":
            return buildAchievementsResponse();

        case "comparison":
            return buildComparisonResponse(
                projects
            );

        default:
            return "I can answer questions about Mitchell's skills, experience, projects, education, achievements, and email development background.";

    }

}