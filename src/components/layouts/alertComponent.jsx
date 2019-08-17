import React,{Fragment,useContext} from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const {alert} = alertContext;

    return (
            <Fragment>
             { alert !== null && (
                <div  className="row"> 
                <div className="col-md-12">
                <div className={`alert alert-${alert.type}`}>
                        <i className="fas fa-info-circle" /> {alert.msg}
                    </div>   
                </div>              
                </div>
              )
             }
          </Fragment>    
        );
}


export default Alert;