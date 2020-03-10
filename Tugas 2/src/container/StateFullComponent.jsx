import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';

export default class StateFullComponent extends React.Component {
    state = {
        username: "",
        password: "",
        remember : false
    };

    handleChange = (value, name) =>{
        this.setState({...this.state,[name]: value});
    };

    submitForm = e =>{
        console.log(this.state);
    };

    render() {
        return (
            <div>
            <h2 class="judul">Form Login</h2>
            <div>
                <Row>
                    <Col md="4"></Col>
                    <Col md="4">
                        <Card>
                            <Card.Body>
                                <Card.Title>Tugas Pertemuan Ketiga</Card.Title>
                                
                                    <Form.Group as={Row} controlId="formBasicUsername">
                                        <Form.Label column sm="3">Username</Form.Label>
                                        <Col sm="9">
                                            <Form.Control type="Username" placeholder="Input Username" required
                                            name = "username"
                                            value={this.state.username}
                                            onChange={event => 
                                            this.handleChange(event.target.value, "username")
                                            }
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="formBasicPassword">
                                        <Form.Label column sm="3">Password</Form.Label>
                                        <Col sm="9">
                                            <Form.Control type="password" placeholder="Input Password" required
                                            name = "password"
                                            value = {this.state.password}
                                            onChange = {event => this.handleChange(event.target.value, "password")}
                                            />
                                        </Col>
                                    </Form.Group>
                                    <Button className="buttons btn-success" variant="primary" type="submit" onClick={this.submitForm}>
                                        Login
                                    </Button>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember me" 
                                        checked={this.state.remember}
                                        onChange={event => this.handleChange(!this.state.remember, "remember")}
                                        />
                                    </Form.Group>
                                    <Button className="cancel btn-success" variant="primary" type="submit">
                                        Cancel
                                    </Button>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="4"></Col>
                </Row>
            </div>
        </div >
        )
    }
}

// export default StateFullComponent;