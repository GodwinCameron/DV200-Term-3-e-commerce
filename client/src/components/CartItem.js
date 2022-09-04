import axios from "axios";
import React from "react";


const CartItem = (props) => {

    let randZA = Intl.NumberFormat("en-ZA", {
        style: "currency",
        currency: "ZAR",
    });
    // {randZA.format(totalCost)}

    var overallCost = props.amount * props.price


    const handleRemoveItem = () => {
        axios.delete('http://localhost:5000/api/deleteorder/' + props.orderId)
        .then((res) => {props.editRender(true);});
    }


    return (<>
    <div className="hidden" id="cost">{overallCost}</div>
        <div className="main-cart-item">
            <div className="cart-item-product-name">
                <div onClick={handleRemoveItem} id="deleteIcon" className="cart-item-delete-icon"></div>{props.productName}</div>
            <div className="cart-item-quantity">{props.amount}</div>
            <div id="price" className="cart-item-price">{randZA.format(overallCost)}</div>
        </div>
    </>);
}

export default CartItem;