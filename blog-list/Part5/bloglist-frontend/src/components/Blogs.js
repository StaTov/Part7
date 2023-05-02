import React from 'react';
import Blog from "./Blog";
import {Link} from "react-router-dom";

const Blogs = ({blogs}) => {
    return (
        <div>
            {blogs.map(blog =>
                <div key={blog.id}>
                    <Link to={`blogs/${blog.id}`}>{blog.title}</Link>
                </div>
            )}
        </div>
    );
};

export default Blogs;