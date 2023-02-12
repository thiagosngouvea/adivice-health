import React from "react";
import { NavbarLayout } from "@/components/navbar";
import { Container, Row, Col } from "react-bootstrap";
import { Sidebar } from "@/components/sidebar";


export default function Layout ({ children }) {
    return (
        <Container fluid={true}>
            <Row>
                <NavbarLayout />
            </Row>
            <Row>
                <Col xs={2}>
                    <Sidebar />
                </Col>
                <Col xs={10}>
                    <div>{children}</div>
                </Col>
            </Row>
        </Container>
    );
}