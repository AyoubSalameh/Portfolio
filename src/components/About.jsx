import './About.css';
import { Col, Container, Row } from "react-bootstrap";

function About() {
    return(
        <section id='about' className='about'>
            <Container>
                <Row>
                    <Col>Pic</Col>
                    <Col lg={9}>
                        <h2>About Me</h2>
                        <p>Passioante Software Eng</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;