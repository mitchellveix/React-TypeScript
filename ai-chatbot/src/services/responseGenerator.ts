import type { PortfolioIntent } from "../types/portfolio";

import { buildAchievementsResponse } from "./builders/achievementsResponse";
import { buildEducationResponse } from "./builders/educationResponse";
import { buildEmailResponse } from "./builders/emailResponse";
import { buildExperienceResponse } from "./builders/experienceResponse";
import { buildProjectResponse } from "./builders/projectResponse";
import { buildSkillsResponse } from "./builders/skillsResponse";
import { buildComparisonResponse } from "./builders/comparisonResponse";

export function generateResponse(
    intent: PortfolioIntent,
    project?: string,
    projects: string[] = [],
    question = ""
): string {

    switch (intent) {

        case "skills":
            return buildSkillsResponse();

        case "experience":
            return buildExperienceResponse();

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