import React from 'react';
import Blog from "./Blog";
import {Link} from "react-router-dom";
import {Table} from "react-bootstrap";

const Blogs = ({blogs}) => {
    return (
        <div>
            <h2>blogs</h2>
            <Table striped >
                <tbody>
                {blogs.map(blog =>
                    <tr key={blog.id}>
                        <td>
                            <Link to={`blogs/${blog.id}`}>{blog.title}</Link>
                        </td>
                    </tr>
                )}
                </tbody>
            </Table>
        </div>
    );
};

export default Blogs;