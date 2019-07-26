import React,{Fragment} from 'react';
import UserItem from './userItemComponent';
import Spinner from '../layouts/spinnerComponent';
import PropTypes from 'prop-types';

const User = ({loading,users}) => { 
       // const {loading,users} =this.props; Becauese thsi is a functional component
       // we do not need the aboce line, we import and deconstructure it online 5
        if(loading) {
            return <Spinner />
        }else {
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
        }
}

 User.PropTypes = {
     user:PropTypes.array.isRequired,
     loading:PropTypes.bool.isRequired
 }


export default User;