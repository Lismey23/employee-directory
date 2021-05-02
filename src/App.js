import React from "react";
import EmployeeContainer from "./components/EmployeeContainer";
import Header from './components/Header'
import axios from 'axios'




class App extends React.Component {

  state = {
    employees: []
  };

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=20&nat=Aus`)
    .then(res => {
      this.setState({ employees:res.data.results
      })
    });
  }
  render(){
    return (
      <div className="App">
        <Header/>
        
      </div>

    )
  }
}

export default App;
