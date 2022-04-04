import React from "react";
import { Button, Col, Form, ListGroup, Row } from "react-bootstrap";

export function OptionsEditor({
    options,
    setOptions
}: {
    options: string[];
    setOptions: (options: string[]) => void;
}): JSX.Element {
    function addOption() {
        setOptions([...options, ""]);
    }
    function editOption(index: number, newValue: string) {
        const copiedOptions = [...options];
        copiedOptions[index] = newValue;
        setOptions(copiedOptions);
    }
    function deleteOption(index: number) {
        const copiedOptions = [...options];
        copiedOptions.splice(index, 1);
        setOptions(copiedOptions);
    }
    return (
        <div>
            <Button size="sm" variant="success" onClick={addOption}>
                Add Song
            </Button>
            <ListGroup as="ol" numbered>
                {options.map((song: string, index: number) => (
                    <ListGroup.Item
                        as="li"
                        key={index}
                        className="d-flex align-items-start"
                    >
                        <div className="ms-3 me-auto">
                            <Form.Group controlId="formMovieName" as={Row}>
                                <Col sm={11}>
                                    <Form.Control
                                        value={song}
                                        onChange={(
                                            event: React.ChangeEvent<HTMLInputElement>
                                        ) =>
                                            editOption(
                                                index,
                                                event.target.value
                                            )
                                        }
                                    />
                                </Col>
                                <Col sm={1}>
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => deleteOption(index)}
                                    >
                                        ❌
                                    </Button>
                                </Col>
                            </Form.Group>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}
