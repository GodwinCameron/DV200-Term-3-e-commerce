import React from "react";
import { Container, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Landing from "./Landing";


const Login = () =>{
    return(
        <>
        <div className="main-login-content">
            <div>
                <div className="login-forum">
                    <div className="login-input-area">
                        <input id="username" className="login-input login-name" placeholder="Username"></input>
                        <input type='password' id="password" className="login-input login-name" placeholder="Pasword"></input>
                    </div>
                </div>
                <Link to='/Landing'><div className="login-button">LOGIN</div></Link>
            </div>
        </div>
        </>
    );
}

export default Login;