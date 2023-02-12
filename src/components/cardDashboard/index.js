import React from "react";
import { Card, Col } from "react-bootstrap";

export function CardDashboard(props) {
  return (
        <Col xs={12} md={4}>
          <Card>
            <Card.Header as="h5">{props.title}</Card.Header>
            <Card.Body>
              <Card.Title>{props.value}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
  );
};
