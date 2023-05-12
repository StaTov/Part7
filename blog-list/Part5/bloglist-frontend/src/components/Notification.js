import React from 'react';
import { useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle"
import Box from "@mui/material/Box"


const Notification = () => {
    const message = useSelector(state => state.message)

    if (message.text === null) {
        return null
    }
    return (
        <Box p={3} sx={{
            position: "relative",
            opasity: 0,
        }}>
            <Alert severity={message.style}>
                <AlertTitle>{message.style}</AlertTitle>
                {message.text}
            </Alert>
        </Box>
    );
};

export default Notification;