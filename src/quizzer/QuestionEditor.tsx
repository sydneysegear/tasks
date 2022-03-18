import React from "react";
import { ListGroup, Form } from "react-bootstrap";
import { Question } from "./question";

interface QuestionProps {
    question: Question;
    setQuestion: (id: number, newQuestion: Question) => void;
}

export function QuestionNameEditor({
    question,
    setQuestion
}: QuestionProps): JSX.Element {
    return (
        <Form.Control
            value={question.name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setQuestion(question.id, {
                    ...question,
                    name: event.target.value
                })
            }
        />
    );
}

export function QuestionBodyEditor({
    question,
    setQuestion
}: QuestionProps): JSX.Element {
    return (
        <Form.Control
            value={question.body}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setQuestion(question.id, {
                    ...question,
                    body: event.target.value
                })
            }
        />
    );
}

export function QuestionExpectedEditor({
    question,
    setQuestion
}: QuestionProps): JSX.Element {
    return (
        <Form.Control
            value={question.expected}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setQuestion(question.id, {
                    ...question,
                    expected: event.target.value
                })
            }
        />
    );
}

export function QuestionPointsEditor({
    question,
    setQuestion
}: QuestionProps): JSX.Element {
    return (
        <Form.Control
            type="number"
            value={question.points}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setQuestion(question.id, {
                    ...question,
                    points: parseInt(event.target.value)
                })
            }
        />
    );
}

export function QuestionPublishedEditor({
    question,
    setQuestion
}: QuestionProps): JSX.Element {
    return (
        <Form.Check
            type="switch"
            id="is-published-question"
            label="Published"
            checked={!question.published}
            onChange={() =>
                setQuestion(question.id, {
                    ...question,
                    published: !question.published
                })
            }
        />
    );
}

export function QuestionEditor({
    questions,
    setQuestions
}: {
    questions: Question[];
    setQuestions: (questions: Question[]) => void;
}): JSX.Element {
    function setQuestion(id: number, newQuestion: Question) {
        setQuestions(
            questions.map((question: Question) =>
                question.id === id ? newQuestion : question
            )
        );
    }
    return (
        <ListGroup as="ol" numbered>
            {questions.map((question: Question) => (
                <ListGroup.Item
                    as="li"
                    key={question.id}
                    className="d-flex align-items-start"
                >
                    <div className="ms-2 me-auto">
                        {/* Song Title */}
                        <QuestionNameEditor
                            question={question}
                            setQuestion={setQuestion}
                        ></QuestionNameEditor>
                        {/* Song By */}
                        <QuestionBodyEditor
                            question={question}
                            setQuestion={setQuestion}
                        ></QuestionBodyEditor>
                        <QuestionExpectedEditor
                            question={question}
                            setQuestion={setQuestion}
                        ></QuestionExpectedEditor>
                        <QuestionPointsEditor
                            question={question}
                            setQuestion={setQuestion}
                        ></QuestionPointsEditor>
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}
