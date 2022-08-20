import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card";
import Navigation from "./Navigation";

const Store = () => {








    return (<>
        <Navigation />
        <div className="store-main-content">
            <h5 className="heading-text">Products:</h5>
            <Container>
                <Row style={{height: '100px'}}>
                    <Card />
                    <Card />

                </Row>
            </Container>
        </div>
    </>)
}

export default Store;