import {useParams} from "react-router-dom";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {showError} from "../reducers/notificationReducer";
import {Button} from "react-bootstrap";


const Blog = ({
                  blogs,
                  user,
                  handleDeleteBlog,
                  handleLikeAdd,
                  addComment
}) => {

    const blogStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
    }
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
        <div className="blog" style={blogStyle}>
            <div className="firstInfo">
                <h2>
                    {blog.title} {blog.author}
                </h2>
            </div>
            <div className="secondInfo">
                <div>

                    <div>likes: {blog.likes}
                        <Button
                            type="button"
                            onClick={() => handleLikeAdd(blog)}
                        >like
                        </Button>
                    </div>
                    <div>
                        added by: {blog.user[0].username}
                         </div>
                    <div>URL:<a href={`${blog.url}`}>{blog.url}</a></div>
                    <div>{blog.user[0].username === user.username &&
                        <Button
                            type="submit"
                            onClick={() => handleDeleteBlog(blog, user)}>
                            remove
                        </Button>}
                    </div>
                    <div>
                        <h3>comments</h3>
                        <div>
                            <form onSubmit={createComment}>
                                <input
                                    placeholder="text"
                                    type="text"
                                    value={comment}
                                    onChange={handleComment}
                                />
                                <Button type="submit">
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog