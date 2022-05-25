import React from 'react'
import { NavLink, Outlet} from 'react-router-dom'
import './nav.css'

const Nav = () => {
    return (
        <div className="nav">
        <div className="container">
            <a className="logo" href="/">Logo</a>
            <ul>
            <li> <NavLink  to="/">Home</NavLink></li>
            <li> <NavLink to="/about">About</NavLink></li>
            <li> <NavLink to="/json">Json Data</NavLink></li>
            <li> <NavLink to="/method">Method</NavLink></li>
            <li> <NavLink to="/items">Items</NavLink></li>
            <li> <NavLink to="/child">Child</NavLink></li>
            </ul>
            </div>
            <Outlet />
        </div>
    )

}

export default Nav;