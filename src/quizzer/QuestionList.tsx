import React from "react";
import { ListGroup } from "react-bootstrap";
import { Question } from "./question";
import { QuestionView } from "./QuestionView";

export function QuestionList({
    questions
}: {
    questions: Question[];
}): JSX.Element {
    return (
        <ListGroup as="ol" numbered>
            {questions.map((question: Question) => (
                <ListGroup.Item
                    as="li"
                    key={question.id}
                    className="d-flex align-items-start"
                >
                    <QuestionView question={question}></QuestionView>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}
