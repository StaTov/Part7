import { useState } from "react";
import { useSelector } from "react-redux";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const BlogForm = ({ addBlog }) => {
    const [showForm, setShowForm] = useState(false)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')
    const user = useSelector(state => state.login)
    const handleChangeTitle = ({ target }) => {
        setTitle(target.value)
    }
    const handleChangeAuthor = ({ target }) => {
        setAuthor(target.value)
    }
    const handleChangeUrl = ({ target }) => {
        setUrl(target.value)
    }
    const handleCreateBlog = (e) => {
        e.preventDefault()
        addBlog({ title, author, url })
        setShowForm(!showForm)
        setTitle('')
        setAuthor('')
        setUrl('')
    }
    const toggleForm = () => {
        setShowForm(!showForm)
    }
    if (!user) {
        return null
    }
    if (!showForm) {
        return (
            <Box p={1}>
                <Button
                    variant="outlined"
                    type="button"
                    onClick={toggleForm}>
                    New blog
                </Button>
            </Box>
        )
    }

    return (

        <Box>
            <Typography variant="h5">create new</Typography>
            <Box p={1}>
                <form onSubmit={handleCreateBlog}>
                    <Box mt={1}>
                        <TextField
                            size="small"
                            label="Title"
                            variant="outlined"
                            value={title}
                            onChange={handleChangeTitle}
                        />
                    </Box>
                    <Box mt={1}>
                        <TextField
                            size="small"
                            label="Author"
                            variant="outlined"
                            value={author}
                            onChange={handleChangeAuthor}
                        />
                    </Box>
                    <Box mt={1}>
                        <TextField
                            size="small"
                            label="Url"
                            variant="outlined"
                            value={url}
                            onChange={handleChangeUrl}
                        />
                    </Box>
                    <Box mt={2}>
                        <Button
                            size="small"
                            variant="contained"
                            type="submit">
                            create
                        </Button>
                        <Button
                            size="small"
                            sx={{ ml: 4.5 }}
                            variant="outlined"
                            type="button"
                            onClick={toggleForm}>
                            Cancel
                        </Button>
                    </Box>
                </form>
            </Box>
        </Box>
    )
        ;
};

export default BlogForm;