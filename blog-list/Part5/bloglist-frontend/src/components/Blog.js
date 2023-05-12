import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { showInfo } from "../reducers/notificationReducer";
import { showError } from "../reducers/notificationReducer";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import DeleteIcon from '@mui/icons-material/Delete'
import Paper from "@mui/material/Paper"
import FavoriteIcon from '@mui/icons-material/Favorite';
import Link from "@mui/material/Link"
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import { red } from '@mui/material/colors';
import SendIcon from '@mui/icons-material/Send';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Blog = ({
    blogs,
    user,
    deleteBlog,
    likeAdd,
    addComment
}) => {

    const color = red[500];
    const dispatch = useDispatch()
    const [comment, setComment] = useState('')
    const [ratingValue, setRatingValue] = useState(2)
    const id = useParams().id
    const blog = blogs.find(blog => blog.id === id)

    const handleComment = ({ target }) => setComment(target.value)

    const createComment = (e) => {
        e.preventDefault()
        if (!user) {
            dispatch(showInfo('Only authorized users can comment'))
            setComment('')
            return
        }
        if (!comment) {
            return dispatch(showError('field <text> is requred'))
        }
        addComment(comment, id)
        setComment('')
    }
    const handleLikeAdd = (e) => {
        if (!user) {
            dispatch(showInfo('Only authorized users can like'))
            return
        }
        e.preventDefault()
        likeAdd(blog)
    }
    const handleRating = (e) => {
        if (!user) {
            dispatch(showInfo('Only authorized users can vote'))
            return
        }
        setRatingValue(+e.target.value)
    }

    if (!blog) {
        return null
    }

    return (
        <Box mt={3}>
            <Paper sx={{ pt: 4, pl: 3, pb: 3, pr: 3 }} elevation={3}>
                <Typography variant="h4">
                    {blog.title} {blog.author}
                </Typography>
                <Rating sx={{ mt: 1 }}
                    name="simple-controlled"
                    value={ratingValue}
                    onChange={handleRating}
                />
                <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                    <Typography variant="body1">
                        likes: {blog.likes}
                    </Typography>
                    <Button sx={{ ml: 1, color: color }}
                        size="small"
                        variant="outlined"
                        startIcon={<FavoriteIcon />}
                        onClick={handleLikeAdd}
                    > like
                    </Button>
                </Box>
                <Box mt={1}>
                    <Typography variant="body1">
                        source: <Link href={`${blog.url}`} underline="hover">{blog.url}</Link>
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>

                    <Typography variant="caption">
                        <em> added by: {blog.user[0].username}</em>
                    </Typography>

                    {user && blog.user[0].username === user.username &&
                        <Button
                            size="small"
                            type="button"
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                            onClick={() => deleteBlog(blog, user)}>
                            remove
                        </Button>}
                </Box>
            </Paper>
            <Box mt={3} mb={4}>
                <Paper sx={{ pt: 4, pl: 3, pb: 3, pr: 3 }} elevation={3}>
                    <Typography variant="h5">Comments</Typography>
                    <Box>
                        <form onSubmit={createComment}>
                            <Box sx={{ display: "flex", mt: 2, mb: 3 }}>
                                <TextField
                                    id="standard-basic"
                                    label="write here something"
                                    size="small"
                                    multiline
                                    maxRows={4}
                                    value={comment}
                                    onChange={handleComment}
                                />
                                {comment && <Button
                                    sx={{ ml: 1 }}
                                    startIcon={<SendIcon />}
                                    size="large"
                                    variant="contained"
                                    value={comment}
                                    onClick={createComment}
                                >
                                </Button>}
                            </Box>
                        </form>
                    </Box>
                    <Box>

                        {blog.comments.map(item =>
                            <Box key={item.id} sx={{ display: "flex", mt: 1 }}>
                                <AccountCircleIcon sx={{ mr: 1 }} />
                                <Typography variant="body1" >
                                    {item.comment}
                                </Typography>
                            </Box>)
                        }
                    </Box>
                </Paper>
            </Box>
        </Box>
    )
}

export default Blog