import React from 'react';
import UserBlogsCount from "./UserBlogsCount";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';


const Users = ({ users }) => {

    return (
        <Box mt={3}>
            <Paper sx={{ p: 3 }} elevation={3}>
                <table>
                    <thead>
                        <tr >
                            <Typography variant="h4" component="td">Users info</Typography>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <Typography variant="h6" component="td">
                                user
                            </Typography>


                            <Typography variant="h6" component="td">
                                blogs count
                            </Typography>

                        </tr>
                        {users.map(user =>
                            <UserBlogsCount
                                key={user.id}
                                user={user} />)}
                    </tbody>
                </table>
            </Paper>
        </Box>
    );
};

export default Users;