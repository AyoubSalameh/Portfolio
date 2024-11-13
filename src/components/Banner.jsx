import { Container, Row, Col, Button } from 'react-bootstrap';

function Banner() {
  return (
    <section className="banner" id="home">
        <Container>
            <Row className='alignn-items-center'>
                <Col xs={12} md={6} xl={8}>
                    <span className='tagline'>Welcome to my Portfolio</span>
                    <h1>Hi! I'm Ayoub Salameh</h1>
                    <h3>I'm a Computer Science Graduate, looking for my first position</h3>
                    <Button onClick={() => console.log('connect')}>
                        Contact Me
                    </Button>
                </Col>
                <Col xs={12} md={6} xl={4}>Column 2</Col>

            </Row>
        </Container>
    </section>
  );
}

export default Banner;