import React from "react";
import Navigation from "./Navigation";

const IndividualProduct = () =>{
    return(<>
    <Navigation/>
    <div className="main-product-content">
        <div className="product-head">
            <div className="product-pictures"></div>
            <div className="product-info-section">
                <div className="product-info">
                    Product name
                    <br/>
                    <h2>R000.00</h2>
                </div>
                <div className="product-quantity-selector-section">
                    <div className="product-quantity-button product-quantity-minus"><h2>-</h2></div>
                    <div><h3 className="quantity-number">1</h3></div>
                    <div className="product-quantity-button product-quantity-plus"><h2>+</h2></div>
                </div>
            </div>
        </div>
        <h4>Related Products:</h4>
    </div>
    </>)
}

export default IndividualProduct;