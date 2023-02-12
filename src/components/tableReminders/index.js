import React from "react";
import { Table, Container } from "react-bootstrap";

export function TableReminders() {
  const reminders = [
    { id: 1, type: "Aviso", description: "Reunião de equipe às 10h" },
    { id: 2, type: "Lembrete", description: "Comprar pão na volta para casa" },
    { id: 3, type: "Aviso", description: "Enviar relatório para o chefe até as 17h" },
    { id: 4, type: "Lembrete", description: "Ligar para a mãe às 19h" },
  ];

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Tipo</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {reminders.map((reminder) => (
            <tr key={reminder.id}>
              <td>{reminder.id}</td>
              <td>{reminder.type}</td>
              <td>{reminder.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};