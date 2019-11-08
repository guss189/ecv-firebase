import AppConstants from '../../app/app.constants';

const INITIAL_STATE = {
  posts: [],
}

function postsReducer(state = INITIAL_STATE, action){
  switch (action.type) {
    case AppConstants.ACTIONS.SET_POSTS_LIST:
      return {
        ...state,
        posts: action.payload.posts,
      };
      break;
    default:
      return state;
  }
}

export default postsReducer;
