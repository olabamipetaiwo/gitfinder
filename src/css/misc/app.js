import React,{useState,useEffect,Fragment} from 'react';
import { BrowserRouter as Router,Switch,Route}  from 'react-router-dom';
import Navbar from './components/layouts/navComponent';
import About from './components/layouts/aboutComponent';
import User from './components/users/userComponent';
import Search from './components/users/searchComponent';
import UserDetails from './components/users/userDetailsComponent'
import Alert from './components/layouts/alertComponent';
import Axios from 'axios';
import './App.css';

const App = () => {

    const [users,setUsers] = useState([]);
    const [user,setUser] = useState({});
    const [repos,setRepos] = useState([]);
    const [loading,setLoading] = useState(false);
    const [found,setFound] = useState(true);
    const [alert,setAlert] = useState(null);


  
    useEffect(() => {
        setLoading(true);
        const GITFINDER_CLIENT_ID = '25897eb3c59731abe370';
        const GITFINDER_CLIENT_SECRET = 'b79525c57e0a959d232869c3d9c8b5b37c6ec06f';
         Axios
          .get(`https://api.github.com/users?client_id=${GITFINDER_CLIENT_ID}&client_secret=${GITFINDER_CLIENT_SECRET}`)
          .then(res => {
               if(res.data.total_count === 0) {
                            setLoading(false);
                            setFound(false);
                        }else {
                            setLoading(false);
                            setFound(true);
                            setUsers(res.data);
                         }
          })
          .catch(err => {
            setLoading(false);
            setFound(false);
          });
    },[]);

//  get single User
   const getUserDetails = async (login) => {
        setLoading(true);
        const GITFINDER_CLIENT_ID = '25897eb3c59731abe370';
        const GITFINDER_CLIENT_SECRET = 'b79525c57e0a959d232869c3d9c8b5b37c6ec06f';
        const res = await Axios.get(`https://api.github.com/users/${login}?client_id=${GITFINDER_CLIENT_ID}&client_secret=${GITFINDER_CLIENT_SECRET}`);
        setLoading(false);
        setUser(res.data);
    }

     const searchUser = async (searchName) => {
        setLoading(true);
        const GITFINDER_CLIENT_ID = '25897eb3c59731abe370';
        const GITFINDER_CLIENT_SECRET = 'b79525c57e0a959d232869c3d9c8b5b37c6ec06f';
        const res = await Axios.get(`https://api.github.com/search/users?q=${searchName}&client_id=${GITFINDER_CLIENT_ID}&client_secret=${GITFINDER_CLIENT_SECRET}`);
       
        if(res.data.total_count === 0) {
             setLoading(false);
             setFound(false);
             setLoading(true);
         const GITFINDER_CLIENT_ID = '25897eb3c59731abe370';
         const GITFINDER_CLIENT_SECRET = 'b79525c57e0a959d232869c3d9c8b5b37c6ec06f';
         Axios
          .get(`https://api.github.com/users?client_id=${GITFINDER_CLIENT_ID}&client_secret=${GITFINDER_CLIENT_SECRET}`)
          .then(res => {
               if(res.data.total_count === 0) {
                            setLoading(false);
                            setFound(false);
                        }else {
                            setLoading(false);
                            setFound(true);
                            setUsers(res.data);
                         }
          })
          .catch(err => { 
            setLoading(false);
            setFound(false);
          });
        }else {
          setLoading(false);
          setUsers(res.data.items)
        }
    }

    const getRepos = async (username) => {
        setLoading(true);
        const GITFINDER_CLIENT_ID = '25897eb3c59731abe370';
        const GITFINDER_CLIENT_SECRET = 'b79525c57e0a959d232869c3d9c8b5b37c6ec06f';
        const res = await Axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${GITFINDER_CLIENT_ID}&client_secret=${GITFINDER_CLIENT_SECRET}`);
        setRepos(res.data);
        setLoading(false);
    }

   const clearUsers = () => {
         setUsers([]);
         setLoading(false);
    }

    const showClear =() => {
        if(users.length > 0) {
            return true;
        }else {
            return false;
        }
    }

    const setAlertMsg = (msg,type) => {
        setAlert({msg,type});
        setTimeout(() => setAlert(null),5000);
    }

 

      return (
         <Router>
              <Fragment>
                    <Navbar title={"GitFinder"} />
                    <div className="container">
                        <Alert alert={alert} />
                        <Switch>
                            <Route exact path="/"  render = {props => (
                                <Fragment>
                                    <Search 
                                    searchUser= {searchUser}  
                                    clearUsers={clearUsers}
                                    showClear= {showClear()} 
                                    setAlert = {setAlertMsg}/>
                                    <User
                                    found={found}
                                    loading={loading}
                                    users={users} />  
                                </Fragment>
                            )} />
                            
                            <Route exact path="/about"  component={About} />
                            <Route exact path="/user/:login" render={props => (
                                <UserDetails 
                                    {...props}
                                    getUserDetails = {getUserDetails}
                                    user ={user}
                                    getRepos = {getRepos}
                                    repos = {repos}
                                    loading={loading} />
                            )} />
                        </Switch>
                                          
                    </div>
                </Fragment>
         </Router>
     );
}



export default App;
