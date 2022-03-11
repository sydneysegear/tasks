import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    id="is-edit-mode"
                    label="Editing"
                    checked={isEditing}
                    onChange={() => setIsEditing(!isEditing)}
                />
            </div>
            <div>
                {isEditing ? (
                    <Form.Group controlId="formPersonName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(event: ChangeEvent) =>
                                setName(event.target.value)
                            }
                        ></Form.Control>
                        <Form.Check
                            type="switch"
                            id="is-student"
                            label="student"
                            checked={isStudent}
                            onChange={() => setIsStudent(!isStudent)}
                        />
                    </Form.Group>
                ) : (
                    <div>
                        <span>
                            {name}
                            {isStudent ? " is a student" : " is not a student"}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}
