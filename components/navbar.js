import { Navbar, Nav } from "react-bootstrap";

function NavbarMenu() {
  return (
    <div>
      <Navbar fixed="top" bg="light" expand="lg">
        <Navbar.Brand className="ml-3 " href="#home">
          Ufuk UYSAL
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="mr-3" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="mr-3" href="#projects">
              Projects
            </Nav.Link>
            <Nav.Link className="mr-3" href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarMenu;
