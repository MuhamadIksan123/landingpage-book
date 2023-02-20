import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return (
      <div>
        <Navbar variant="dark">
          <Container>
            <Navbar.Brand>SansBooks</Navbar.Brand>
            <Nav>
              <Nav.Link>Novel</Nav.Link>
              <Nav.Link>Komik</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
}

export default NavigationBar