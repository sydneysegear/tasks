import React, { useState } from "react";
import { Form } from "react-bootstrap";
const colors = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black"
];

export function ChangeColor(): JSX.Element {
    const [chosen, setChosen] = useState<string>("red");
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((color: string) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        name="chosen"
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setChosen(event.target.value)}
                        id={"colors-choice-" + color}
                        value={color}
                        checked={chosen === color}
                        label={
                            <span
                                style={{
                                    backgroundColor: color,
                                    color: "black"
                                }}
                            >
                                {color}
                            </span>
                        }
                    />
                ))}
            </div>
            <div>
                <span> You have chosen </span>
                <span
                    data-testid="colored-box"
                    style={{
                        backgroundColor: chosen,
                        color: "black"
                    }}
                >
                    {chosen}
                </span>
            </div>
        </div>
    );
}
