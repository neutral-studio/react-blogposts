import { GET_USERS } from './types'

import jsonPlaceHolder from '../../api/jsonPlaceHolder'

export default () => async dispatch => {
    await jsonPlaceHolder
            .get('/users')
            .then(({ data }) => {
                dispatch ({ type: GET_USERS, payload: data})
            })
            .catch(err => alert(err))
}