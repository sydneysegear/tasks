import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Question } from "./question";

export function MultChoiceList({
    question
}: {
    question: Question;
}): JSX.Element {
    const [option, setOption] = useState<string>(question.options[0]);
    function updateOption(event: React.ChangeEvent<HTMLSelectElement>) {
        setOption(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="questionOptions">
                <Form.Select value={option} onChange={updateOption}>
                    {question.options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>
                {option === question.expected ? (
                    <div>
                        <span>✔️</span>
                    </div>
                ) : (
                    <span>❌</span>
                )}
            </div>
        </div>
    );
}
