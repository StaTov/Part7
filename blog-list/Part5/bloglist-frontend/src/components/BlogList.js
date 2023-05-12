import React from 'react';
import Typography  from '@mui/material/Typography';

const BlogList = ({blog}) => {
    return (
        <Typography variant="body1">
            {blog.title}
        </Typography>
    );
};

export default BlogList;