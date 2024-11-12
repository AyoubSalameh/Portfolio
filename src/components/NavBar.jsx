import React from 'react';
import './NavBar.css';
import logo from '../assets/images/logo.png';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function NavBar() {
    //to know which part of the page the user is currently at, and to jump in case they click
    const [activeLink, setActiveLink] = React.useState('home');
    
    //navbar color change on scroll
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }

            //listen to changes in the scroll position
            window.addEventListener('scroll', handleScroll);
            
            return () => { window.removeEventListener('scroll', handleScroll);}
        }
    },[]);

    const updateActiveLink = (link) => {setActiveLink(link)};

    return(
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt='Logo' style={{height: '35px'}}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('home')}>
                            Home
                        </Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('skills')}>
                            Skills
                        </Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('projects')}>
                            Projects
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href='https://www.linkedin.com/in/ayoub-salameh/' target='_blank' rel="noopener noreferrer">
                            <FaLinkedin className='website-icon' />
                        </Nav.Link>
                        <Nav.Link href='https://github.com/AyoubSalameh' target='_blank' rel="noopener noreferrer">
                            {/* <Button variant="outline" href='#'><FaGithub size={24}/></Button> */}
                            <FaGithub className='website-icon'/>
                        </Nav.Link>
                    </Nav>
                    <Button className='btn' variant='outline-secondary' onClick={()=> console.log('connect')}>
                        Contact Me
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;