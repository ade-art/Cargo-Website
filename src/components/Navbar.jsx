import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const AppNavbar = () => {
 return (
   <Navbar expand="lg" className="nav">
      <Container>
        <Navbar.Brand href="/" className="brand">CARGEL</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navitem">
            <Nav.Link href="/" className="navcontent">Home</Nav.Link>
            <Nav.Link href="/about" className="navcontent">About Us </Nav.Link>
            <NavDropdown className="navcontent" title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="/ExportImports">Export & Imports</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Domestic Logistics
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Custom Clearance</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Trucking Freight </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Air Freight </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Ocean Freight </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Office" className="navcontent">Office</Nav.Link>
            <Nav.Link href="#ContactUs" className="navcontent contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>      
 );
};

