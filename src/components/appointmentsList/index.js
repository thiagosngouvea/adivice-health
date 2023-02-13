import React from "react";
import { ListGroup, Card, Container, Row, Col } from "react-bootstrap";

export function AppointmentList({ appointments }) {

  return (
    <Container>
      <ListGroup style={{ height: "300px", overflowY: "scroll" }}>
        {appointments.map((appointment) => (
          <ListGroup.Item key={appointment.id}>
            <Card>
              <Card.Body
                className="bg-light border-0"
              >
                <Row>
                  <Col xs={8}>
                    <Row>
                      <Col xs={6}>
                        <Card.Title>{appointment.nomePaciente}</Card.Title>
                      </Col>
                      <Col xs={6}>
                        <Card.Title>Médico: {appointment.medico}</Card.Title>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6}>
                        <Card.Subtitle>{appointment.idade} anos</Card.Subtitle>
                      </Col>
                      <Col xs={6}>
                        <Card.Subtitle>Data: {appointment.dataConsulta} {appointment.horaConsulta}</Card.Subtitle>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6}>
                        <Card.Text>{appointment.queixaPrincipal}</Card.Text>
                      </Col>
                      <Col xs={6}>
                        <Card.Text>{appointment.status}</Card.Text>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={4}>
                    <Card.Title 
                      style={{ 
                        justifyContent: "center", 
                        alignItems: "center", 
                        display: "flex" ,
                      }}>Valor da Consulta</Card.Title>
                    <Card.Title 
                      style={{ 
                        justifyContent: "center", 
                        alignItems: "center", 
                        display: "flex" ,
                        color: "#28a745",
                      }}>R$ {appointment.valorConsulta}</Card.Title>
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