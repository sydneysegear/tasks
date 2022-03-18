import { Question } from "./question";

export interface Quiz {
    title: string;
    description: string;
    questionCount: number;
    id: number;
    questions: Question[];
}
