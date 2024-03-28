import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = ({ id }) => {
  const [visible, setVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        clearTimeout(timeout);
        setVisible(false);
        
      } else {
        // Scrolling up
        setVisible(true);
      }
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, [lastScrollTop]);

  const scrollToSection = (id) => {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const element = document.getElementById(id);
    if (element) {
      const offsetPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div style={{ transition: 'opacity 0.5s', opacity: visible ? 1 : 0 }}>
      <Navbar id={id} collapseOnSelect expand="lg" className="bg-white" fixed="top">
        <Container fluid>
          <Navbar.Brand style={{ color: '#6495ed',fontSize:"1.9rem",padding:"0" }}>
           <p>Micheal</p>
          </Navbar.Brand>
          <Navbar.Toggle className="nav-bar" aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav className="me-auto nav-bar">
              <Nav.Link className='nav-items mx-2 p-2' onClick={() => scrollToSection('about')} style={{ color: '#6495ed' }}>
                About
              </Nav.Link>
              <Nav.Link className='nav-items mx-2 p-2' onClick={() => scrollToSection('projects')} style={{ color: '#6495ed' }}>
                Projects
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className='nav-items mx-2 p-2' onClick={() => scrollToSection('skills')} style={{ color: '#6495ed' }}>
                Skills
              </Nav.Link>
              <Nav.Link className='nav-items mx-2 p-2' onClick={() => scrollToSection('resume')} style={{ color: '#6495ed' }}>
                Resume
              </Nav.Link>
              <Nav.Link className='nav-items mx-2 p-2' onClick={() => scrollToSection('contact')} style={{ color: '#6495ed' }}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;