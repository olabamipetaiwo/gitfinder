import React,{Component,Fragment} from 'react';
import { Link }  from 'react-router-dom';

class NavBar extends Component {

    state = {
        style: {
            display:"inline",
            listStyle:"none",
            color:"red"
        }
    } 
    render() { 
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <Link className="navbar-brand" to="/About">About</Link>
                </nav>      
             </Fragment>
          
       );
    }

}


export default NavBar;