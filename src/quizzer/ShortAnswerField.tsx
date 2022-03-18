import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Question } from "./question";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function ShortAnswerField({
    question
}: {
    question: Question;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    function updateAnswer(event: ChangeEvent) {
        setAnswer(event.target.value);
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
                        <span>✔️</span>
                        <span>total points</span>
                    </div>
                ) : (
                    <span>❌</span>
                )}
            </div>
        </div>
    );
}
