import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar
      style={{ margin: "10px 59.328px" }}
      className='navbar navbar-expand-lg navbar-light bg-light'>
      <Nav className='mr-auto' style={{ fontSize: "1.2rem" }}>
        <LinkContainer to='/home' style={{ paddingLeft: "0px" }}>
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/about'>
          <Nav.Link>About</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/contact'>
          <Nav.Link href='contact'>Contact</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
