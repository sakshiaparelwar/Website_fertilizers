import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { ApplicationContext } from "../context/context";
import { useContext } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
  MDBCardTitle,
} from "mdb-react-ui-kit";

export function AboutUs() {
  const contextValue = useContext(ApplicationContext);
  console.log(contextValue);
  return (
    <>
      <div className="mt-5">
        <MDBCard background="dark" className="text-white">
          <MDBCardHeader>Our Goal</MDBCardHeader>
          <MDBCardBody>
            <MDBCardText>
              We are passionate about nurturing the beauty and vitality of your
              gardens. Our journey began with a simple belief – that every plant
              deserves the best care possible to thrive and flourish. In the
              vast world of gardening, we recognized the need for a personalized
              and intelligent approach to fertilizer recommendations.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </div>
      <Container className="mt-5">
        <h1 className="d-flex align-item-center justify-content-center mt-5">
          About Us
        </h1>
        <div className="d-flex align-item-center justify-content-center mt-5">
          <Row style={{ gap: "10rem" }}>
            <Col>
              <Card style={{ width: "16rem", backgroundColor: "#393646" }}>
                <Card.Img variant="top" style={{ height: "60vh" }} />
                <Card.Body className="text-light">
                  <Card.Title>John deo</Card.Title>
                  <Card.Text>
                    CSE_DE<br></br>
                    Soil Sage
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "17rem", backgroundColor: "#393646" }}>
                <Card.Img variant="top" style={{ height: "60vh" }} />
                <Card.Body className="text-light">
                  <Card.Title>Max Well</Card.Title>
                  <Card.Text>
                    CSE_DE<br></br>
                    Soil Sage
                  </Card.Text>
                  {/* <Button  variant="primary"><a style={{color:'white'}} href="https://www.google.co.in">visit LinkedIn</a></Button> */}
                </Card.Body>
              </Card>
            </Col>
            {/* <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                     bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
            </Card>
            </Col> */}
          </Row>
        </div>
      </Container>
    </>
  );
}
