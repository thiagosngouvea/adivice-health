import React, { useState, useEffect, useContext } from "react";
import { Table, Container } from "react-bootstrap";
import { getEventos } from "@/pages/api/eventos";
import { GlobalContext } from "@/context/GlobalContext";

export function TableReminders() {

  const [reminders, setReminders] = useState([]);
  const { updateEventos, setUpdateEventos } = useContext(GlobalContext);

  const buscarEventos = async () => {
    const response = await getEventos();
    setReminders(response.data);
    setUpdateEventos(false);
  };

  useEffect(() => {
    buscarEventos();
  }, [updateEventos]);


  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan="2">Lembretes/Avisos</th>
          </tr>
          <tr>
            <th>Tipo</th>
            <th>Titulo</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {reminders.map((reminder) => (
            <tr key={reminder.id}>
              <td>{reminder.type}</td>
              <td>{reminder.title}</td>
              <td>{reminder.descricao}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};