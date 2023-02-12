import React from "react";
import { ListGroup, Card, Container, Row, Col } from "react-bootstrap";

export function PatientsList({ patients }) {

  return (
    <Container>
      <ListGroup style={{ height: "300px", overflowY: "scroll" }}>
        {patients.map((patient) => (
          <ListGroup.Item key={patient.id}>
            <Card>
              <Card.Body>
                <Row>
                  <Col xs={5}>
                    <Card.Title>{patient.nome}</Card.Title>
                  </Col>
                  <Col xs={5}>
                    <Card.Title>Médico: {patient.medico}</Card.Title>
                  </Col>
                </Row>
                <Row>
                  <Col xs={5}>
                    <Card.Subtitle>{patient.idade} anos</Card.Subtitle>
                  </Col>
                  <Col xs={5}>
                    <Card.Subtitle>Data: {patient.dataConsulta} {patient.horaConsulta}</Card.Subtitle>
                  </Col>
                </Row>
                <Row>
                  <Col xs={5}>
                    <Card.Text>{patient.queixaPrincipal}</Card.Text>
                  </Col>
                  <Col xs={5}>
                    <Card.Text>{patient.classificacao}</Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};