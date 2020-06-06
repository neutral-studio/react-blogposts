import { GET_POSTS } from '../actions/types';
import _ from 'lodash';

export default (state = null, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };

    default:
      return state;
  }
};
