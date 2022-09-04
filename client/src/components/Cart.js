import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import Navigation from "./Navigation";
import CartItem from "./CartItem";

const Cart = (props) => {

    let randZA = Intl.NumberFormat("en-ZA", {
        style: "currency",
        currency: "ZAR",
    });
    // {randZA.format(totalCost)}


    const [order, setOrders] = useState();
    const [updateOrders, setUpdateOrders] = useState(false);


    useEffect(() => {

        axios.get('http://localhost:5000/api/allorders')
            .then(res => {
                let orderData = res.data
                let renderOrders = orderData.map((item) =>
                    <CartItem key={item._id}
                        orderId={item._id}
                        productName={item.productName}
                        productId={item.productId}
                        price={item.price}
                        amount={item.amount}
                        editRender={setUpdateOrders} />)

                setOrders(renderOrders);
                setUpdateOrders(false);
            })
            .catch(err => console.log(err));

    }, [updateOrders])

    const editCart = () => {

        var elms = document.querySelectorAll("[id='deleteIcon']");

        for (var i = 0; i < elms.length; i++) {
            elms[i].style.display = "inline";
        }
    }

    const [totalCost, setTotalCost] = useState();


    const totalCalculator = () => {
        const subTotal = [];

        var elms = document.querySelectorAll("[id='cost']");
        for (var i = 0; i < elms.length; i++) {
            var addValue = +elms[i].innerText;
            subTotal.push(addValue);
        }

        const total = subTotal.reduce((accumulator, value) => {
            return accumulator + value;
        }, 0);

        setTotalCost(total);
    }


    const closeModal = () => {
        props.close();
      }


    return (<>
        <div onMouseEnter={totalCalculator} className="main-cart">
            <div className="cart-collapse-tab-button-top"></div>
            <div className="cart-collapse-tab-button-center">
                <div className="cart-icon"></div>
                <div onClick={closeModal} className="cart-tab-icon"></div>
            </div>
            <div className="cart-collapse-tab-button-bottom"></div>
            <div className="cart-border-style">
                <div className="cart-title-table">
                    <div className="cart-title-product-name">Product Name</div>
                    <div className="cart-title-product-amount">Qaunt.</div>
                    <div className="cart-title-product-price">Price</div>
                </div>
                <div className="cart-content">
                    {order}
                </div>
                <div className="cart-finish-section">
                    <div className="total-cost">Total : {randZA.format(totalCost)}</div>
                    <div onClick={closeModal}  className="cart-checkout-button">Checkout</div>
                    <div onClick={editCart} className="cart-edit-button">Edit</div>
                </div>
            </div>
        </div>
    </>)
}

export default Cart;