import { Navbar, Nav, Container } from "react-bootstrap";

const BarraDeNavegacion = () => {
    return (
        <Navbar expand="lg" className="rosa">
            <Container>
                <Navbar.Brand className="text-light" href="#home">Formulario</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-light">
                        <Nav.Link className="text-light" href="#home">Home</Nav.Link>
                        <Nav.Link className="text-light" href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default BarraDeNavegacion;