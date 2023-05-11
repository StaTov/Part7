import {useParams} from "react-router-dom";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {showError} from "../reducers/notificationReducer";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import DeleteIcon from '@mui/icons-material/Delete'
import Paper from "@mui/material/Paper"
import FavoriteIcon from '@mui/icons-material/Favorite';


const Blog = ({
                  blogs,
                  user,
                  handleDeleteBlog,
                  handleLikeAdd,
                  addComment
              }) => {


    const dispatch = useDispatch()
    const [comment, setComment] = useState('')

    const handleComment = ({target}) => setComment(target.value)
    const createComment = (e) => {
        e.preventDefault()
        if (!comment) {
            return dispatch(showError('field <text> is requred'))
        }
        addComment(comment, id)
        setComment('')
    }
    const id = useParams().id
    const blog = blogs.find(blog => blog.id === id)

    if (!blog) {
        return null
    }

    return (
        <Box mt={3}>
            <Paper sx={{pt: 4, pl: 3, pb: 3}} elevation={3}>
                <Typography variant="h4">
                    {blog.title} {blog.author}
                </Typography>
                <div className="secondInfo">
                    <div>
                        <Box sx={{display: "flex", alignItems: "center", mt: 2}}>
                            <Typography variant="body1">
                                likes: {blog.likes}
                            </Typography>
                            <Button sx={{ml: 3}}
                                size="small"
                                variant="outlined"
                                startIcon={<FavoriteIcon/>}
                                onClick={() => handleLikeAdd(blog)}
                            > like
                            </Button>
                        </Box>
                        <Typography variant="caption">
                           <em> added by: {blog.user[0].username}</em>
                        </Typography>
                        <div>URL:<a href={`${blog.url}`}>{blog.url}</a></div>
                        <div>{blog.user[0].username === user.username &&
                            <Button
                                type="button"
                                variant="outlined"
                                startIcon={<DeleteIcon/>}
                                onClick={() => handleDeleteBlog(blog, user)}>
                                remove
                            </Button>}
                        </div>
                        <Box>
                            <h3>comments</h3>
                            <div>
                                <form onSubmit={createComment}>
                                    <input
                                        placeholder="text"
                                        type="text"
                                        value={comment}
                                        onChange={handleComment}
                                    />
                                    <Button
                                        variant="outlined"
                                        type="submit">
                                        add comment
                                    </Button>
                                </form>
                            </div>

                            <ul>
                                {blog.comments.map(item =>

                                    <li key={item.id}>
                                        {item.comment}
                                    </li>
                                )

                                }
                            </ul>

                        </Box>
                    </div>
                </div>
            </Paper>
        </Box>
    )
}

export default Blog