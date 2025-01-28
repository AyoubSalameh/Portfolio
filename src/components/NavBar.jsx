import React from 'react';
import './NavBar.css';
import logo from '../assets/images/logo.png';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Linkedin, Github } from "react-bootstrap-icons";

function NavBar() {
    //to know which part of the page the user is currently at, and to jump in case they click
    const [activeLink, setActiveLink] = React.useState('home');
    
    //navbar color change on scroll
    const [scrolled, setScrolled] = React.useState(false);
    const [expanded, setExpanded] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }
            //listen to changes in the scroll position
        window.addEventListener('scroll', handleScroll);
            
        return () => { window.removeEventListener('scroll', handleScroll);}
        
    },[]);

    const updateActiveLink = (link) => {setActiveLink(link)};

    const handleToggle = () => {setExpanded(!expanded)};

    return(
        <Navbar expand="lg" className={scrolled || expanded ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt='Logo' style={{height: '35px'}}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('home')}>
                            Home
                        </Nav.Link>
                        <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('about')}>
                            About
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
                            <Linkedin className='website-icon'/>
                        </Nav.Link>
                        <Nav.Link href='https://github.com/AyoubSalameh' target='_blank' rel="noopener noreferrer">
                            <Github className='website-icon'/>
                        </Nav.Link>
                    </Nav>
                    <Button href='#contact' className='btn' variant='outline-secondary'>
                        Contact Me
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;