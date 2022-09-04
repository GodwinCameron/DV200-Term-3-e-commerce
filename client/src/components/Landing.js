import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card";
import Cart from "./Cart";
import Navigation from "./Navigation";

const Landing = () => {

    let randZA = Intl.NumberFormat("en-ZA", {
        style: "currency",
        currency: "ZAR",
    });
    // {randZA.format(totalCost)}

    const [product, setProducts] = useState();
    const [updateProducts, setUpdateProducts] = useState(false);


    useEffect(() => {

        axios.get('http://localhost:5000/api/allproducts')
            .then(res => {
                let productData = res.data
                let renderProducts = productData.map((item) =>
                    <Card key={item._id}
                        productId={item._id}
                        productName={item.productName}
                        inStock={item.inStock}
                        size={item.variations.size}
                        colour={item.variations.colour}
                        price={item.price}
                        date={item.date}
                        editRender={setUpdateProducts} />)

                setProducts(renderProducts);
                setUpdateProducts(false);
            })
            .catch(err => console.log(err));

    }, [updateProducts])





    const newItems = () => {

        var elms = document.querySelectorAll("[id='date']");

        for (var i = 0; i < elms.length; i++) {
            var dateText = elms[i].innerText
            if (dateText.includes('2022-09-04')) {
            } else {
                elms[i].parentElement.style.display = "none";
            }
        }

        var elms = document.querySelectorAll("[id='new-indicator']");

        for (var i = 0; i < elms.length; i++) {
            elms[i].textContent = " - NEW!"
        }
    }






    const [modalArea, setModal] = useState();


    const cart = () => {
        setModal(<Cart
            close={setModal}
        />);
    }







    return (
        <>
            <Navigation />
            <div className="page-content">
                <div onMouseEnter={newItems} className="main">
                    <div className="main-background-filter">
                        <h1 className="heading-text">Welcome, to the League of Influence Store!</h1>
                        <h4 className="sub-heading-text">All the League of Legends merch you could ever ask for, all in one place!</h4>
                        <p className="prologue">League of Influence Store, is a store heavily inspired by Riot's 2009 League Of Legends©.
                            <br />
                            Hi! I'm Cameron, a second year at Open Window Institute! This webapp marks the third major project for the year
                            and let me say, its been a wild one!
                            <br />
                            Between this term and last term alone, the sheer amount I've learnt is
                            astonisihing. Although, somethings haven't gone quite as planned...
                            <br />
                            Last term was an utter nightmare, and whilst this one was substationally better for me, I'm sure hoping that
                            the excess effort I've put into the styling can carry this mark up!
                            <br />
                            <br />
                            And with all that out of the way, please enjoy your look around my best and most proudest project so far! Definitely
                            one for the books!
                        </p>
                    </div>
                </div>
                <h5 className="heading-text text-postioning">New Items:</h5>
                <div className="scroll-horizontal">
                    {product}
                    {modalArea}
                </div>
                <br />
                <br />
                <br />
                <h5 className="heading-text text-postioning">Items On Sale:</h5>
                <br />
                <div className="scroll-horizontal">
                    {product}
                </div>
                <div onClick={cart}>
                    <div className="cart-tab">
                        <div className="cart-bumper"></div>
                        <div className="cart-icon start"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing;