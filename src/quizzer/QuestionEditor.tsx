import React from "react";
import { ListGroup, Form, Col, Button, FormLabel, Row } from "react-bootstrap";
import { Question } from "./question";

interface QuestionProps {
    question: Question;
    setQuestion: (id: number, newQuestion: Question) => void;
}

export function QuestionIDEditor({
    question,
    setQuestion
}: QuestionProps): JSX.Element {
    return (
        <Form.Control
            value={question.id}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setQuestion(question.id, {
                    ...question,
                    id: parseInt(event.target.value)
                })
            }
        />
    );
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

export function QuestionTypeEditor({
    question,
    setQuestion
}: QuestionProps): JSX.Element {
    return (
        <div>
            <Form.Group controlId="questionOptions">
                <Col>
                    <Form.Select
                        value={question.type}
                        onChange={(
                            event: React.ChangeEvent<HTMLSelectElement>
                        ) => {
                            setQuestion(question.id, {
                                ...question,
                                type: event.target.value
                            });
                        }}
                    >
                        <option value="multiple_choice_question">
                            Multiple Choice
                        </option>
                        <option value="short_answer_question">
                            Short Answer
                        </option>
                    </Form.Select>
                </Col>
            </Form.Group>
        </div>
    );
}

/*
export function QuestionOptionsEditor({
    question,
    setQuestion
}: QuestionProps): JSX.Element {
    const [option, setOption] = useState<string>(question.options[0]);
    return (
        <div>
            <Form.Control
                value={option}
                onChange={() => {
                    setQuestion(question.id, {...question, options: question.options.map((option: string) => (
                            <OptionsEditor
                                option={option}
                                setOption={setOption}
                            ></OptionsEditor>
                        )
                    )}
                 );
                }}
            </div>
    );
}
*/

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

    function addQuestion() {
        setQuestions([
            ...questions,
            {
                id: 0,
                name: "",
                body: "",
                type: "",
                options: [],
                expected: "",
                points: 0,
                published: false
            }
        ]);
    }

    function deleteQuestion(id: number) {
        setQuestions(
            questions.filter(
                (question: Question): boolean => question.id !== id
            )
        );
    }

    return (
        <div>
            <Button onClick={addQuestion}>Add Question</Button>
            <ListGroup as="ol" numbered>
                {questions.map((question: Question) => (
                    <ListGroup.Item
                        as="li"
                        key={question.id}
                        className="d-flex align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <Form.Group controlId="formQuizID" as={Row}>
                                <FormLabel column sm={2}>
                                    ID
                                </FormLabel>
                                <Col>
                                    <QuestionIDEditor
                                        question={question}
                                        setQuestion={setQuestion}
                                    ></QuestionIDEditor>
                                </Col>
                            </Form.Group>
                            <Form.Group controlId="formQuizName" as={Row}>
                                <FormLabel column sm={2}>
                                    Name
                                </FormLabel>
                                <Col>
                                    <QuestionNameEditor
                                        question={question}
                                        setQuestion={setQuestion}
                                    ></QuestionNameEditor>
                                </Col>
                            </Form.Group>
                            <Form.Group controlId="formQuizBody" as={Row}>
                                <Form.Label column sm={2}>
                                    Body:
                                </Form.Label>
                                <Col>
                                    <QuestionBodyEditor
                                        question={question}
                                        setQuestion={setQuestion}
                                    ></QuestionBodyEditor>
                                </Col>
                            </Form.Group>
                            <Form.Group controlId="formQuizExpected" as={Row}>
                                <Form.Label column sm={2}>
                                    Expected:
                                </Form.Label>
                                <Col>
                                    <QuestionExpectedEditor
                                        question={question}
                                        setQuestion={setQuestion}
                                    ></QuestionExpectedEditor>
                                </Col>
                            </Form.Group>
                            <Form.Group controlId="formQuizPoints" as={Row}>
                                <Form.Label column sm={2}>
                                    Points:
                                </Form.Label>
                                <Col>
                                    <QuestionPointsEditor
                                        question={question}
                                        setQuestion={setQuestion}
                                    ></QuestionPointsEditor>
                                </Col>
                            </Form.Group>
                            <Form.Group controlId="formQuizPublished" as={Row}>
                                <Col>
                                    <QuestionPublishedEditor
                                        question={question}
                                        setQuestion={setQuestion}
                                    ></QuestionPublishedEditor>
                                </Col>
                            </Form.Group>
                            <Form.Group controlId="formQuizType" as={Row}>
                                <Form.Label column sm={2}>
                                    Type:
                                </Form.Label>
                                <Col>
                                    <QuestionTypeEditor
                                        question={question}
                                        setQuestion={setQuestion}
                                    ></QuestionTypeEditor>
                                </Col>
                            </Form.Group>
                            <Button
                                variant="danger"
                                size="sm"
                                onClick={() => deleteQuestion(question.id)}
                            >
                                Delete Question
                            </Button>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}
