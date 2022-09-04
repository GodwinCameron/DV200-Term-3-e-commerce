import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import Navigation from "./Navigation";

const IndividualProduct = () => {

    let randZA = Intl.NumberFormat("en-ZA", {
        style: "currency",
        currency: "ZAR",
    });


    var productId = sessionStorage.getItem('productId')

    const [productData, setProductData] = useState({
        productName: '',
        price: '',
        inStock: '',
        size: '',
        colour: ''
    });
    useEffect(() => {
        axios.get('http://localhost:5000/api/oneproduct/' + productId)
            .then((res) => {
                let data = res.data;
                setProductData({
                    productName: data.productName,
                    price: data.price,
                    inStock: data.inStock,
                    size: data.variations.size,
                    colour: data.variations.colour,
                })
            });

    }, []);




    var amount = 1;


    const increaseAmount = () => {
        let value = document.getElementById('quantitySelect').textContent;
        if (amount >= productData.inStock - 1) {
            amount = productData.inStock
            document.getElementById('quantitySelect').textContent = amount;
            document.getElementById('addProductQuantity').style.color = "grey";
            document.getElementById('addProductQuantity').style.borderColor = "grey";
            document.getElementById('addProductQuantity').style.backgroundColor = "rgb(2, 9, 24)";
        } else {
            amount = +value + 1;
            document.getElementById('quantitySelect').textContent = amount;
        }
    }
    const decreaseAmount = () => {
        let value = document.getElementById('quantitySelect').textContent;
        if (amount <= 1) {
            amount = 1
        } else {
            amount = +value - 1;
        }
        document.getElementById('quantitySelect').textContent = amount;
    }

    if (amount <= 0) {
        var amount = 0;
        console.log(amount);
    }



    const addToCart = () => {

        let payload = {
            clientInfo: {clientName :"admin-individualProductRoute"},
            productName: productData.productName,
            productId: productId,
            price: +productData.price,
            amount: +amount
        }

        axios.post('http://localhost:5000/api/addorder', payload);
        // setUpdateProducts(true);
    }





    return (<>
        <Navigation />
        <div className="main-product-content">
            <div className="product-head">
                <Col>
                    <div className="product-pictures"></div>
                </Col>
                <Col>
                    <h1>{productData.productName}</h1>
                    <h4>{randZA.format(productData.price)}</h4>
                    <div className="product-description"> This product is awesome and has a lot of cool features that's super dope af and has like 50 followers on instagram so you know its cool and stuff</div>
                    <div className="product-quantity-selector-section">
                        <div onClick={decreaseAmount} id="minusProductQuantity" className="product-quantity-button product-quantity-minus"><h2>-</h2></div>
                        <div className="quantity-number"><h3 id="quantitySelect">{amount}</h3></div>
                        <div onClick={increaseAmount} id="addProductQuantity" className="product-quantity-button product-quantity-plus"><h2>+</h2></div>
                    </div>
                    <p className="stock-display"><i>Currently {productData.inStock} in stock.</i></p>
                    <div onClick={addToCart} id="addToCartButton" className="add-to-cart-button"> Add to cart</div>
                </Col>
            </div>
        </div>
    </>)
}

export default IndividualProduct;