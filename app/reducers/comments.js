function comments(state = [], action) {
    const i = action.id;
    switch (action.type) {
        case 'INCREMENT_LIKES':
            return [
                ...state.slice(0, i), //before the one we are updating
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1) //after the one we are updating
            ];
        case 'ADD_COMMENT':
            return [
                ...state,
                {
                    id: state.length + 1,
                    ...action.comment
                }
            ];
        case 'DELETE_COMMENT':
            const commentId = action.commentId;
            return state.filter(pose => comment.id !== commentId);
        default:
            return state;
    }
}

export default comments;