import React, { PropTypes } from 'react';

const Comment = ({comments, nestedComment}) => {
    return (
        <div className={nestedComment ? 'nested-commnet' : ''}>
            {comments.name},
            {comments.summary}
        </div>
    )
}

export default Comment;