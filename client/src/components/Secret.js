import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import Navigation from "./Navigation";

const Secret = () => {

    let randZA = Intl.NumberFormat("en-ZA", {
        style: "currency",
        currency: "ZAR",
    });






    return (<>
        <Navigation />
        <div className="main-product-content">
            <div className="product-head">
                <Col>
                    <div className="secret-picture">
                        <div className="secret-hide"> CLASSIFIED!</div>
                    </div>
                </Col>
                <Col>
                    <h1>GIT-GUD Macro Keyboard</h1>
                    <h4>{randZA.format(10000000000)}</h4>
                    <div className="product-description"> An unfortold, Legendary device, said to enhance the user to become as powerful as the Gods themselves!!!</div>
                    <div className="product-quantity-selector-section">
                        <div id="minusProductQuantity" className="product-quantity-button product-quantity-minus"><h2>-</h2></div>
                        <div className="quantity-number"><h3 id="quantitySelect">x</h3></div>
                        <div id="addProductQuantity" className="product-quantity-button product-quantity-plus"><h2>+</h2></div>
                    </div>
                    <p className="stock-display"><i>Currently UnKnOwN in stock.</i></p>
                    <div id="addToCartButton" className="add-to-cart-button"> Add to cart</div>
                </Col>
            </div>
        </div>
    </>)
}

export default Secret;