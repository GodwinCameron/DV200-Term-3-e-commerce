import React from "react";
import Card from "./Card";
import Navigation from "./Navigation";

const Landing = () => {
    return(
        <>
            <Navigation/>
            <div className="page-content">
                <div className="main"></div>
                <div className="card-holder">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </>
    )
}

export default Landing;