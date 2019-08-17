import React,{useEffect,useContext,Fragment} from 'react';
import Spinner from '../layouts/spinnerComponent';
import Repos from '../repos/reposComponent';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const UserDetails = ( {match}) => {    

    const githubContext = useContext(GithubContext);
    const {user,loading,repos, getUserDetails,getRepos} = githubContext;

        useEffect(() => {
            getUserDetails(match.params.login);
            getRepos(match.params.login);
        },[ getRepos,getUserDetails,match.params.login]);

        const { 
            name,
            avatar_url,
            location,
            bio,
            login,
            html_url,
            followers,
            following,
            public_repos,
            hireable } = user;

        if (loading) return <Spinner />

        return (
            <Fragment>              
                <div className="row">
                   <div className="col-md-12">
                        <Link className="btn btn-info btn-sm" to="/">Back To Search</Link>
                        <h4 className="text-info">Hireable: { hireable ? 'Available ' : 'Not Available'}</h4>
                        <div className="col-md-12" >
                            <img className="card-img-top" src={avatar_url} alt="Card" />
                            <div className="card-body">
                                <h5 className="card -title">{name}</h5>
                                <h6 className="card-title">{login}</h6>
                                <p className="card-text">Location: {location}</p>
                                <p className="card-text">{bio && (
                                    <Fragment>
                                          <h4>Bio</h4>
                                          <p>{bio}</p>
                                    </Fragment>
                                )}</p>
                                <a href={html_url} className="btn btn-warning btn-sm">Visit Github Profile</a>
                                <h5>Followers <span class="badge badge-secondary">{ followers }</span></h5>
                                <h5>Following <span class="badge badge-warning">{ following }</span></h5>
                                <h5>Public Repos <span class="badge badge-info">{ public_repos }</span></h5>
                                 
                                 <Repos repos={repos} />
                            </div>
                        </div>
                   </div>
                </div>
             </Fragment>    
       ); 
}


export default UserDetails;