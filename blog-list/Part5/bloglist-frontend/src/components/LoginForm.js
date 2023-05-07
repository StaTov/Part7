import React from 'react';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";


const LoginForm = ({
                       children,
                       setAuthorization,
                   }) => {
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const navigate = useNavigate()
    const handlePassword = ({target}) => setPassword(target.value)
    const handleUsername = ({target}) => setUsername(target.value)
    const handleLogin = (e) => {
        e.preventDefault()
        setAuthorization({username, password})
        setPassword('')
        setUsername('')
        navigate('/')
    }

    return (
        <div>
            <div>
                <h2>log in to application</h2>
                {children}
            </div>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        placeholder='Enter username'
                        value={username}
                        name="Username"
                        type="text"
                        onChange={handleUsername}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        placeholder='Enter password'
                        type="password"
                        value={password}
                        name="Password"
                        onChange={handlePassword}
                    />
                </Form.Group>
                <div>
                    <Button
                        type="submit">
                        login
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default LoginForm;