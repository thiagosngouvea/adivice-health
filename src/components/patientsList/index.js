import React from "react";
import { ListGroup, Card, Container, Row } from "react-bootstrap";

export function PatientsList() {
  const patients = [
    { id: 1, name: "João da Silva", age: 32, description: "Paciente com dor de cabeça" },
    { id: 2, name: "Maria Rodrigues", age: 44, description: "Paciente com dor de barriga" },
    { id: 3, name: "Pedro Alves", age: 38, description: "Paciente com dor nas costas" },
    { id: 4, name: "Ana Paula", age: 27, description: "Paciente com dor de garganta" },
  ];

  return (
    <Container>
      <ListGroup style={{ height: "300px", overflowY: "scroll" }}>
        {patients.map((patient) => (
          <ListGroup.Item key={patient.id}>
            <Card>
              <Card.Body>
                <Card.Title>{patient.name}</Card.Title>
                <Card.Subtitle>{patient.age} anos</Card.Subtitle>
                <Card.Text>{patient.description}</Card.Text>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};