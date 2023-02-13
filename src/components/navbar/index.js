import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export function NavbarLayout(){
    return (
        <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="/dashboard" style={{ color: "#fff"}}>Advice Health</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-center text-center">
                <Nav className="mr-auto">
                    <Nav.Link href="/dashboard" style={{ color: "#fff"}}>Dashboard</Nav.Link>
                    <Nav.Link href="/agendamento" style={{ color: "#fff"}}>Agendamento</Nav.Link>
                    <Nav.Link href="/consultar-agendamentos" style={{ color: "#fff"}}>Listagem de Agendamentos</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
    );
}