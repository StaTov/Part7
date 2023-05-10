import React from 'react';
import {NavLink} from "react-router-dom";
import {Paper} from "@mui/material";
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import '../style.css'

const Blogs = ({blogs}) => {

    return (
        <Paper elevation={3}>
            <Box mt={2} pt={3} pl={3} pb={2}>
                <Typography variant="h5">Blogs list</Typography>
                <Box mt={1}>
                    {blogs.map(blog =>
                        <Box key={blog.id}>
                            <Typography variant="body1">
                                <NavLink className="styleLink" to={`blogs/${blog.id}`}>{blog.title}</NavLink>
                            </Typography>
                        </Box>
                    )}
                </Box>
            </Box>
        </Paper>
    );
};

export default Blogs;