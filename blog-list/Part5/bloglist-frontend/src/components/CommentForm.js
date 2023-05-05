import React, {useState} from 'react';

const CommentForm = ({addCommet}) => {
    const [comment, setComment] = useState(null)
    const handleComment = ({target}) => setComment(target.value)
    const createComment = (e) => {
        e.preventDefault()
        addCommet(comment)
    }
    return (
        <div>
            <form onSubmit={createComment}>
                <input
                    type="text"
                    value={comment}
                    onChange={handleComment}
                />
                <button type="submit">
                    add comment
                </button>
            </form>
        </div>
    );
};

export default CommentForm;