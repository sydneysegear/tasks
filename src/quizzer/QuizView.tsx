import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { QuestionList } from "./QuestionList";
import { Quiz } from "./quiz";
import { QuizEditor } from "./QuizEditor";

export function QuizView({
    quiz,
    editQuiz,
    deleteQuiz
}: {
    quiz: Quiz;
    editQuiz: (id: number, newQuiz: Quiz) => void;
    deleteQuiz: (id: number) => void;
}): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    function showQuestions(): void {
        setVisible(!visible);
    }
    const [editing, setEditing] = useState<boolean>(false);
    function changeEditing() {
        setEditing(!editing);
    }
    const [points, setPoints] = useState<number>(0);
    return editing ? (
        <QuizEditor
            changeEditing={changeEditing}
            quiz={quiz}
            editQuiz={editQuiz}
            deleteQuiz={deleteQuiz}
        ></QuizEditor>
    ) : (
        <Container>
            <Row>
                <h3>{quiz.title}</h3>
            </Row>
            <Button className="float-right" size="sm" onClick={changeEditing}>
                Edit
            </Button>
            <Row>
                <p>{quiz.description}</p>
            </Row>
            <Row>
                <p>Number of Questions: {quiz.questions.length}</p>
            </Row>
            <Button
                onClick={() => {
                    showQuestions();
                }}
            >
                OpenClose Questions
            </Button>
            {visible && (
                <QuestionList
                    questions={quiz.questions}
                    points={points}
                    setPoints={setPoints}
                ></QuestionList>
            )}
            <div>Points: {points}</div>
        </Container>
    );
}
