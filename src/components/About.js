import React , { Component} from 'react'

class About extends Component {

      //Function to print any change or typing into form input by printing e.target.value
      handelChangeOnForm =(e)=>{
        //change the above state using e.target.value will exchange with what you will type into the input
        this.setState({
          name : e.target.value,
          age : e.target.value
          })
          // console.log(e.target.value)
      }
    
      //Create func to handle e.target.value onSubmit
      handleSubmit = (e)=>{
        e.preventDefault();   //to prevent default behavior as refresh the web page if we click send
        //every time will type into input then click submit btn will print into console and render it
        console.log(this.state.name)
      }
    render (){
        const items = this.props
      return (
        <div> 
            <h1>About</h1>
            <p>This About Page</p>
            <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handelChangeOnForm}/>
          <button>Submit</button>
        </form>
        <div>Print: {items.name}</div>
        <hr/>
        <form onSubmit={this.handleSubmit}>
          <select onChange={this.handelChangeOnForm}>
          <option value="value1">value 1</option>
          <option value="value2">value 2</option>
          <option value="value3">value 3</option>
          </select>
          <input type="submit" value="send"/>
        </form>
        <div>Print: {items.name}</div>
        
        <hr/>
        <form onSubmit={this.handleSubmit}>
          <textarea type="text" onChange={this.handelChangeOnForm}/>
          <input type="submit" value="print"/>
        </form>
        <div>Send: {items.age}</div> 
      </div>
    )
    }
}

export default About;