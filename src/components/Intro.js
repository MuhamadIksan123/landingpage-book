import { Container, Row, Col } from 'react-bootstrap';

const Intro = () => {
  return (
    <div className="introBook">
      <Container className="n text-white d-flex justify-content-center align-items-center text-center">
        <Row>
          <Col>
            <div className="title">BACA BUKU</div>
            <div className="title">GAK PAKE BELI DULU</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
