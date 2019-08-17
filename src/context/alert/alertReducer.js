import {
    SET_ALERT_MSG,
    REMOVE_ALERT_MSG
} from '../types';

export default (state,action) => {
    switch(action.type) {
        case SET_ALERT_MSG:
            return {
                ...state,
                alert: action.payload
            }
        case REMOVE_ALERT_MSG:
            return null
        default:
            return state;
    }
}