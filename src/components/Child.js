import React , { Component} from 'react';


class Child extends Component {

    state = {
        name:"Rab",
        age: 36
    };

    // Create 1 Event clickHandler
    // .bind(this) instead the arrow = () => { function we must to use one of them
    handelClick = () => {
        console.log(this.state.name)
        console.log(this.state.age)
    }
    //Function to change the state using setState function
    changeState = () => {
        this.setState({
            name:"Rab Ahmed",
            age: 33
    })
    }


    // Create 2 Event clickHandler
    handelDoubleClick = () =>{
        console.log('Double Clicked!')
    }

    // Create 3 Event mouseMoveHandler
    handelMovingMouse = () =>{
        console.log('Moved!')
    }


    render() { 
        return(
            <div>
                Child Component
                <hr/>
                {/* Here will change the name and the age on html by click the button */}
                <span className="changeState">{this.state.name}</span>
                <span className="changeState">{this.state.age}</span>
                <button onClick={this.changeState}>Click Me To Change Name</button>
                <hr/>
                {/* .bind(this) instead the arrow function we have to use one of them*/}
                <button onClick={this.handelClick}>Click Me</button>
                <hr/>
                <button onDoubleClick={this.handelDoubleClick}>Double Click Me</button>
                <hr/>
                <div onMouseMove={this.handelMovingMouse}>Move over me</div>
            </div>
        )
    }
}



export default Child;

