import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";
import { Question } from "./question";

export function FilterPublished({
    questions
}: {
    questions: Question[];
}): JSX.Element {
    const [published, setPublished] = useState<string>("all");
    function updatePublished(event: React.ChangeEvent<HTMLSelectElement>) {
        setPublished(event.target.value);
    }
    const [questionList, setQuestionList] = useState<Question[]>(questions);
    function publishedOnly() {
        setQuestionList(
            questionList.filter(
                (question: Question) => question.published === true
            )
        );
    }
    function showAll() {
        setQuestionList(questionList.map((question: Question) => question));
    }

    return (
        <div>
            <Form.Group controlId="publishFilter">
                <Col>
                    <Form.Select value={published} onChange={updatePublished}>
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
    );
}
