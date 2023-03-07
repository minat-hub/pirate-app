// import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import axios from 'axios';
import { useState } from 'react'


function RegisterLogin() {
    const navigate = useNavigate();
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [passwordc, setpasswordc] = useState("");
    const [error, setError] = useState([])

    function handleRegister() {
        // Handle registration logic here
        navigate('/pirates');
    }

    function handleLogin() {
        // Handle login logic here
        navigate('/pirates');
    }

    const onSubmitHandler = e => {
        e.preventDefault();

        axios.post('http://127.0.0.1:27017/api/users/new', {
            firstName,
            lastName,
            email,
            password,
            passwordc
        })
            .then(res => console.log(res))
            .catch(err => {
                const errorObj = err.response.data.errors
                let errArr = []
                for (const key of Object.keys(errorObj)) {
                    errArr.push(errorObj[key].message)
                }
                setError(errArr)
            })
    }

    const onSubmitHandlerLog = e => {
        e.preventDefault();

        axios.post('http://127.0.0.1:27017/api/users', {
            email,
            password,
        })
            .then(res => console.log(res))
            .catch(err => {
                const errorObj = err.response.data.errors
                let errArr = []
                for (const key of Object.keys(errorObj)) {
                    errArr.push(errorObj[key].message)
                }
                setError(errArr)
            })
        // }
    }
    return (
        // Register/Login form code here

        <Container>
            <Container className="welcomecontainer">
                <Row>
                    <Col>
                        <h2>
                            Welcome To Pirate Crew
                        </h2>
                    </Col>
                </Row>
            </Container>
            <Container className="reglogincontainer">
                <Row>
                    <Col md={6} sm={12}>
                        <Container className="reglogineachcontainer">
                            <h4 className="text-center">Register</h4>
                            <Form onSubmit={onSubmitHandler}>

                                <Form.Group>
                                    <Form.Label>First Name:</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Last Name:</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Email address:</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control type="password" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Confirm Password:</Form.Label>
                                    <Form.Control type="password" />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="mt-4 mb-2 onboardingbutton" onClick={handleRegister}>
                                    Register
                                </Button>
                            </Form>
                        </Container>
                    </Col>
                    <Col md={{ span: 6 }} sm={12}>
                        <Container className="reglogineachcontainer">
                            <h4 className="text-center">Login</h4>
                            <Form onSubmit={onSubmitHandlerLog}>
                                <Form.Group>
                                    <Form.Label>Email address:</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control type="password" />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="mt-4 mb-2 onboardingbutton" onClick={handleLogin}>
                                    Login
                                </Button>
                            </Form>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Container>




    );
}

export default RegisterLogin;