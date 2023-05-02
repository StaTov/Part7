import React from 'react';
import Blog from "./Blog";


const BlogsContent = ({
                          children,
                          user,
                          handleClickLogout
                      }) => {
    return (
        <div>
            <h2>Blogs App</h2>
            {children}
            <div>
                {user.name} logged in
                <button
                    onClick={handleClickLogout}
                    type="button">logout</button>
            </div>
        </div>
    );
};

export default BlogsContent;