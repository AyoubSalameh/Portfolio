import { Container, Row, Col, Button } from 'react-bootstrap';
import './Banner.css';
import { FaLaptop } from "react-icons/fa";

function Banner() {
  return (
    <section className="banner" id="home">
        <Container>
            <Row className='align-items-center'>
                <Col>
                    <h1 style={{paddingBottom: '50px'}}>Ayoub Salameh</h1>
                    <h1>Software Engineer</h1>
                </Col>

            </Row>
        </Container>
    </section>
  );
}

export default Banner;