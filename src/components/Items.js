import React, { Component } from 'react'
import "./item.css";

class Items extends Component {

    state = {
        userData: [
            {id:1, name: "Noon", age:2 , count: 4},
            {id:2,name:"Rab", age:"33",count: 5},
            {id:3,name:"Hussein",age:"35",count: 6},
            {id:4,name:"Noon",age:"1",count: 7},
            {id:5,title:"userData",name:"Rab",age:33,count:'1'},
            {id:6,title:"userData",name:"Hussein",age:35,count:2},
            {id:7,title:"userData",name:"Noon",age:1,count:3}

    ]
    }

    render() {
        const {userData } = this.state
        console.log(userData)
        // eslint-disable-next-line array-callback-return
        const mapUser = userData.map(item => {
        // if item.count less or equalTo 1 print item 1 and smaller
            // if(item.count <= 1){
        // if item.count bigger then 1 print item 2,3...etc 
        //     if(item.count > 1){
                 // if(item.count > 4){
        //         return (
        //if we no uniq key so we can use math.random key={Math.random() * 10}
        //             <div key={item.id}>
        //                 <div>{item.id}</div>
        //                 <div>{item.title}</div>
        //                 <div>{item.name}</div>
        //                 <div>{item.age}</div>
        //                 <div>{item.count}</div>
        //                 <hr/>
        //             </div>
        //         )
        //     }else{
        //         return (
        //             <div>No Item larger than 4</div>
        //         )
        //     }
        // })

        //WRITE IF...ELSE CONDITION USING ? : / if = ?  / else-not = :
        return item.id >= 1 ? (
            <div className="item" key={item.id}>
            <div>{item.id}</div>
            <div>{item.title}</div>
            <div>{item.name}</div>
            <div>{item.age}</div>
            <div>{item.count}</div>
        </div>
        ) : null
    })
        // const {id, title, name, age} = this.props;
        return (
            <div>
            {mapUser}
            </div>
        )
    }
}

export default Items;