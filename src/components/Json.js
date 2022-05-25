/*Dealing With Request Using Axios
How to render json from API*/
import React, { Component}from 'react'
import axios from 'axios'
import "./json.css"



class Json extends Component {

    //Create empty state to store json data into it using this.setState
    state = {
        users: []
    }

    //Get json data after page loaded using componentDidMount
    componentDidMount() {
        console.log("this" , this.props)
        //Get the data from the link 
        axios.get('https://jsonplaceholder.typicode.com/users')
        //Then put all the data into the response
        .then(res => {
            console.log("JSON DATA: ", res.data)
            // store new json data into our empty state
            this.setState({users: res.data})
        })
    }
    render() {
        const {users} = this.state
        const userList = users.map(user =>{
            return(
                <div key={user.id}>
                    <div className="content">
                    <div>Name: {user.name}</div>
                    <div>User Name: {user.username}</div>
                    <div>Email: {user.email}</div>
                    <div>Address: {user.address.street} , {user.address.city}, {user.address.suite} , {user.address.zipcode}</div>
                    <div>Geo: {user.address.geo.lat},{user.address.geo.lng}  </div>
                    
                </div>
                </div>
            )
        })
        return (
            <div>
                <h1>Render Json Data</h1>
                <h3>User Name List</h3>
                <div>{userList}</div>
            </div>
        )
    }
}

export default Json;


// yarn add axios: to get json data from api 