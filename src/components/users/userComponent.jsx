import React,{useContext,Fragment} from 'react';
import UserItem from './userItemComponent';
import Spinner from '../layouts/spinnerComponent';
import GithubContext from '../../context/github/githubContext';

const User = () => { 
     const githubContext = useContext(GithubContext);
     const {loading,found,users} = githubContext;
     if(loading) {
            return <Spinner />
        }else {
            if(found) {
                return (
                    <Fragment>
                        
                         {  users.map(user => (
                                <UserItem 
                                    key={user.id}
                                    user={user} 
                                    loading= {loading} />
                         ))}
                     </Fragment>
               );
            }else {
                return (
                    <Fragment>
                    
                    <div className="row">
                        <h2 className="text-danger">No user Found</h2>              
                    </div>
                </Fragment>
                );
            }
           
        }
}


export default User;