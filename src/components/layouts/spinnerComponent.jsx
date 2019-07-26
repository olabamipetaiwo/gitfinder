import React,{Component,Fragment} from 'react';
import spinner from './img/spinner.gif';

class Spinner extends Component {

    render() { 
        const spinnerStyle = {
            width:"200px",
            margin:"auto",
            display:"block"
        };

        return (
            <Fragment>
                 <img src={spinner} style={spinnerStyle} alt="spinner" />
             </Fragment>
          
       );
    }

}


export default Spinner;