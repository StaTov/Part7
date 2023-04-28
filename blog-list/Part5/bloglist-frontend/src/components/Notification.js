import React from 'react';
import {useSelector} from "react-redux";

const Notification = () => {
    const message = useSelector(state => state.message)

    if (message.text === null) {
        return null
    }
    return (
        <div className={message.style}>
            {message.text}
        </div>
    );
};

export default Notification;