import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EmployeeTable from './EmployeeTable'


function EmployeeContainer () {
    const [users, setUser] = useState ([])
    const [search, setSearch] = useState("")

    useEffect (() => {
        getRandomUser()
    }, [])

    async function getRandomUser() {
        const result = await axios.get('https://randomuser.me/api/?results=25')
        setUser(result.data.results)
        
    }

    function getSearchResults(){
        const searchedUser = users.filter(user => search.indexOf(user.name.first)> -1 || search.indexOf(user.last)> -1)
        setUser(searchedUser)
    }

    function clearSearch(){
        setSearch('')
        getRandomUser()
    }

    function handleInputChange(event){
        setSearch(event.target.value)
        console.log(event.target.value)
    }

    function handleFormSubmit(event){
        event.preventDefault()
        getSearchResults()
    }

    function sortNumber(){
        console.log('SORTING!!!!')
        const sorted = users.sort( function(item1, item2){
            if(item1.phone < item2.phone){
                return -1
            }
            if (item1.phone > item2.phone){
                return 1
            }
            return 0
        })
        console.log('Sorted List: ', sorted)
        setUser([...sorted])
    }

    return(

        <div className="container" style={{marginTop: "20px", marginBottom: "20px"}}>
        {/* search function */}
        <div className="input-group mb-3 float-center">
            <input value={search} onChange={handleInputChange} type="text" className="form-control" placeholder="Search Employee by Name" aria-label="Recipient's username" aria-describedby="button-addon2"/>
           
            <button onClick={clearSearch} className="btn btn-outline-primary" type="submit" id="button-addon2">Clear Search</button>
            <button onClick={handleFormSubmit} className="btn btn-outline-primary" type="submit" id="button-addon2">Search</button>
        </div>
        <div style={{display: "flex", justifyContent: "center",  margin: "auto", color: "gray"}}>
            <p><small>Employees can be sorted by Phone Number</small></p>
        </div>
        <EmployeeTable list={users} sortNumber={sortNumber}/>
    </div>

    )
}

export default EmployeeContainer;
