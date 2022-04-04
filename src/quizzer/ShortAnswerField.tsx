import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Question } from "./question";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function ShortAnswerField({
    question,
    points,
    setPoints
}: {
    question: Question;
    points: number;
    setPoints: (newPoints: number) => void;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    function updateAnswer(event: ChangeEvent) {
        setAnswer(event.target.value);
    }
    function addPoints(): void {
        setPoints(points + question.points);
    }
    return (
        <div>
            <Form.Group controlId="formAnswer">
                <Form.Control
                    name="shortAnswer"
                    value={answer}
                    onChange={updateAnswer}
                ></Form.Control>
            </Form.Group>
            <div>
                {answer === question.expected ? (
                    <div>
                        {addPoints}
                        <span>✔️</span>
                    </div>
                ) : (
                    <span>❌</span>
                )}
            </div>
        </div>
    );
}
