import { combineReducers } from 'redux';

import postReducer from './postReducer';
import utenteReducer from './utenteReducer';

export default combineReducers({
  posts: postReducer,
  utente: utenteReducer,
});
