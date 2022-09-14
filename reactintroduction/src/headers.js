/* eslint-disable jsx-a11y/alt-text */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import altaLogo from './img/logo-ALTA@2x.png';
import NavLink from 'react-bootstrap/esm/NavLink';

function Headers() {
  const path = window.location.pathname

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">
            <img 
                className='logo-atas' 
                src={altaLogo}
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className={path === "/" ? "navig-aktif" : "navig"} href="/">HOME</NavLink>
            <NavLink className={path === "/about" ? "navig-aktif" : "navig"} href="/about">ABOUT</NavLink>
            <NavLink className={path === "/experience" ? "navig-aktif" : "navig"} href="/experience">EXPERIENCE</NavLink>
            <NavLink className={path === "/contact" ? "navig-aktif" : "navig"} href="/contact">CONTACT</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Headers;