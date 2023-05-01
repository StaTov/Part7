import React, {useState, useEffect, useRef} from 'react'
import './style.css'
import blogService from './services/blogs'
import LoginForm from "./components/LoginForm";
import BlogsContent from "./components/BlogsContent";
import BlogForm from "./components/BlogForm";
import Notification from "./components/Notification";
import {useDispatch, useSelector} from "react-redux";
import {showError, showNote} from "./reducers/notificationReducer";
import {createBlog, initializeBlogs, increaseLike, removeBlog} from "./reducers/blogsReducer";
import Togglable from "./components/Togglable";
import {clearUser, initializeUser, setUser} from "./reducers/loginReducer";

const App = () => {
    const dispatch = useDispatch()

    const blogFormRef = useRef()
    const blogs = useSelector(state => state.blogs)
    const user = useSelector(state => state.login)


    useEffect(() => {
        dispatch(initializeBlogs())
    }, [dispatch])

    useEffect(() => {
        const loggedUserJSON = window
            .localStorage
            .getItem('loggedBlogappUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            blogService.setToken(user.token)
            dispatch(setUser(user))
        }
    }, [])
    const setAuthorization = (signObj) => {
        dispatch(initializeUser(signObj))
    }

    const handleClickLogout = () => {
        window.localStorage.removeItem('loggedBlogappUser')
        dispatch(clearUser())
    }
    const blogCreator = async (blogObj) => {
        blogFormRef.current.toggleVisibility()
        dispatch(createBlog(blogObj))
    }
    const handleLikeAdd = async (blog) => {
        dispatch(increaseLike(blog))
    }
    const handleDeleteBlog = async (blog, user) => {
        if (!window.confirm(`Remove blog ${blog.title} gonna need it! by ${user.name}`)) {
            return
        }
        dispatch(removeBlog(blog))
    }
    return (
        <div>
            {user === null
                ? <LoginForm
                    setAuthorization={setAuthorization}
                >
                    <Notification/>
                </LoginForm>
                : <div>
                    <Togglable
                        buttonLable="New blog"
                        ref={blogFormRef}>
                        <BlogForm addBlog={blogCreator}/>
                    </Togglable>
                    <BlogsContent
                        blogs={blogs}
                        user={user}
                        handleClickLogout={handleClickLogout}
                        handleLikeAdd={handleLikeAdd}
                        handleDeleteBlog={handleDeleteBlog}
                    >
                        <Notification/>
                    </BlogsContent>
                </div>}
        </div>
    )
}

export default App