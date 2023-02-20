import { Navbar, Container, Nav } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">SansBooks</Navbar.Brand>
          <Nav>
            <Nav.Link href="#novel">Novel</Nav.Link>
            <Nav.Link href="#komik">Komik</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
