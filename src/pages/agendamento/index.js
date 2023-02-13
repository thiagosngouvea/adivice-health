import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Container, Button } from "reactstrap";
import { DoctorsList } from "@/components/doctorsList";
import { CalendarSchedule } from "@/components/calendar";
import { SchedulesList } from "@/components/schedulesList";
import { ModalCentralizado } from "@/components/modal";
import { handleGet } from "@/pages/api/medicos";
import { handleGet as getConsultas } from "@/pages/api/consultas";
import { GlobalContext } from "@/context/GlobalContext";
import { RegisterForm } from "@/components/formRegister";
import { RegisterFormDoctor } from "@/components/formRegisterDoctor";

export default function Agendamento () {

    const { doctors, setDoctors } = useContext(GlobalContext);
    const { consultas, setConsultas } = useContext(GlobalContext);
    const { updateConsultas, setUpdateConsultas } = useContext(GlobalContext);
    const { updateDoctors, setUpdateDoctors } = useContext(GlobalContext);

    const [showModal, setShowModal] = useState(false);
    const [showModalMedicos, setShowModalMedicos] = useState(false);

    const closeModal = closeModalOpen => {
        setShowModal(closeModalOpen);
    };

    const closeModalMedicos = closeModalMedicosOpen => {
        setShowModalMedicos(closeModalMedicosOpen);
    }

    useEffect(() => {
      const fetchData = async () => {
        const response = await handleGet();
        setDoctors(response.data);
        setUpdateDoctors(false);
        setShowModalMedicos(false);
      };
      fetchData();
    }, [updateDoctors]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getConsultas();
            setConsultas(response.data);
            setUpdateConsultas(false);
            setShowModal(false);
        };
        fetchData();
    }, [updateConsultas]);
  
    return (
        <Container>
            <Row>
                <Col xs={6}>
                    <Row className="mt-2">
                        <Col xs={8}>
                        <h3 className="text-dark">Medicos</h3>
                        </Col>
                        <Col xs={4}>
                            <Button variant="primary" size="lg" block className="mb-2"
                                onClick={() => setShowModalMedicos(true)}
                            >
                                Adicionar
                            </Button>
                        </Col>
                    </Row>
                    <DoctorsList 
                        medicos={doctors}
                    />
                    <ModalCentralizado
                        showModal={showModalMedicos} 
                        closeModal={closeModalMedicos}
                        title="Cadastrar Médico"
                        content={
                            <RegisterFormDoctor />
                        }
                    />
                    <div className="mt-2 px-2">
                        <CalendarSchedule />
                    </div>
                </Col>
                <Col xs={5} className="mx-5">
                <Row className="mt-2">
                        <Col xs={8}>
                        <h3 className="text-dark">Agendamentos</h3>
                        </Col>
                        <Col xs={4}>
                            <Button variant="primary" size="lg" block className="mb-2"
                                onClick={() => setShowModal(true)}
                            >
                               Adicionar
                            </Button>
                        </Col>
                    </Row>
                    <SchedulesList
                        agendamentos={consultas}
                    />
                    <ModalCentralizado
                        showModal={showModal} 
                        closeModal={closeModal}
                        title="Cadastrar Consulta"
                        content={
                            <RegisterForm />
                        }
                    />
                </Col>
            </Row>
        </Container>
    );
}
