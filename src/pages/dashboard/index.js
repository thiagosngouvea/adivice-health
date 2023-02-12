import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CalendarSchedule } from "@/components/calendar";
import { CardDashboard } from "@/components/cardDashboard";
import { TableReminders } from "@/components/tableReminders";
import { PatientsList } from "@/components/patientsList";

export default function Dashboard() {
    return (
        <Container fluid={true}>
            <Row>
                <Col xs={6}>
                    <Row className="my-5">
                        <CardDashboard
                            title="Agendamentos"
                            value="10"
                            color="primary"
                        />
                        <CardDashboard
                            title="Atendimentos"
                            value="10"
                            color="primary"
                        />
                        <CardDashboard
                            title="Faturamento"
                            value="R$ 10.000,00"
                            color="primary"
                        />
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
                    <PatientsList />
                </Col>
            </Row>
        </Container>
    );
}
