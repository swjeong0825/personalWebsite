import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";

import Modal from "../../reusableComponents/modal/modal";
const NavigationBar = (props: any) => {
  const location = useLocation();
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
      </Nav>
      <Modal />
      {/* <button
        type='button'
        className='btn btn-outline-light text-secondary'
        onClick={() => console.log("a")}>
        Contact
      </button> */}
    </Navbar>
  );
};

export default NavigationBar;
