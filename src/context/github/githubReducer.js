import {
    SEARCH_USER,
    GET_USERS,
    CLEAR_USERS,
    SET_FOUND,
    SET_LOADING,
    GET_USER_DETAILS,
    GET_REPOS
} from '../types';

export default (state,action) => {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading:false
        }
        case SEARCH_USER:
            return {
                ...state,
                users: action.payload,
                loading:false
            }
        case SET_LOADING:
            return {
               ...state,
               loading:true
            }
        case SET_FOUND:
              return {
             ...state,
             found:true 
           }
        case CLEAR_USERS:
            return {
                ...state,
                users:[],
                loading:false
            }
        case GET_USER_DETAILS:
            return {
                ...state,
                user:action.payload,
                loading:false
            }
        case GET_REPOS:
            return {
                ...state,
                repos:action.payload,
                loading:false
            }
        default:
            return state;
    }
}