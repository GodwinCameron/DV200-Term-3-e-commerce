import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Card = () => {
    return(<>
        <Link to='/IndividualProduct'>
            <div className="main-card">
                <div className="card-product-image"></div>
                <h6>R699.99</h6>
                <p className="card-product-name">League of Legends T-Shirt</p>
                <p className="card-product-stock">In Stock Now!</p>

            </div>
        </Link>
    </>)
}

export default Card;