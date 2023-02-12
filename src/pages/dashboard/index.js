import React, { useEffect, useState } from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { CalendarSchedule } from "@/components/calendar";
import { CardDashboard } from "@/components/cardDashboard";
import { TableReminders } from "@/components/tableReminders";
import { PatientsList } from "@/components/patientsList";
import { handleGet } from "@/pages/api/pacientes";

export default function Dashboard() {
    const [pacientes, setPacientes] = useState([]);

    useEffect(() => {
    async function getPacientes() {
        const response = await handleGet();
        setPacientes(response.data);
    }

    getPacientes();
    }, []);

    console.log(`PACIENTES`,pacientes);

    return (
        <Container fluid={true}>
            <Row>
                <Col xs={6}>
                    <Row className="my-5">
                        <Col xs={6}>
                            <CardDashboard
                                title="Faturamento"
                                value="R$ 10.000,00"
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
                                    value="10"
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
                                    value="10"
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
                <Col xs={6}>
                    <CalendarSchedule />
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                    <TableReminders />
                </Col>
                <Col xs={6}>
                    <PatientsList
                        patients={pacientes}
                    />
                </Col>
            </Row>
        </Container>
    );
}
