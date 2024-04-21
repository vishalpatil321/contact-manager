import { NavLink } from "react-router-dom";
import './Navigation.css';
import { useState } from "react";

const Navigation = () => {
    
    return(
    
        <div className="navigation">
        <h2>Contact Manager</h2>
            <NavLink to="/inputFields" className="navlink"><button>Add</button></NavLink>
        </div>
    )
     
};

export default Navigation;