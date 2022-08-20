import React from "react";
import { Link } from "react-router-dom";

const Navigation = () =>{
    return(<>
    <div className="main-navigation-bar">
        <div className="nav-logo"></div>
        <Link to='/Login'><div className="nav-icon"></div></Link>
        <Link to='/Store'><div className="nav-icon"></div></Link>
        <Link to='/'><div className="nav-icon"></div></Link>
    </div>
    </>)
}

export default Navigation;