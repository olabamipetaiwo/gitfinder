import React,{Fragment} from 'react';
import {Link } from 'react-router-dom';

const style= {
    backgroundColor:"#e3e1e1",
    padding:"12px",
    borderRadius:"5px",
    display:"block",
    marginBottom:"5px"
};

// const imgStyle = {
//     width:"100px",
//     height:"100px",
//     borderRadius:"50%",
//     margin:"5px 1px"
// }

const UserItem = (props) => {

        const {login,avatar_url } = props.user;
        return (
            <Fragment>
                <div  style={style} className="row">
                    <h2 className="text-primary">{login}</h2>
                    {/* <img src={avatar_url} style={imgStyle} className="img-responsive" alt={login} /> */}
                    <h3 className="text-primary">Image Link: {avatar_url}</h3>
                    <Link to={`/user/${login}`} className="btn btn-block btn-sm btn-primary">View More</Link>
                </div>
             </Fragment>
       );
}


export default UserItem;