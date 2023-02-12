import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

export function DoctorsList({ medicos }) {
  return (
    <Container fluid={true}>
      <Row>
        <Col xs={12} className="my-1">
            <ListGroup style={{ height: "300px", overflowY: "scroll" }}>
                {medicos.map((doctor, index) => (
                <Card key={index} className="mb-2">
                    <Card.Body>
                    <Card.Title>{doctor.nome}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        {doctor.especialidade}
                    </Card.Subtitle>
                    </Card.Body>
                    <ListGroup.Item>
                    <b>CRM:</b> {doctor.crm}
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <b>Fone:</b> {doctor.telefone}
                    </ListGroup.Item>
                </Card>
                ))}
            </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};