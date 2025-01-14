import './About.css';
import heroImg from '../assets/images/hero-img.png';
import { Col, Container, Row, Button } from "react-bootstrap";

function About() {
    return(
        <section id='about' className='about'>
            <Container>
                <Row className="align-items-center">
                    <Col className="d-flex justify-content-center align-items-center" >
                        <img src={heroImg} alt='hero' className='hero-pic'/>
                    </Col>
                    <Col xs={12} md={10} lg={8} className="text-center">
                        <h3>About Me</h3>
                        <h4>Hi! I'm Ayoub Salameh, a Computer Science Graduate from the Technion, and an aspiring Software Engineer.
                            I am currently looking for a full-time position as a Junior Software Engineer.
                        </h4>
                        <Button href="/Portfolio/Ayoub.pdf" download className='resume-btn'>
                            My Resume
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;