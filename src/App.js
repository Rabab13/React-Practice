import React, { Component } from 'react'
import { BrowserRouter, Routes, Route}from 'react-router-dom'
import './App.css';
import Items from './components/Items'
import Methods from './components/Methods'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Json from './components/Json'
import Rout from './components/Rout'
import Column from './components/Column'
import Child from './components/Child'

class App extends Component {

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

  render() {
    return (
      <BrowserRouter>
      <div className="App">   
        <Nav/>
        <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/json" element={<Json />}/>
        <Route path="/method" element={<Methods />}/>
        <Route path="/items" element={<Items />}/>
        <Route path="/:test_params" element={<Rout />}/>
        <Route path="/child" element={<Child />}/>
        </Routes>
        <table>
          <tbody>
          <tr>
            <Column/>
          </tr>
          </tbody>
        </table>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
