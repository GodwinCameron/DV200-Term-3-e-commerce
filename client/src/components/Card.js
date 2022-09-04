import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Card = (props) => {

    const sessionDateId = () => {
        sessionStorage.setItem("productId", props.productId);
    }


    let randZA = Intl.NumberFormat("en-ZA", {
        style: "currency",
        currency: "ZAR",
    });
    // {randZA.format(totalCost)}

    var stockColour = "card-product-stock"
    if (props.inStock >= 15){
        var stockColour = "stock-colour-high";
    } else if (props.inStock <= 15){
        var stockColour = "stock-colour-medium";
    }

    if (props.inStock <= 5){
        var stockColour = "stock-colour-low"
    }

    const date = props.date;

    // if (date.includes('2022-09-04')){
    //     var newItemIndicator = " - NEW!";
    // } else {
    //    var newItemIndicator = "";
    // }

    const randNum = Math.floor(Math.random() * 9 ) + 1
    if (randNum == 1){
        var pic = "card-product-image challenger";
    } else if (randNum == 2){
        var pic = "card-product-image plat";
    }else if (randNum == 3){
        var pic = "card-product-image logo";
    }else if (randNum == 4){
        var pic = "card-product-image quest";
    }else if (randNum == 5){
        var pic = "card-product-image bronze";
    }else if (randNum == 6){
        var pic = "card-product-image diamond";
    }else {
        var pic = "card-product-image";
    }
    


    return (<>
        <Link onClick={sessionDateId} to='/IndividualProduct'>
            <div className="main-card">
                <div id="date" className="hidden">{date}</div>
                <div className="card-block-style card-block-style-top"></div>
                <div className="card-border-style">
                    <div className="card-block-style-right-top-tip"></div>
                    <div className="card-block-style-right"></div>
                    <div className="card-block-style-right-bottom-tip"></div>
                    <div className={pic}>
                        <div className="card-product-style"></div>
                        <div className="card-product-style-bottom"></div>
                    </div>
                    <div className="card-block-style-left-top-tip"></div>
                    <div className="card-block-style-left"></div>
                    <div className="card-block-style-left-bottom-tip"></div>
                    <div id="newItem" className="new-item"><p id="new-indicator"></p></div>
                    <div className="card-block-price"><h6>{randZA.format(props.price)}</h6></div>
                    <p className="card-product-name">{props.productName}</p>
                    <p className={stockColour}>{props.inStock} In Stock Now!</p>

                </div>
                <div className="card-block-style card-block-style-bottom"></div>
            </div>
        </Link>
    </>)
}

export default Card;