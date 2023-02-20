import { Container, Row, Col, Button } from 'react-bootstrap';

const Intro = () => {
  return (
    <div className="introBook">
      <Container className="n text-white d-flex justify-content-center align-items-center text-center">
        <Row>
          <Col>
            <div className="title">BACA BUKU</div>
            <div className="title">GAK PAKE BELI DULU</div>
            <div className="introButton mt-4">
              <Button variant="dark">Lihat Semua List</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
