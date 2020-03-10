import React from 'react';
import './HelloComp.css';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';


const HelloComp = () => {
    return (
        <div>
            <h2 class="judul">Form Login</h2>
            <div>
                <Row>
                    <Col md="4"></Col>
                    <Col md="4">
                        <Card>
                            <Card.Body>
                                {/* <Card.Title>Tugas Pertemuan Ketiga</Card.Title> */}
                                <h1>Tugas Pertemuan Ketiga</h1>
                                <Form>
                                    <Form.Group as={Row} controlId="formBasicUsername">
                                        <Form.Label column sm="3"><h6>Username</h6></Form.Label>
                                        <Col sm="9">
                                            <Form.Control type="Username" placeholder="masukkan username" required/>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="formBasicPassword">
                                        <Form.Label column sm="3"><h6>Password</h6></Form.Label>
                                        <Col sm="9">
                                            <Form.Control type="password" placeholder="masukkan password" required/>
                                        </Col>
                                    </Form.Group>
                                    <Button className="buttons btn-success" variant="primary" type="submit">
                                        Login
                                    </Button>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember me" />
                                    </Form.Group>
                                    <Button className="cancel btn-success" variant="primary" type="submit">
                                        Cancel
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="4"></Col>
                </Row>
            </div>
        </div >
    )
}

export default HelloComp;