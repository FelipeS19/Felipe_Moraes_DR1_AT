// src/pages/Login.jsx

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import Button from '../components/Button';
import { fakeLogin } from '../Utils/FakeLogin';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fakeLogin(username, password);
            setMessage(response.message);
            if (response.success) {
                navigate('/');
            }
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <Typography variant="h4" text="Login" />
                <TextField
                    label="Username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleLogin}
                    text="Login"
                />
                {message && <Typography variant="body1" text={message} />}
                <div className="register-link">
                    <Typography variant="body1" text="Não tem uma conta?" />
                    <Link to="/register" className="register-link-text">Crie uma conta</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
