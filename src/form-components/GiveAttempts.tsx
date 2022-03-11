import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<string>("3");
    const [requestedAttempts, setRequestedAttempts] = useState<string>("0");
    function decreaseAttempts(): void {
        setAttempts((parseInt(attempts) - 1).toString());
    }
    function vaidateRequest(): void {
        !isNaN(parseInt(requestedAttempts)) &&
            setAttempts(
                (parseInt(requestedAttempts) + parseInt(attempts)).toString()
            );
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <div>
                <span>Number of attempts: {attempts}</span>
            </div>
            <Form.Group controlId="formMovieReleased">
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequestedAttempts(event.target.value)
                    }
                />
            </Form.Group>
            <Button onClick={decreaseAttempts} disabled={attempts === "0"}>
                Use
            </Button>
            <Button onClick={vaidateRequest}>Gain</Button>
        </div>
    );
}
