import React from "react";
import { Container, Row } from "react-bootstrap";
import { MultChoiceList } from "./MultChoiceList";
import { Question } from "./question";
import { ShortAnswerField } from "./ShortAnswerField";

export function QuestionView({
    question,
    points,
    setPoints
}: {
    question: Question;
    points: number;
    setPoints: (newPoints: number) => void;
}): JSX.Element {
    return (
        <Container>
            <Row>
                <h3>{question.name}</h3>
            </Row>
            <Row>
                <p>{question.body}</p>
            </Row>
            <Row> Number of Points: {question.points}</Row>
            {question.type === "multiple_choice_question" && (
                <MultChoiceList
                    question={question}
                    points={points}
                    setPoints={setPoints}
                ></MultChoiceList>
            )}
            {question.type === "short_answer_question" && (
                <ShortAnswerField
                    question={question}
                    points={points}
                    setPoints={setPoints}
                ></ShortAnswerField>
            )}
        </Container>
    );
}
