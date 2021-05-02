import React, {Component} from "react";
import axios from 'axios';
import Header from './components/Header'

import EmployeeContainer from "./components/EmployeeContainer";


class App extends Component {

  state = {
    user: [],
    loading: false
  };

  componentDidMount() {
    axios.get(`https://randomuser.me/api/`)
    .then(res => {
      this.setState({ 
        user:res.data.results,
        loading:true
      })
    });
  }
  render(){

    var {user, loading} = this.state

    if(!loading){
      return(
        <div>Loading....</div>
      )
    }
    else{
      return (

        <div className="container App">
        
          <Header />
          <EmployeeContainer />
         
          
        
        
       

        </div>
        
      )
    }
    
}
}

export default App;

