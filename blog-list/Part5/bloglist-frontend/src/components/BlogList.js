import React from 'react';

const BlogList = ({blog}) => {
    return (
        <li>
            {blog.title}
        </li>
    );
};

export default BlogList;