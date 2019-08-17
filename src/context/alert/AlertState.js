import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';

import {
    SET_ALERT_MSG,
    REMOVE_ALERT_MSG
} from '../types';

const AlertState = (props) => {
    const initialState = null;
    const  [state,dispatch] = useReducer(AlertReducer,initialState);
    
    const setAlertMsg = (msg,type) => {
        dispatch({
            type:SET_ALERT_MSG,
            payload: {
                msg:msg,
                type:type
            }
        });
        setTimeout(() => dispatch({
            type:REMOVE_ALERT_MSG
        }),5000);
    }


    return <AlertContext.Provider 
        value = {{
           alert:state,
           setAlert:setAlertMsg
        }}
      >
          {props.children}  
      </AlertContext.Provider>
}

export default AlertState;