import {Container, Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import useAuth from "../../hooks/useAuth";




const Header = () => {



    return (
      <>
        <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">
              Django Blog
              </Navbar.Brand>
                <Nav className="mr-auto">

                    <Nav.Item>

                         <Nav.Link as={Link} to="login" >Log In</Nav.Link>
                    </Nav.Item>


                    <Nav.Item>
                         <Nav.Link as={Link} to="signup" >Sign up</Nav.Link>
                    </Nav.Item>




                </Nav>
            </Container>
          </Navbar>
  </>
  );
};

export default Header;



