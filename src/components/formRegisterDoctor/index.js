import React, { useState, useEffect, useContext } from "react";
import { Form, FormGroup, Label, Input, Container, Button, Col, Row } from "reactstrap";
import { handleGet, cadastrarMedicos } from "@/pages/api/medicos";
import { GlobalContext } from "@/context/GlobalContext";
import { uuid } from "uuidv4";
import MaskedInput from 'react-input-mask';
import moment from 'moment';

export function RegisterFormDoctor() {
    const [nome, setNome] = useState("");
    const [crm, setCrm] = useState("");
    const [telefone, setTelefone] = useState("");
    const [especialidade, setEspecialidade] = useState("");

  const { doctors, setDoctors } = useContext(GlobalContext);
  const { setUpdateDoctors } = useContext(GlobalContext);

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
        nome: nome,
        crm: crm,
        telefone: telefone,
        especialidade: especialidade,
  };
    const response = await cadastrarMedicos(data);
    if (response.status === 200) {
      alert("Médico registrado com sucesso!");
      setUpdateDoctors(true);
    }
};

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
      <FormGroup>
          <Label for="nome">Nome do Médico</Label>
          <Input
            type="text"
            name="nome"
            id="nome"
            placeholder="Digite o nome do médico"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
            <Label for="especialidade">Especialidade</Label>
            <Input
                type="especialidade"
                name="especialidade"
                id="especialidade"
                value={especialidade}
                onChange={(e) => setEspecialidade(e.target.value)}
            />
        </FormGroup>
        <FormGroup>
          <Label for="crm">CRM</Label>
          <Input
            type="text"
            name="crm"
            id="crm"
            placeholder="Digite o CRM do médico"
            value={crm}
            onChange={(e) => setCrm(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
            <Label for="telefone">Fone</Label>
            <MaskedInput
                mask="(99) 99999-9999"
                type="text"
                name="telefone"
                id="telefone"
                placeholder="Digite seu Telefone"
                className="form-control"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
            />
        </FormGroup>
        <Button type="submit" color="primary">
            Cadastrar
        </Button>
        </Form>
    </Container>
    );
}


           
