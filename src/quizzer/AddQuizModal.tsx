import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { Question } from "./question";
import { QuestionEditor } from "./QuestionEditor";
import { Quiz } from "./quiz";

export function AddQuizModal({
    show,
    handleClose,
    addQuiz
}: {
    show: boolean;
    handleClose: () => void;
    addQuiz: (newQuiz: Quiz) => void;
}) {
    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    //const [questionCount, setQuestionCount] = useState<number>(0);
    const [questions, setQuestions] = useState<Question[]>([]);

    function saveChanges() {
        addQuiz({
            title: title,
            description: description,
            questionCount: questions.length,
            id: id,
            questions: questions.map((question: Question): Question => question)
        });
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Title */}
                <Form.Group controlId="formMovieTitle" as={Row}>
                    <Form.Label column sm={3}>
                        Title
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={title}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setTitle(event.target.value)}
                        />
                    </Col>
                </Form.Group>
                {/* Description */}
                <Form.Group controlId="formMovieDescription" as={Row}>
                    <Form.Label column sm={3}>
                        Description
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={description}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setDescription(event.target.value)}
                        />
                    </Col>
                </Form.Group>
                {/* ID */}
                <Form.Group controlId="formMovieID" as={Row}>
                    <Form.Label column sm={3}>
                        ID
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={id}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setId(parseInt(event.target.value))}
                        />
                    </Col>
                </Form.Group>
                {/* Soundtrack */}
                <span>Questions:</span>
                <QuestionEditor
                    questions={questions}
                    setQuestions={setQuestions}
                ></QuestionEditor>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveChanges}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
