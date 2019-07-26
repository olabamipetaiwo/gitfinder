import React,{Component,Fragment} from 'react';

class NavBar extends Component {

    render() { 
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                    <a className="navbar-brand" href="f.com"><i className="glyphicon glyphicon-user"/>{this.props.title}</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="f.com">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="f.com">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="f.com" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="f.com">Action</a>
                            <a className="dropdown-item" href="f.com">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="f.com">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="f.com">Disabled</a>
                        </li>
                        </ul>
                    </div>
                    </nav>

                   
             </Fragment>
          
       );
    }

}


export default NavBar;