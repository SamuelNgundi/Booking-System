import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand>EventBooking</Navbar.Brand>
          <Nav className="me-auto">
          <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
            <LinkContainer to="/bookings"><Nav.Link>Bookings</Nav.Link></LinkContainer>
            <LinkContainer to="/events"><Nav.Link>Events</Nav.Link></LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;