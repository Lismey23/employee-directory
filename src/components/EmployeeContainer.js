import React from 'react';
import Card from './Card'

class EmployeeContainer extends React.Component {

    state = {
        alphabetical:true,
        ascending:true,
        sortedEmployees: [],
        employees: []
    }

    componentDidMount() {
        if (this.state.sortedEmployees.length < 1) {
            this.setState({
                sortedEmployees: this.props.empList
            })
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.empList !== prevProps.empList){
            this.setState({sortedEmployees: this.props.empList})
        }
    }

    sortName = () =>{
        let sortEmployees = [];
        if(this.state.alphabetical){
            sortEmployees = this.props.empList.srot((a, b) => {
                var nameA = a.name.last.toLowerCase(), nameB = b.name.last.toLowerCase();

                if(nameA < nameB) 
                    return -1
                
                if (nameA < nameB)
                    return 1
                return 0

            })
        }
        this.setState({
            alphabetical: !this.state.alphabetical,
            sortedEmployees: sortEmployees
        })
    }

    render() {
        return(

            <div>
            <div className="header">
                <div>Photo</div>
                <div><p onClick={this.sortName} className="name">Name</p> </div>
                <div>Gender</div>
                <div>Phone</div>
                <div>E-mail</div>
            </div>

            {
                this.state.sortedEmployees.length > 0 && 
                this.state.sortedEmployees.map((item, index) => (
                    < Card
                    image={item.picture.large}
                    first={item.name.first}
                    last = {item.name.last} 
                    title={item.name.title}
                    gender={item.gender}
                    age={item.dob.age}
                    phone={item.cell}
                    email={item.email}
                    />
                ))
            }

            </div>



        );
    }
}

export default EmployeeContainer