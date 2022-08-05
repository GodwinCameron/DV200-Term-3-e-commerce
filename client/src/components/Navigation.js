import React from "react";
import { Link } from "react-router-dom";

const Navigation = () =>{
    return(<>
    <div className="main-navigation-bar">
        <div className="nav-logo"></div>
        <Link to='/Login'><div className="nav-icon"></div></Link>
        <div className="nav-icon"></div>
        <div className="nav-icon"></div>
    </div>
    </>)
}

export default Navigation;