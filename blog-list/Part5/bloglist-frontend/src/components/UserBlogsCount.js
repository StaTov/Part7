import React from 'react';
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography';

const UserBlogsCount = ({ user }) => {
    return (

        <tr>
            <td>
                <Box pt={1} pr={2}>
                    <Typography varinat='h5'>
                        <NavLink className="userList" to={`/users/${user.id}`}>
                            {user.name}
                        </NavLink>
                    </Typography>
                </Box>
            </td>
            <td>
                <Box sx={{ display: "flex", justifyContent: "center" }} pt={1} pr={2}>
                    {user.blogs.length}
                </Box>
            </td>
        </tr>


    );
};

export default UserBlogsCount;