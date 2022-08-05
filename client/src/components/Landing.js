import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card";
import Navigation from "./Navigation";

const Landing = () => {
    return(
        <>
            <Navigation/>
            <div className="page-content">
                <div className="main">
                    <div className="main-background-filter">
                        <h1 className="heading-text">Welcome, to the League of Influence Store!</h1>
                        <h4 className="sub-heading-text">All the League of Legends merch you could ever ask for, all in one place!</h4>
                    </div>
                </div>
                <Container>
                <h5 className="heading-text">New Items:</h5>
                    <Row>
                        <Col md={2}>
                            <Card/>
                        </Col>
                        <Col md={2}>
                            <Card/>
                        </Col>
                        <Col md={2}>
                            <Card/>
                        </Col>
                        <Col md={2}>
                            <Card/>
                        </Col> 
                        <Col md={2}>
                            <Card/>
                        </Col> 
                        <Col md={2}>
                            <Card/>
                        </Col>                      
                    </Row>
                </Container>
                <br/>
                <br/>
                <br/>
                <Container>
                <h5 className="heading-text">Items On Sale:</h5>
                    <Row>
                        <Col md={2}>
                            <Card/>
                        </Col>
                        <Col md={2}>
                            <Card/>
                        </Col>
                        <Col md={2}>
                            <Card/>
                        </Col>
                        <Col md={2}>
                            <Card/>
                        </Col> 
                        <Col md={2}>
                            <Card/>
                        </Col> 
                        <Col md={2}>
                            <Card/>
                        </Col>                      
                    </Row>
                </Container>
                {/* <div className="card-holder">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div> */}
            </div>
        </>
    )
}

export default Landing;