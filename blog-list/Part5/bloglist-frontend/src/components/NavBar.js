import React from 'react';
import {Link} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const NavBar = ({user, handleClickLogout}) => {
    const padding = {
        padding: 2
    }
    return (<>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#" as="span">
                        <Link style={padding} to="/">blogs</Link>
                    </Nav.Link>
                    <Nav.Link href="#" as="span">
                        <Link style={padding} to="/users">users</Link>
                    </Nav.Link>

                    {user
                        ? <Navbar.Text href="#" as="span">
                            <em> {user.username} logged in </em>
                        </Navbar.Text>
                        : <Nav.Link href="#" as="span">
                            <Link style={padding} to="/login">login</Link>
                        </Nav.Link>
                    }

                    <Navbar.Text href="#" as="span">
                        {user
                            ? <Button
                                type="button"
                                onClick={handleClickLogout}>
                                logout
                            </Button>
                            : null}
                    </Navbar.Text>
                </Nav>
            </Navbar.Collapse>


        </Navbar>
        <h1><strong>blogs app</strong></h1>
    </>);
};

export default NavBar;