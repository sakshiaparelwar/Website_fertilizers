import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { Outlet } from "react-router-dom";
import { ApplicationContext } from "../context/context";
import { useContext } from "react";

function NavigationBar() {
  const { currentUser, setCurrentUser } = useContext(ApplicationContext);
  
  const handleLogOut = () => {
    console.log("came here for logout");
    setCurrentUser({
      name:"",
      email:"",
      token:"",
      _id:"",
      isLoggedIn: false,

      
  });

  localStorage.setItem("name","");
  localStorage.setItem("email","");
  localStorage.setItem("_id","");
  localStorage.setItem("token","");
  localStorage.setItem("isLoggedIn",false);
  }


  return (
    <>
      <Navbar
        style={{ backgroundColor: "green", color: "white" }}
        expand="lg"
        className="body-tertiary"
      >
        <Container>
          <Navbar.Brand style={{ color: "white" }}>Soil Sage</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer style={{ color: "white" }} to="/Home">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer style={{ color: "white" }} to="/AboutUs">
                <Nav.Link>About Us</Nav.Link>
              </LinkContainer>
              <LinkContainer style={{ color: "white" }} to="/News">
                <Nav.Link>News</Nav.Link>
              </LinkContainer>
              
              {currentUser?.isLoggedIn ? (
                <>
                <LinkContainer style={{ color: "white" }} to="/Fertilizer-recommendation" >
                <Nav.Link>Recommendation</Nav.Link>
              </LinkContainer>
                <LinkContainer style={{ color: "white" }} to="/UserDashboard">
                    <Nav.Link>User</Nav.Link>
                  </LinkContainer>
                <span onClick={handleLogOut}>
                  <LinkContainer style={{ color: "white" }} to="/Login">
                    <Nav.Link>Sign out</Nav.Link>
                  </LinkContainer>
                  </span>
                  
                </>
              ) : (
                <>
                  <LinkContainer style={{ color: "white" }} to="/Login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer style={{ color: "white" }} to="/Signup">
                    <Nav.Link>Sign Up</Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavigationBar;
