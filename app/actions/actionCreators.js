export function incrementLikes(id) {
    return {
        type: 'INCREMENT_LIKES',
        id
    };
}

export function addComment(comment) {
    return {
        type: 'ADD_COMMENT',
        comment
    };
}

export function editComment(id) {
    return {
        type: 'EDIT_COMMENT',
        id
    };
}

export function deleteComment(id) {
    return {
        type: 'DELETE_COMMENT',
        id
    };
}
