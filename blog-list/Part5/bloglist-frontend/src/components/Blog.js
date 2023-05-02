import {useParams} from "react-router-dom";


const Blog = ({blogs, user, handleDeleteBlog, handleLikeAdd}) => {

    const blogStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
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
                    <div>URL:<a href="">{blog.url}</a></div>
                    <div>likes: {blog.likes}
                        <button
                            type="button"
                            onClick={() => handleLikeAdd(blog)}
                        >like
                        </button>
                    </div>
                    <div>
                        added by: {blog.user[0].name}
                    </div>
                    <div>{blog.user[0].username === user.username &&
                        <button
                            type="submit"
                            onClick={() => handleDeleteBlog(blog, user)}>
                            remove
                        </button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog