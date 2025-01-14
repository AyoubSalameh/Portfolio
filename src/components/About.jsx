import './About.css';
import { Col, Container, Row } from "react-bootstrap";
import { FaLaptopCode } from 'react-icons/fa';

function About() {
    return(
        <section id='about' className='about'>
            <Container>
                <Row className="align-items-center">
                    <Col className="d-flex"r>
                        <FaLaptopCode size={100}/>
                    </Col>
                    <Col xs={12} md={10} lg={8} className="text-center">
                        <h3>About Me</h3>
                        <h4>Hi! im Ayoub Salameh, im a Computer Science Graduate from the Technion, and an aspiring Software Engineer
                            with a passion for web development.
                            i am currently looking for a full-time position as a Junior Software Engineer.
                        </h4>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;