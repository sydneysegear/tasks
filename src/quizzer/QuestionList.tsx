import React, { useState } from "react";
import { Col, Form, ListGroup } from "react-bootstrap";
import { Question } from "./question";
import { QuestionView } from "./QuestionView";

export function QuestionList({
    questions,
    points,
    setPoints
}: {
    questions: Question[];
    points: number;
    setPoints: (newPoints: number) => void;
}): JSX.Element {
    const [published, setPublished] = useState<string>("all");
    function updatePublished(event: React.ChangeEvent<HTMLSelectElement>) {
        setPublished(event.target.value);
    }
    //const [questionList, setQuestionList] = useState<Question[]>(questions);
    function publishedOnly() {
        questions.filter((question: Question) => question.published === true);
    }
    function showAll() {
        questions.map((question: Question) => question);
    }
    return (
        <div>
            <div>
                <Form.Group controlId="publishFilter">
                    <Col>
                        <Form.Select
                            value={published}
                            onChange={updatePublished}
                        >
                            <option value="all">Show All</option>
                            <option value="only-published">
                                Show Only Published
                            </option>
                        </Form.Select>
                    </Col>
                </Form.Group>
                {published === "only-published" && publishedOnly}
                {published === "all" && showAll}
            </div>
            <ListGroup as="ol" numbered>
                {questions.map((question: Question) => (
                    <ListGroup.Item
                        as="li"
                        key={question.id}
                        className="d-flex align-items-start"
                    >
                        <QuestionView
                            question={question}
                            points={points}
                            setPoints={setPoints}
                        ></QuestionView>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}
