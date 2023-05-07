import React from 'react';
import {useSelector} from "react-redux";
import {Alert} from "react-bootstrap";

const Notification = () => {
    const message = useSelector(state => state.message)

    if (message.text === null) {
        return null
    }
    return (
        <Alert variant={message.style}>
            <Alert.Heading>{message.text}</Alert.Heading>
        </Alert>
    );
};

export default Notification;