import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand  href="./pages/home.js">
              <img
                src="./../comlogo.png"
                width="auto"
                height="30"
                className="d-inline-block align-top"
                alt="logo"
              />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
          <Nav.Link href="./pages/home.js">Home</Nav.Link>
            
            <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/GradeR.js">Grades</Nav.Link>
            <Nav.Link href="/InsContact.js">Instructors</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="/Faqs.js"><Button variant="outline-info">Support</Button></Nav.Link>
            <Nav.Link href="#link"><Button variant="outline-primary">Login</Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;