import React, { useReducer } from 'react';
import Axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
    SEARCH_USER,
    GET_USERS,
    CLEAR_USERS,
    SET_FOUND,
    SET_LOADING,
    GET_USER_DETAILS,
    GET_REPOS
} from '../types';

//if (process.env.NODE_ENV !== 'production') {
    let GITFINDER_CLIENT_ID = '25897eb3c59731abe370';
    let GITFINDER_CLIENT_SECRET = 'b79525c57e0a959d232869c3d9c8b5b37c6ec06f'
// }else {
//     GITFINDER_CLIENT_ID = '25897eb3c59731abe370';
//     GITFINDER_CLIENT_SECRET = 'b79525c57e0a959d232869c3d9c8b5b37c6ec06f'
// }


const GithubState = (props) => {
    const initialState = {
        users: [],
        user:{},
        repos:[],
        loading: false,
        found:false
    }
    const  [state,dispatch] = useReducer(GithubReducer,initialState);

    //Get Users
    const getUsers = async() => {
        setLoading();
        const res = await Axios.get(`https://api.github.com/users?client_id=${GITFINDER_CLIENT_ID}&client_secret=${GITFINDER_CLIENT_SECRET}`)
        dispatch({
              type:SEARCH_USER,
              payload:res.data
        });
    
    }
    
    //Search Users
    const searchUser = async (searchName) => {
        setLoading();
        const res = await Axios.get(`https://api.github.com/search/users?q=${searchName}&client_id=${GITFINDER_CLIENT_ID}&client_secret=${GITFINDER_CLIENT_SECRET}`);
        dispatch({
              type:SEARCH_USER,
              payload:res.data.items
        });
    
    }
 
    //Get User_Details
    const getUserDetails = async (login) => {
        setLoading();
        const res = await Axios.get(`https://api.github.com/users/${login}?client_id=${GITFINDER_CLIENT_ID}&client_secret=${GITFINDER_CLIENT_SECRET}`);
        dispatch({
            type:GET_USER_DETAILS,
            payload:res.data
        });
    }

    //Get Repos
    const getRepos = async (username) => {
        setLoading();
        const res = await Axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${GITFINDER_CLIENT_ID}&client_secret=${GITFINDER_CLIENT_SECRET}`);
        dispatch({
            type:GET_REPOS,
            payload:res.data
        });
    }
    
    

    //Clear Users
    const clearUsers = () => dispatch({
        type:CLEAR_USERS
    });
    
    //Set Loading
    const setLoading = () => dispatch({
        type:SET_LOADING
    });

    //Set Found
    const setFound = () => dispatch({
        type:SET_FOUND
    });

    return <GithubContext.Provider 
        value = {{
            users:state.users,
            user:state.user,
            repos:state.repos,
            loading:state.loading,
            found:state.found,
            clearUsers:state.clearUsers,
            getUsers,
            searchUser,
            getUserDetails,
            getRepos
        }}
      >
          {props.children}  
      </GithubContext.Provider>
}

export default GithubState;