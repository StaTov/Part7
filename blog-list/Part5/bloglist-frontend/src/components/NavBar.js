import React from 'react';
import {NavLink} from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box"
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBar = ({user, handleClickLogout}) => {
   
    return (<Box sx={{flexGrow: 1}}>
        <AppBar position="static">
            <Toolbar>
                <Typography sx={{mr: 3}} variant="h6" component="div">
                    <NavLink className="NavLink" to="/">Blogs</NavLink>
                </Typography>

                <Typography sx={{mr: 3}} variant="h6" component="div">
                    <NavLink className="NavLink" to="/users">Users</NavLink>
                </Typography>


                {user
                    ? <Box flexGrow={1} sx={{

                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center"

                    }}>
                        <Typography marginRight={1} variant="caption">
                            <em> {user.username} logged in </em>
                        </Typography>
                        <AccountCircleIcon/>
                        <Button
                            sx={{marginLeft: 0.5}}
                            color="inherit"
                            type="button"
                            onClick={handleClickLogout}>
                            logout
                        </Button></Box>
                    : <Typography variant="h6" component="div" sx={{justifyContent: "flexEnd"}}>
                        <NavLink className="NavLink" to="/login">Login</NavLink>
                    </Typography>
                }

            </Toolbar>
        </AppBar>
    </Box>)
        ;
};

export default NavBar;