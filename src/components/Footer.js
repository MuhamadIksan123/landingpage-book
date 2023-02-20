import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
      <div>
        <Container className="text-white">
          <Row>
            <Col>
              <p>© Copyright 2022 : SansBooks</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Footer;