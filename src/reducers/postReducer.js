import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
  posts: []
};

const postReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: payload.data
      }
    case NEW_POST:
      return {
        ...state,
        posts: [...state.posts, payload]
      }
    default:
      return state;
  };
};

export default postReducer;