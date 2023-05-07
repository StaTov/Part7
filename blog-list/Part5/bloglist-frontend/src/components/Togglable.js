import React from 'react';
import {useState, forwardRef, useImperativeHandle} from "react";
import PropTypes from "prop-types";
import {Button} from "react-bootstrap";

const Togglabel = forwardRef((props, refs) => {
    const [visible, setVisible] = useState(false)

    const showWhenVisible = {display: visible ? 'none' : ''}
    const hideWhenVisible = {display: visible ? '' : 'none'}

    Togglabel.propTypes = {
        buttonLabel: PropTypes.string.isRequired
    }
    const toggleVisibility = () => {
        setVisible(!visible)
    }

    useImperativeHandle(refs, () => {
        return {
            toggleVisibility
        }
    })

    return (
        <div>
            <div style={showWhenVisible}>
                <Button
                    variant="primary"
                    onClick={toggleVisibility}
                        type="button">
                    {props.buttonLabel}
                </Button>
            </div>
            <div style={hideWhenVisible}>
                {props.children}

                    <Button variant="danger"
                        onClick={toggleVisibility}
                        type="button">
                        cancel
                    </Button>
            </div>
        </div>
    );
})

export default Togglabel;