import React from 'react';
import { useParams } from "react-router-dom";
import BlogList from "./BlogList";
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"

const User = ({ users }) => {


    const id = useParams().id
    const user = users.find(user => user.id === id)
    if (!user) {
        return null
    }

    return (
        <Box>
            <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
                <Box>
                    <Typography variant="h4">{user.username}</Typography>
                </Box>

                <Box mt={1}>
                    <Typography variant="h6">added blogs</Typography>
                </Box>
                {user.blogs.length === 0
                    ? <Box mt={1}>
                        <Typography variant="body1">
                            Blogs not found...
                        </Typography>
                    </Box>
                    :
                    <Box p={1}>
                        {user.blogs.map(blog =>
                            <BlogList key={blog.id} blog={blog} />)}
                    </Box>}
            </Paper>
        </Box>
    );
};

export default User;