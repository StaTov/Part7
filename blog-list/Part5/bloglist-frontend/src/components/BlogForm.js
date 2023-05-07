import {useState} from "react";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button"
import {useSelector} from "react-redux";

const BlogForm = ({addBlog}) => {
    const [showForm, setShowForm] = useState(false)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')
    const user = useSelector(state => state.login)
    const handleChangeTitle = ({target}) => {
        setTitle(target.value)
    }
    const handleChangeAuthor = ({target}) => {
        setAuthor(target.value)
    }
    const handleChangeUrl = ({target}) => {
        setUrl(target.value)
    }
    const handleCreateBlog = (e) => {
        e.preventDefault()
        addBlog({title, author, url})
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
            <div>
                <Button
                    variant="primary"
                    type="button"
                    onClick={toggleForm}>
                    New blog
                </Button>
            </div>
        )
    }

    return (

        <div>
            <h2>create new</h2>
            <Form onSubmit={handleCreateBlog}>
                <Form.Group className="mb-3" controlId="FormBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        placeholder="title"
                        value={title}
                        onChange={handleChangeTitle}
                        type="text"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="FormBasicAuthor">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                        placeholder="author"
                        value={author}
                        onChange={handleChangeAuthor}
                        type="text"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="FormBasicUrl">
                    <Form.Label>URL</Form.Label>
                    <Form.Control
                        placeholder="url"
                        value={url}
                        onChange={handleChangeUrl}
                        type="text"/>
                </Form.Group>
                <Button variant="primary"
                        type="submit">
                    create
                </Button>
                <Button
                    variant="dark"
                    type="button"
                    onClick={toggleForm}>
                    Cancel
                </Button>
            </Form>
        </div>
    )
        ;
};

export default BlogForm;