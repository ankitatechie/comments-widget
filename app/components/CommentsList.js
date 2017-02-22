import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Comment from './Comment';

class CommentsList extends React.Component {
    render() {
      const { comments, nested } = this.props;
      return (
        <div className="comments">
          {comments.map(( comment, index ) =>
            <div key={index} className="comment">
              { nested ? (
                <Comment comments={comment} nestedComment={nested} />
              ) : (
                <Comment comments={comment} />
              )}
              {comment.comments && <CommentsList comments={comment.comments} nested="true" />}
            </div>
          )}
        </div>
      )
    }
};

function mapStateToProps(state) {
    return {
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return {
        incrementLikes: (id) => {
          dispatch(actionCreators.incrementLikes(id));
        }
    };
}

CommentsList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired)
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);
