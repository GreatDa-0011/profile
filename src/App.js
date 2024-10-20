import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import SubmissionSuccess from './components/SubmissionSuccess';
import { Navbar, Nav, Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">My Profile</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Routes for the pages */}
      <Container className="mt-4">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success" element={<SubmissionSuccess />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
