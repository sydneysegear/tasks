import React, { useState } from "react";
import { Quiz } from "./quiz";
import { QuizList } from "./QuizList";
import quizdata from "./quizzes.json";
import appSketch from "./assets/appSketch.png";

export function Quizzer(): JSX.Element {
    const [quizzes, setQuizzes] = useState<Quiz[]>(quizdata);

    function editQuiz(id: number, newQuiz: Quiz) {
        setQuizzes(
            quizzes.map((quiz: Quiz): Quiz => (quiz.id === id ? newQuiz : quiz))
        );
        console.log(id);
    }

    function deleteQuiz(id: number) {
        setQuizzes(quizzes.filter((quiz: Quiz): boolean => quiz.id !== id));
    }

    /*
    function addQuiz(newQuiz: Quiz) {
        const existing = quizzes.find((quiz: Quiz) => quiz.id === newQuiz.id);
        if (existing === undefined) {
            setQuizzes([...quizzes, newQuiz]);
        }
    }
    */

    return (
        <div>
            <h3>Quizzer</h3>
            <div>
                <QuizList
                    quizzes={quizzes}
                    editQuiz={editQuiz}
                    deleteQuiz={deleteQuiz}
                ></QuizList>
            </div>
            <span>Total Points: </span>
            <div>
                <ul>
                    <li>Completed Components</li>
                    <li>Application is sketched</li>
                    <li>Quizzes are Visible (tested)</li>
                    <li>Quizzes have Questions (tested)</li>
                    <li>Short Answer and Multiple Choice (not tested)</li>
                    <li>Check Correctness (not tested)</li>
                    <li>
                        Edit Questions (about halfway done component, not
                        tested)
                    </li>
                </ul>
                <img src={appSketch} alt="A sketch of my quizzer app" />
            </div>
        </div>
    );
}
