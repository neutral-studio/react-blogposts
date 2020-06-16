import {
    GET_UTENTE
} from './types';

import jsonPlaceholder from '../../api/jsonPlaceholder';

export default () => async dispatch => {
    await jsonPlaceholder
        .get('/users')
        .then(({
            data
        }) => {
            dispatch({
                type: GET_UTENTE,
                payload: data
            });
        })
        .catch(err => alert(err));
};
