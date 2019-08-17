import React,{Fragment,useState,useContext} from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
    //importing needed context 
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    //destructuring context
    const {users,clearUsers,showClear,searchUser} = githubContext;
    const {setAlert} = alertContext;

    const [searchName,setSearchName] = useState('');
    

    const  [style] = useState({
        backgroundColor:"#f2f0eb",
        padding:"12px",
        borderRadius:"5px",
        display:"block",
        marginBottom:"10px"
    });

   const handleChange = (e) => {
         setSearchName(e.target.value); 
    }

    const handleSubmit =(e) => {
        e.preventDefault();
        if(searchName === '') {
             setAlert('Input Field cannot be empty','danger');
        }else {
            searchUser(searchName);
            setSearchName(''); 
        }
    }
        return (
            <Fragment>
                <div  style={style} className="row">
                    <form onSubmit={handleSubmit} >
                        <div className="form-group">
                            <input 
                                type="text"
                                name="searchName" 
                                onChange={handleChange}
                                className="form-control" 
                                value={searchName}
                                placeholder="Git user here" />
                        </div>                        
                        <button type="submit"  className="btn btn-block btn-sm btn-success">Search</button>
                    </form>
                    
                    { users.length > 0 && (
                         <button 
                            onClick={clearUsers} 
                            className="btn btn-light btn-block btn-block">Clear User
                         </button>
                    )}
                  
                </div>
             </Fragment>    
       ); 

}

export default Search;