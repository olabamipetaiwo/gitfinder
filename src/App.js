import React,{Component,Fragment} from 'react';
import Navbar from './components/layouts/navComponent';
import User from './components/users/userComponent';
import Axios from 'axios';
import './App.css';

class App extends Component {

   async componentDidMount()   {
    this.setState({
        loading:true
    });
    let res = await Axios.get("https://api.github.com/users");
    this.setState({
        loading:false,
        users:res.data
    });
            //   .then(res => {
            //       console.log("componet did mount succesfully");
            //       res.data.map(userObj => {
            //          return console.log(userObj.login)
            //       });
            //       console.log(res.data[0].login)
            //   });
            //   .catch(err => console.log(res.err));
    }

    state = {
        users: [],
        loading: false
    };

  render() { 
      const {loading,users} =this.state;
      return (
          <Fragment>
              <Navbar title={"GitFinder"} />
              <div className="container">
                    <User
                     loading={loading}
                     users={users} />                
              </div>
          </Fragment>
     );
  }

}



export default App;
