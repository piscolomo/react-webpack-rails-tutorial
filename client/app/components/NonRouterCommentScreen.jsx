import React, { PropTypes } from 'react';
import CommentScreen from './CommentScreen';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as commentsActionCreators from '../actions/commentsActionCreators';

function select(state) {
  // Which part of the Redux global state does our component want to receive as props?
  return { data: state.$$commentsStore };
}

class NonRouterCommentScreen extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
  };

  render() {
    const { dispatch, data } = this.props;
    const actions = bindActionCreators(commentsActionCreators, dispatch);
    return (
      <CommentScreen {...{actions, data}} />
    );
  }
}

// Don't forget to actually use connect!
export default connect(select)(NonRouterCommentScreen);
