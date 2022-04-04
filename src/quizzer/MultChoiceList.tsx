import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Question } from "./question";

export function MultChoiceList({
    question,
    points,
    setPoints
}: {
    question: Question;
    points: number;
    setPoints: (newPoints: number) => void;
}): JSX.Element {
    const [option, setOption] = useState<string>(question.options[0]);
    function updateOption(event: React.ChangeEvent<HTMLSelectElement>) {
        setOption(event.target.value);
    }
    function addPoints(): void {
        setPoints(points + question.points);
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
