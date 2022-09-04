import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "./Card";
import Cart from "./Cart";
import Navigation from "./Navigation";



const Store = () => {
    const [product, setProducts] = useState();
    const [updateProducts, setUpdateProducts] = useState(false);


    useEffect(() => {

        Axios.get('http://localhost:5000/api/allproducts')
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
                elms[i].textContent = " - NEW!"

            } else {
                
            }
        }
    }


    const [modalArea, setModal] = useState();


    const cart = () => {
        setModal(<Cart
            close={setModal}
        />);
    }



    return (<>
        <Navigation />
        <div onMouseEnter={newItems} className="store-main-content">
            <h5 className="heading-text">Products:</h5>
            <Col>
                {product}
                {modalArea}
                
                <Link to='/Secret'><div className="easter-egg">?</div></Link>
            </Col>
            <div onClick={cart}>
                    <div className="cart-tab">
                        <div className="cart-bumper"></div>
                        <div className="cart-icon start"></div>
                    </div>
                </div>
        </div>
    </>)
}

export default Store;