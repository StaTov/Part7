import React from 'react';
import {Link} from "react-router-dom";

const NavBar = ({user, handleClickLogout}) => {
    return (<div>
            <div>
                <Link to={"/"}>blogs</Link>
                <Link to={"/users"}>users</Link>
                {user.username} logged in
                <button
                    type="button"
                    onClick={handleClickLogout}>
                    logout
                </button>
            </div>
            <h2>blogs app</h2>
        </div>
    );
};

export default NavBar;