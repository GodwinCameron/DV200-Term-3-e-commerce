import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Card = () => {

    return (<>
        <Link to='/IndividualProduct'>
            <div className="main-card">
                <div className="card-block-style card-block-style-top"></div>
                <div className="card-border-style">
                    <div className="card-block-style-right-top-tip"></div>
                    <div className="card-block-style-right"></div>
                    <div className="card-block-style-right-bottom-tip"></div>
                    <div className="card-product-image">
                        <div className="card-product-style"></div>
                        <div className="card-product-style-bottom"></div>
                    </div>
                    <div className="card-block-style-left-top-tip"></div>
                    <div className="card-block-style-left"></div>
                    <div className="card-block-style-left-bottom-tip"></div>
                    <h6>R699.99</h6>
                    <p className="card-product-name">League of Legends T-Shirt</p>
                    <p className="card-product-stock">In Stock Now!</p>

                </div>
                <div className="card-block-style card-block-style-bottom"></div>
            </div>
        </Link>
    </>)
}

export default Card;