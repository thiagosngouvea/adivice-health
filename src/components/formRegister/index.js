import React, { useState, useEffect, useContext } from "react";
import { Form, FormGroup, Label, Input, Container, Button, Col, Row } from "reactstrap";
import { handleGet } from "@/pages/api/medicos";
import { handlePost } from "@/pages/api/consultas";
import { GlobalContext } from "@/context/GlobalContext";
import { uuid } from "uuidv4";
import MaskedInput from 'react-input-mask';
import moment from 'moment';

export function RegisterForm() {
  const [value, setValue] = useState(null);
  const [patientCpf, setPatientCpf] = useState("");
  const [bornPatient, setBornPatient] = useState("");
  const [addressPatient, setAddressPatient] = useState("");
  const [age, setAge] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [patientName, setPatientName] = useState("");
  const [mainComplaint, setMainComplaint] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("Agendado");	
  const { doctors, setDoctors } = useContext(GlobalContext);
  const { setUpdateConsultas } = useContext(GlobalContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await handleGet();
      setDoctors(response.data);
    };
    fetchData();
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
        id: uuid(),
        nomePaciente: patientName,
        cpfPaciente: patientCpf,
        dataNascimentoPaciente: bornPatient,
        enderecoPaciente: addressPatient,
        idade: age,
        queixaPrincipal: mainComplaint,
        dataConsulta: moment(date).format("DD/MM/YYYY"),
        horaConsulta: time,
        medico: selectedDoctor,
        status: status,
        valorConsulta: Number(value),
  };
    const response = await handlePost(data);
    if (response.status === 200) {
      alert("Consulta agendada com sucesso!");
      setUpdateConsultas(true);
    }
};

console.log('value',value);


  return (
    <Container>
      <Form onSubmit={handleSubmit}>
      <FormGroup>
          <Label for="patientName">Nome do Paciente</Label>
          <Input
            type="text"
            name="patientName"
            id="patientName"
            placeholder="Digite o nome do paciente"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
            <Label for="date">Data de Nascimento</Label>
            <Input
                type="date"
                name="bornPatient"
                id="bornPatient"
                value={bornPatient}
                onChange={(e) => setBornPatient(e.target.value)}
            />
        </FormGroup>
        <FormGroup>
          <Label for="age">Idade</Label>
          <Input
            type="number"
            name="age"
            id="age"
            placeholder="Digite o valor da consulta"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
            <Label for="patientCpf">CPF do Paciente</Label>
            <MaskedInput
                mask="999.999.999-99"
                type="text"
                name="cpf"
                id="cpf"
                placeholder="Digite seu CPF"
                className="form-control"
                value={patientCpf}
                onChange={(e) => setPatientCpf(e.target.value)}
            />
        </FormGroup>
        <FormGroup>
          <Label for="addressPatient">Endereço do Paciente</Label>
          <Input
            type="text"
            name="addressPatient"
            id="addressPatient"
            placeholder="Digite o nome do paciente"
            value={addressPatient}
            onChange={(e) => setAddressPatient(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="mainComplaint">Principal Queixa</Label>
          <Input
            type="textarea"
            name="mainComplaint"
            id="mainComplaint"
            placeholder="Digite a principal queixa do paciente"
            value={mainComplaint}
            onChange={(e) => setMainComplaint(e.target.value)}
            />
        </FormGroup>
        <FormGroup>
          <Label for="doctor">Selecione o Medico</Label>
          <Input
            type="select"
            name="doctor"
            id="doctor"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
          >
            <option>Selecione o Medico</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.nome}>
                {doctor.nome}
              </option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="value">Valor da Consulta</Label>
          <Input
            type="number"
            name="value"
            id="value"
            placeholder="Digite o valor da consulta"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
            <Label for="date">Data do Agendamento</Label>
            <Input
                type="date"
                name="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="time">Hora do Agendamento</Label>
            <Input
                type="time"
                name="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
            />
        </FormGroup>
        <FormGroup>
          <Label for="doctor">Status</Label>
          <Input
            type="select"
            name="status"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Selecione o Status</option>
            <option value="Agendado">Agendado</option>
            <option value="Em atendimento">Em atendimento</option>
            <option value="Finalizado">Finalizado</option>
            <option value="Cancelado">Cancelado</option>
          </Input>
        </FormGroup>
        <Button type="submit" color="primary">
            Agendar
        </Button>
        </Form>
    </Container>
    );
}


           
