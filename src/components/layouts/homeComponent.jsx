import React,{Fragment} from 'react';
import User from '../users/userComponent';
// import Search from '../components/users/searchComponent';
import Search from '../users/searchComponent';


const Home = () => {
    return (
            <Fragment>
                <Search/>
                <User/>  
            </Fragment>   
        );
}


export default Home;