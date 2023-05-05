import React, {useEffect, useRef} from 'react'
import './style.css'
import blogService from './services/blogs'
import LoginForm from "./components/LoginForm";
import BlogForm from "./components/BlogForm";
import Notification from "./components/Notification";
import {useDispatch, useSelector} from "react-redux";
import {
    createBlog,
    initializeBlogs,
    increaseLike,
    removeBlog,
    addComment,
    initializeComment
} from "./reducers/blogsReducer";
import Togglable from "./components/Togglable";
import {clearUser, initializeLogin, setUser} from "./reducers/loginReducer";
import {Route, Routes, useNavigate} from "react-router-dom";
import Users from "./components/Users";
import User from "./components/User"
import Blogs from "./components/Blogs";
import {initializeUser} from "./reducers/userReducer";
import Blog from "./components/Blog";
import NavBar from "./components/NavBar";

const App = () => {
    const dispatch = useDispatch()
    const blogFormRef = useRef()
    const blogs = useSelector(state => state.blogs)
    const user = useSelector(state => state.login)
    const AllUsers = useSelector(state => state.user)
    const navigate = useNavigate()
    const sortedBlogs = [...blogs].sort((a, b) => {
        return b.likes - a.likes
    })

    useEffect(() => {
        dispatch(initializeUser())
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
        dispatch(initializeLogin(signObj))
    }

    const handleClickLogout = () => {
        window.localStorage.removeItem('loggedBlogappUser')
        dispatch(clearUser())
    }
    const blogCreator = (blogObj) => {
        blogFormRef.current.toggleVisibility()
        dispatch(createBlog(blogObj))
        navigate('/')
    }
    const handleLikeAdd =  (blog) => {
        dispatch(increaseLike(blog))
    }
    const handleDeleteBlog =  (blog, user) => {
        if (!window.confirm(`Remove blog ${blog.title} gonna need it! by ${user.name}`)) {
            return
        }
        dispatch(removeBlog(blog))
        navigate('/')
    }
    const setComment = (comment, id) => {
        dispatch(initializeComment(comment, id))
    }
    return (<div>
        {user === null
            ? <LoginForm
                setAuthorization={setAuthorization}>
                <Notification/>
            </LoginForm>
            : <div>
                <NavBar user={user} handleClickLogout={handleClickLogout}/>
                <Notification/>
                <Togglable
                    buttonLable="New blog"
                    ref={blogFormRef}>
                    <BlogForm addBlog={blogCreator}/>
                </Togglable>


                <Routes>
                    <Route path="/" element={<Blogs blogs={sortedBlogs}/>}/>
                    <Route path="/users" element={<Users users={AllUsers}/>}/>
                    <Route path="/users/:id" element={<User users={AllUsers}/>}/>
                    <Route path="/blogs/:id" element={<Blog
                        addComment={setComment}
                        handleDeleteBlog={handleDeleteBlog}
                        handleLikeAdd={handleLikeAdd}
                        user={user}
                        blogs={blogs}/>}/>
                </Routes>

            </div>}
    </div>)
}
export default App