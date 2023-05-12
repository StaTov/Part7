import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const LoginForm = ({ setAuthorization }) => {

    const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const user = useSelector(state => state.login)


    const handlePassword = ({ target }) => setPassword(target.value)
    const handleUsername = ({ target }) => setUsername(target.value)

    const handleLogin = (e) => {
        e.preventDefault()
        setAuthorization({ username, password })
        setPassword('')
        setUsername('')
    }
    if (user) { return null }

    return (
        <Paper elevation={3}
            sx={{
                pt: 5,
                pl: 3,
                pb: 3
            }}
        >
            <Box sx={{ p: 1 }}>
                <Typography variant="h5">Log in to application</Typography>
            </Box>
            <form onSubmit={handleLogin}>
                <Box sx={{ p: 1 }}>
                    <TextField
                        size="small"
                        variant="outlined"
                        label="Username"
                        value={username}
                        onChange={handleUsername}
                    />
                </Box>
                <Box sx={{ p: 1 }}>
                    <TextField
                        size="small"
                        variant="outlined"
                        label="Password"
                        value={password}
                        type="password"
                        onChange={handlePassword}
                    />
                </Box>
                <Box sx={{ p: 1 }}>
                    <Button variant="contained"
                        type="submit">
                        login
                    </Button>
                </Box>
            </form>
        </Paper>
    );
};

export default LoginForm;