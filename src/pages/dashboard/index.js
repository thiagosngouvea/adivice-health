import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { CalendarSchedule } from "@/components/calendar";
import { CardDashboard } from "@/components/cardDashboard";
import { TableReminders } from "@/components/tableReminders";
import { AppointmentList } from "@/components/appointmentsList";
import { GlobalContext } from "@/context/GlobalContext";
import { handleGet } from "@/pages/api/consultas";

export default function Dashboard() {
    const { updateConsultas } = useContext(GlobalContext);
    const { consultas, setConsultas } = useContext(GlobalContext);	
    const [totalConsultas, setTotalConsultas] = useState(0);

    const calcularTotalConsultas = () => {
        let total = 0;
        consultas.forEach(consulta => {
            total += consulta.valorConsulta;
        });
        setTotalConsultas(total);
    }

    useEffect(() => {
        calcularTotalConsultas();
    }, [updateConsultas]);

    const consultasFinalizadas = consultas.filter(consulta => consulta.status === "Finalizado");

    console.log(consultasFinalizadas);

    useEffect(() => {
    async function getConsultas() {
        const response = await handleGet();
        setConsultas(response.data);
    }

    getConsultas();
    }, [updateConsultas]);


    return (
        <Container fluid={true}>
            <Row>
                <Col xs={6}>
                    <Row className="my-5">
                        <Col xs={6}>
                            <CardDashboard
                                title="Faturamento"
                                value={`R$ ${totalConsultas}`}
                                height="16.7rem"
                                width="100%"
                                backgroundColorHeader="#28a745"
                                colorHeader="#fff"
                                justifyContentHeader="center"
                                alignItemsHeader="center"
                                displayHeader="flex"
                                justifyContentBody="center"
                                alignItemsBody="center"
                                displayBody="flex"
                                colorTitle="#28a745"
                                fontSizeTitle="2rem"
                            />
                        </Col>
                        <Col xs={6}>
                            <Stack gap={4}>
                                <CardDashboard
                                    title="Agendamentos"
                                    value={consultas.length}
                                    width="100%"
                                    backgroundColorHeader="#007bff"
                                    colorHeader="#fff"
                                    justifyContentHeader="center"
                                    alignItemsHeader="center"
                                    displayHeader="flex"
                                    justifyContentBody="center"
                                    alignItemsBody="center"
                                    displayBody="flex"
                                    colorTitle="#007bff"
                                    fontSizeTitle="2rem"
                                />
                                <CardDashboard
                                    title="Atendimentos"
                                    value={consultasFinalizadas.length}
                                    width="100%"
                                    backgroundColorHeader="#dc3545"
                                    colorHeader="#fff"
                                    justifyContentHeader="center"
                                    alignItemsHeader="center"
                                    displayHeader="flex"
                                    justifyContentBody="center"
                                    alignItemsBody="center"
                                    displayBody="flex"
                                    colorTitle="#dc3545"
                                    fontSizeTitle="2rem"
                                />
                            </Stack>
                        </Col>
                    </Row>
                </Col>
                <Col xs={6} className="p-4">
                    <CalendarSchedule />
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                    <TableReminders />
                </Col>
                <Col xs={6}>
                    <AppointmentList
                        appointments={consultas}
                    />
                </Col>
            </Row>
        </Container>
    );
}
