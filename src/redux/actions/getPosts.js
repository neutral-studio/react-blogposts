import { GET_POSTS } from './types'

import jsonPlaceHolder from '../../api/jsonPlaceHolder'

/* LE CHIAMATE ASINCRONE DIFFERISCONO DAL FLOW PRINCIPALE DELL'ESECUZIONE DEL PROGRAMMA */
export default () => async dispatch => {
    /* codice del nostro action creator */
    await jsonPlaceHolder
            .get('/posts')
            .then(({ data }) => {
                dispatch({ type: GET_POSTS, payload: data })
            })
            .catch(err => alert(err))


}