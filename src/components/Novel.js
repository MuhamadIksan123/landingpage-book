import { Container, Row, Col, Card, Image } from "react-bootstrap"
import dilan from '../assets/buku/novel/dilan.jpg'
import kardus from '../assets/buku/novel/cintadalamkardus.jpg';
import harrypotter from '../assets/buku/novel/harry-potter.jpg';
import laskar from '../assets/buku/novel/laskar-pelangi.jpg';
import shena from '../assets/buku/novel/shena.jpeg';
import ranahwarna from '../assets/buku/novel/ranahwarna.jpg';

const Novel = () => {
    return (
      <div>
        <Container>
          <br />
          <h1 className="text-white">Novel Books</h1>
          <br />
          <Row>
            <Col md={4} id="novel">
              <Card className="imageBook">
                <Image src={dilan} alt="Card image" className="images" />
                <div className="bg-dark">
                  <div className="text-white p-2 m-1">
                    <Card.Title className="text-center">DILAN 1990</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="imageBook">
                <Image src={kardus} alt="Card image" className="images" />
                <div className="bg-dark">
                  <div className="text-white p-2 m-1">
                    <Card.Title className="text-center">CINTA DALAM KARDUS</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="imageBook">
                <Image src={harrypotter} alt="Card image" className="images" />
                <div className="bg-dark">
                  <div className="text-white p-2 m-1">
                    <Card.Title className="text-center">THE HARRY POTTER</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="imageBook">
                <Image src={laskar} alt="Card image" className="images" />
                <div className="bg-dark">
                  <div className="text-white p-2 m-1">
                    <Card.Title className="text-center">LASKAR PELANGI</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="imageBook">
                <Image src={shena} alt="Card image" className="images" />
                <div className="bg-dark">
                  <div className="text-white p-2 m-1">
                    <Card.Title className="text-center">SHENA DAN ARJUN</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="imageBook">
                <Image src={ranahwarna} alt="Card image" className="images" />
                <div className="bg-dark">
                  <div className="text-white p-2 m-1">
                    <Card.Title className="text-center">RANAH 3 WARNA</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Novel;