import React from 'react'

const Rout = (props) => {
    console.log(props)
    let test= props.constructor;
    return (
        <div> 
            <h1>Rout</h1>
            <p>{test}</p>
        </div>
    )

}

export default Rout;