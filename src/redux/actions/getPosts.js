import { GET_POSTS } from './types';

import jsonPlaceholder from '../../api/jsonPlaceholder';

export default () => async dispatch => {
  await jsonPlaceholder
    .get('/posts')
    .then(({ data }) => {
      dispatch({ type: GET_POSTS, payload: data });
    })
    .catch(err => alert(err));
};
