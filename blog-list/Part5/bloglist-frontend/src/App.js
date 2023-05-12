import React, {useEffect} from 'react'
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
    initializeComment
} from "./reducers/blogsReducer";
import Togglabel from "./components/Togglable";
import {clearUser, initializeLogin, setUser} from "./reducers/loginReducer";
import {Route, Routes, useNavigate} from "react-router-dom";
import Users from "./components/Users";
import User from "./components/User"
import Blogs from "./components/Blogs";
import {initializeUser} from "./reducers/userReducer";
import Blog from "./components/Blog";
import NavBar from "./components/NavBar";
import Container from '@mui/material/Container'
import Title from "./components/Title";

const App = () => {
    const dispatch = useDispatch()
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
    }, [dispatch])
    
    const setAuthorization = (signObj) => {
        dispatch(initializeLogin(signObj))
    }

    const handleClickLogout = () => {
        navigate('/')
        window.localStorage.removeItem('loggedBlogappUser')
        dispatch(clearUser())
    }
    const blogCreator = (blogObj) => {
        dispatch(createBlog(blogObj))
        navigate('/')
    }
    const likeAdd = (blog) => {
        dispatch(increaseLike(blog))
    }
    const deleteBlog = (blog, user) => {
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

            <NavBar user={user} handleClickLogout={handleClickLogout}/>
            <Container>
                <Title/>
                <Notification/>
                <BlogForm addBlog={blogCreator}/>
                <Routes>
                    <Route path="/" element={<Blogs blogs={sortedBlogs}/>}/>
                    <Route path="/users" element={<Users users={AllUsers}/>}/>
                    <Route path="/users/:id" element={<User users={AllUsers}/>}/>
                    <Route path="/login" element={<LoginForm
                        setAuthorization={setAuthorization}>
                        <Notification/>
                    </LoginForm>}/>
                    <Route path="/blogs/:id" element={<Blog
                        addComment={setComment}
                        deleteBlog={deleteBlog}
                        likeAdd={likeAdd}
                        user={user}
                        blogs={blogs}/>}/>
                </Routes>
            </Container>
        </div>
    )
}
export default App