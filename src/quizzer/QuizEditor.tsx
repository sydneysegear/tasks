import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Question } from "./question";
import { QuestionEditor } from "./QuestionEditor";
import { Quiz } from "./quiz";

export function QuizEditor({
    changeEditing,
    quiz,
    editQuiz,
    deleteQuiz
}: {
    changeEditing: () => void;
    quiz: Quiz;
    editQuiz: (id: number, newQuiz: Quiz) => void;
    deleteQuiz: (id: number) => void;
}): JSX.Element {
    const [title, setTitle] = useState<string>(quiz.title);
    const [description, setDescription] = useState<string>(quiz.description);
    const [numQuestions, setNumQuestions] = useState<string>(
        quiz.questionCount.toString()
    );
    const [questionList, setQuestionList] = useState<Question[]>(
        quiz.questions
    );
    function save(id: number) {
        editQuiz(id, {
            ...quiz,
            title: title,
            description: description,
            questionCount: parseInt(numQuestions),
            questions: questionList
        });
        changeEditing();
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Form.Group controlId="formQuizTitle" as={Row}>
                        <Form.Label column sm={2}>
                            Title:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={title}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setTitle(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm={2}>
                            Description:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={description}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setDescription(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column sm={2}>
                            Points:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                type="number"
                                value={numQuestions}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setNumQuestions(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <QuestionEditor
                        questions={questionList}
                        setQuestions={setQuestionList}
                    ></QuestionEditor>
                    <Button
                        onClick={() => save(quiz.id)}
                        variant="success"
                        className="me-4"
                    >
                        Save
                    </Button>
                    <Button
                        onClick={() => deleteQuiz(quiz.id)}
                        variant="danger"
                        className="me-8"
                    >
                        Delete
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
