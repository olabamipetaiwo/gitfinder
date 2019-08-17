import React,{Fragment} from 'react';
import { BrowserRouter as Router,Switch,Route}  from 'react-router-dom';
import Navbar from './components/layouts/navComponent';
import About from './components/layouts/aboutComponent';
import NotFound from './components/layouts/notFoundComponent';
import Home from './components/layouts/homeComponent';
import UserDetails from './components/users/userDetailsComponent'
import Alert from './components/layouts/alertComponent';
import './App.css';

//import State
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';


const App = () => { 
    
      return (
          <GithubState>
              <AlertState>
                <Router>
                    <Fragment>
                            <Navbar title={"GitFinder"} />
                            <div className="container">
                                <Alert/>
                                <Switch>
                                    <Route exact path="/" component={Home}/>             
                                    <Route exact path="/about"  component={About} />
                                    <Route exact path="/user/:login"  component={UserDetails} />
                                    <Route component={NotFound} />
                                </Switch>
                                                
                            </div>
                        </Fragment>
                 </Router>
              </AlertState>
          </GithubState>
     );
}



export default App;
