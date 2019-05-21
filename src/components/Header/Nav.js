import React, { Component } from 'react'
import  { NavLink } from 'react-router-dom'
import './nav.css'



class Nav extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="main">
                <NavLink className="navLink" to="/">Home</NavLink>
                <NavLink className="navLink" to="/app">APP</NavLink>
                <NavLink className="navLink" to="/counter">Couter</NavLink>
            </div>
         );
    }
}
 
export default Nav;
