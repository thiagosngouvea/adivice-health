import React, { useState, useEffect, useContext } from "react";
import { Table } from "reactstrap";
import { GlobalContext } from "@/context/GlobalContext";
import { handleGet as getConsultas } from "@/pages/api/consultas";

export default function ConsultarAgendamentos(){
  const { consultas, setConsultas } = useContext(GlobalContext);
  const { updateConsultas, setUpdateConsultas } = useContext(GlobalContext);

  useEffect(() => {
    const fetchData = async () => {
        const response = await getConsultas();
        setConsultas(response.data);
        setUpdateConsultas(false);
    };
    fetchData();
}, [updateConsultas]);

  return (
    <div>
      <h3 className="text-dark text-center my-4">Agendamentos</h3>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Nome do Paciente</th>
            <th>Principal Queixa</th>
            <th>Médico</th>
            <th>Data do Agendamento</th>
            <th>Valor da Consulta</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {consultas.map((agendamento) => (
            <tr key={agendamento.id}>
              <td>{agendamento.nomePaciente}</td>
              <td>{agendamento.queixaPrincipal}</td>
              <td>{agendamento.medico}</td>
              <td>{agendamento.dataConsulta} {agendamento.horaConsulta}</td>
              <td>R$ {agendamento.valorConsulta}</td>
              <td>{agendamento.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
