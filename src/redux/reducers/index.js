import { combineReducers } from 'redux';

import postReducer from './postReducer';

import autoreReducer from './autoreReducer';

export default combineReducers({
  posts: postReducer,
  autore: autoreReducer
});
