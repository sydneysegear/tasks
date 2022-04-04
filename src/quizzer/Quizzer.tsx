import React, { useState } from "react";
import { Quiz } from "./quiz";
import { QuizList } from "./QuizList";
import quizdata from "./quizzes.json";
import appSketch from "./assets/appSketch.png";
import { Button } from "react-bootstrap";
import { AddQuizModal } from "./AddQuizModal";

export function Quizzer(): JSX.Element {
    const [quizzes, setQuizzes] = useState<Quiz[]>(quizdata);
    const [showAddModal, setShowAddModal] = useState<boolean>(false);

    function editQuiz(id: number, newQuiz: Quiz) {
        setQuizzes(
            quizzes.map((quiz: Quiz): Quiz => (quiz.id === id ? newQuiz : quiz))
        );
        console.log(id);
    }

    function deleteQuiz(id: number) {
        setQuizzes(quizzes.filter((quiz: Quiz): boolean => quiz.id !== id));
    }

    function addQuiz(newQuiz: Quiz) {
        const existing = quizzes.find(
            (quiz: Quiz): boolean => quiz.id === newQuiz.id
        );
        if (existing === undefined) {
            setQuizzes([...quizzes, newQuiz]);
        }
    }

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

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
            <div>
                <Button
                    variant="success"
                    className="m-4"
                    onClick={handleShowAddModal}
                >
                    Add New Quiz
                </Button>
                <AddQuizModal
                    show={showAddModal}
                    handleClose={handleCloseAddModal}
                    addQuiz={addQuiz}
                ></AddQuizModal>
            </div>
            <div>
                <ul>
                    <li>Completed Components</li>
                    <li>Application is sketched</li>
                    <li>Quizzes are Visible (tested)</li>
                    <li>Quizzes have Questions (tested)</li>
                    <li>Delete Questions (tested)</li>
                    <li>Delete Quizzes (tested)</li>
                    <li>Add Quizzes (not tested)</li>
                    <li>Add Questions (not tested)</li>
                    <li>Published Questions (not tested)</li>
                    <li>Short Answer and Multiple Choice (not tested)</li>
                    <li>Check Correctness (not tested)</li>
                    <li>Edit Questions (not tested)</li>
                </ul>
                <img src={appSketch} alt="A sketch of my quizzer app" />
            </div>
        </div>
    );
}
