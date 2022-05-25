import React, { Component } from 'react'



class Methods extends Component {
    state = {
        items: [
            {id:1, name: "Noon", age:2 , count: 4},
            {id:2,name:"Rab", age:"33",count: 5},
            {id:3,name:"Hussein",age:"35",count: 6},
            {id:4,name:"Noon",age:"1",count: 7},
            {id:5,title:"Items",name:"Rab",age:33,count:'1'},
            {id:6,title:"Items",name:"Hussein",age:35,count:2},
            {id:7,title:"Items",name:"Noon",age:1,count:3}

    ]
    }
    /*After app running 1-constructor will load 
    2-render method
    3-componentDidMount
    4-componentDidUpdate with 2 parameters (prevProps,prevState)*/
    // constructor() {
    //     super();
    //     console.log('constructor')
    // }

    // componentDidMount() {
    //     console.log('componentDidMount')
    // }

    // // working only if changes happened on porps or state
    // componentDidUpdate(prevProps, prevState) {
    //     console.log('componentDidMount',prevProps,prevState)
    // }

    //Create func to Add new data to state
    handleAdd = (e) => {
        e.preventDefault();
        //to put any random id
        let rand = (Math.random() * 100).toFixed(0);
        //call all state
        let items = this.state.items;
        console.log(items)
        //push new item to state list
        items.push({id:rand, name: "Noon", age:2 , count: 4});
        //update state after adding new item
        this.setState
        ({items: items})
        console.log("This item has been Add")
    }

        //Create func to Add new data to state
        handleDelete = (e) => {
            e.preventDefault();
            this.setState
            ({items:[{id:7, name: "Noon", age:2 , count: 8}]})
            console.log("This item has been deleted : ")

        }


    render() {
        const {items} = this.state
        console.log(items)
        const itemMap = items.map(item => {
            //WRITE IF...ELSE CONDITION USING ? : / if = ?  / else-not = :
            return (
                <div className="item" key={item.id}>
                <span>{item.id}</span>
                <span>{item.title}</span>
                <span>{item.name}</span>
                <span>{item.age}</span>
                <span>{item.count}</span>
            </div>
            )
        })
        //WRITE IF...ELSE CONDITION USING ? : / if = ?  / else-not = :
        return (
            <div>
                Hello React
                <button onClick={this.handleAdd}>Add</button>
                <span>{itemMap}</span>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}

export default Methods;