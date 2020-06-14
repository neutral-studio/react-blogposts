import { GET_AUTORE } from './types';

import jsonPlaceholder from '../../api/jsonPlaceholder';

export default () => async dispatch => {
    await jsonPlaceholder
    .get('/users')
    .then(({data}) =>{
        dispatch({type: GET_AUTORE, payload: data});
    })
    .catch(err => alert(err));
};