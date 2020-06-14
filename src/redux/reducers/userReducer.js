import { GET_USERS } from '../actions/types'

import _ from 'lodash'

export default (state = null, action) => {
    /* console.log(action.type) */
    switch (action.type) {
        case GET_USERS:
            /* onsole.log(action.payload) */
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        
        default:
            return state
    }
}