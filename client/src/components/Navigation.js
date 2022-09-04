import React from "react";
import { Link } from "react-router-dom";

const Navigation = () =>{

    
    const randNum = Math.floor(Math.random() * 24 ) + 1
    if (randNum == 1){
        var iconName = "nav-logo one";
    } else if (randNum == 2){
        var iconName = "nav-logo two";
    }else if (randNum == 3){
        var iconName = "nav-logo three";
    }else if (randNum == 4){
        var iconName = "nav-logo four";
    }else if (randNum == 5){
        var iconName = "nav-logo five";
    }else if (randNum == 6){
        var iconName = "nav-logo six";
    }else if (randNum == 7){
        var iconName = "nav-logo seven";
    }else if (randNum == 8){
        var iconName = "nav-logo eight";
    }else if (randNum == 9){
        var iconName = "nav-logo nine";
    }else if (randNum == 10){
        var iconName = "nav-logo ten";
    }else if (randNum == 11){
        var iconName = "nav-logo eleven";
    }else if (randNum == 12){
        var iconName = "nav-logo twelve";
    }else if (randNum == 13){
        var iconName = "nav-logo thirteen";
    }else if (randNum == 14){
        var iconName = "nav-logo fourteen";
    }else if (randNum == 15){
        var iconName = "nav-logo fifteen";
    }else if (randNum == 16){
        var iconName = "nav-logo sixteen";
    }else if (randNum == 17){
        var iconName = "nav-logo seventeen";
    }else if (randNum == 18){
        var iconName = "nav-logo eighteen";
    }else if (randNum == 19){
        var iconName = "nav-logo nineteen";
    }else if (randNum == 20){
        var iconName = "nav-logo twenty";
    }else if (randNum == 21){
        var iconName = "nav-logo twentyone";
    }else if (randNum == 22){
        var iconName = "nav-logo twentytwo";
    }else if (randNum == 23){
        var iconName = "nav-logo twentythree";
    }else if (randNum == 24){
        var iconName = "nav-logo twentyfour";
    }else {
        var iconName = "nav-logo twentyone";
    }

    return(<>
    <div className="main-navigation-bar">
        <div className={iconName}></div>
        <Link to='/Login'><div className="nav-icon logout"></div></Link>
        <Link to='/Store'><div className="nav-icon store"></div></Link>
        <Link to='/'><div className="nav-icon home"></div></Link>
    </div>
    </>)
}

export default Navigation;