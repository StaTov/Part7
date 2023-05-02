import React from 'react';
import {useParams} from "react-router-dom";
import BlogList from "./BlogList";

const User = ({users}) => {


    const id = useParams().id
    const user = users.find(user => user.id === id)
    if (!user) {
        return null
    }

        return (
        <div>
            <h2>{user.username}</h2>
            <div>
                <strong>added blogs</strong>
            </div>
            <ul>
                {user.blogs.map(blog =>
                    <BlogList key={blog.id} blog={blog}/>)}
            </ul>
        </div>
    );
};

export default User;