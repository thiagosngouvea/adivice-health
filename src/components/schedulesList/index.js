import React, { useState, useContext } from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import { ModalCentralizado } from "@/components/modal";
import { RegisterForm } from "@/components/formRegister";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { deleteConsulta } from "@/pages/api/consultas";
import { GlobalContext } from "@/context/GlobalContext";


export function SchedulesList({ agendamentos }){
    const [showModal, setShowModal] = useState(false);
    const { setUpdateConsultas } = useContext(GlobalContext);
    
    const closeModal = closeModalOpen => {
        setShowModal(closeModalOpen);
    };

    const openModal = () => {
        setShowModal(true);
        return (
            <ModalCentralizado
            showModal={showModal} 
            closeModal={closeModal}
            title="Cadastrar Consulta"
            content={
                <RegisterForm />
            }
        />
        )
    }

    const deleteSchedule = async (id) => {
        const response = await deleteConsulta(id);
        if (response.status === 204) {
            setUpdateConsultas(true);
        }
    }


  return (
    <Container>
      <Row>
        <ListGroup style={{ height: "300px", overflowY: "scroll" }}>
            {agendamentos.map(agendamento => (
            <Col key={agendamento.id} xs={12}>
                <Card className="mb-2">
                <Card.Body>
                    <Row>
                        <Col xs={4}>
                            <Card.Title className="pt-2 px-2">{agendamento.horaConsulta}</Card.Title>
                            <Card.Subtitle className="pt-2 px-2 text-muted"> {agendamento.dataConsulta}</Card.Subtitle>
                        </Col>
                        <Col xs={4}>
                            <Card.Title className="pt-2 px-2">{agendamento.nomePaciente}</Card.Title>
                            <Card.Subtitle className="pt-2 px-2">{agendamento.medico}</Card.Subtitle>
                        </Col>
                        <Col xs={4}>                           
                            <Card.Title className="pt-2 px-2">R$ {agendamento.valorConsulta}</Card.Title>
                            <Card.Subtitle className="pt-2 px-2 justify-between">
                                <AiFillEdit onClick={() => openModal()}/>
                                <AiFillDelete style={{ cursor: "pointer" }} onClick={() => deleteSchedule(agendamento.id)} />
                            </Card.Subtitle>
                        </Col>
                    </Row>
                </Card.Body>
                </Card>
            </Col>
            ))}
        </ListGroup>
        <ModalCentralizado
            showModal={showModal} 
            closeModal={closeModal}
            title="Cadastrar Consulta"
            content={
                <RegisterForm />
            }
        />
      </Row>
    </Container>
  );
};