import {createSlice} from "@reduxjs/toolkit";
import blogsService from '../services/blogs'
import {showError, showNote} from "./notificationReducer";

const blogsSlice = createSlice({
    name: 'blogs',
    initialState: [],
    reducers: {
        setBlogs(state, action) {
            return action.payload
        },
        addBlog(state, action) {
            state.push(action.payload)
        },
        addLike(state, action) {
            return state.map(blog => (
                action.payload.id === blog.id
                    ? action.payload
                    : blog
            ))
        },
        deleteBlog(state, action) {
            return state.filter(blog => (
                blog.id !== action.payload
            ))
        }
    }
})
export const {setBlogs, addBlog, addLike, deleteBlog} = blogsSlice.actions


export const initializeBlogs = () => {
    return async dispatch => {
        const blogs = await blogsService.getAll()
        dispatch(setBlogs(blogs))
    }
}
export const createBlog = (newBlog) => {
    return async dispatch => {
        try {
            const createdBlog = await blogsService.create(newBlog)
            dispatch(addBlog(createdBlog))
            dispatch(showNote(`a new blog '${newBlog.title}' by ${newBlog.author} added`))
        } catch (err) {
            dispatch(showError('title and url required '))
            console.error(err.message)
        }
    }
}
export const increaseLike = (blog) => {
    const newObj = {
        ...blog,
        user: blog.user.id,
        likes: blog.likes + 1
    }
    return async dispatch => {
        const response = await blogsService.update(blog.id, newObj)
        dispatch(addLike(response))
    }
}
export const removeBlog = ({id, title}) => {
    return async dispatch => {
        await blogsService.remove(id)
        dispatch(deleteBlog(id))
        dispatch(showNote(`'${title}' was deleted`))
    }
}
export default blogsSlice.reducer