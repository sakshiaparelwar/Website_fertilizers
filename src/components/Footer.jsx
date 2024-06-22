import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "green" }}
      className="text-center text-white text-lg-left"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          {/* <a href='/' className='me-4 text-reset'>
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href='/' className='me-4 text-reset'>
            <i className="fab fa-twitter"></i>
          </a>
          <a href='/' className='me-4 text-reset'>
            <i className="fab fa-google"></i>
          </a>
          <a href='/' className='me-4 text-reset'>
            <i className="fab fa-instagram"></i>
          </a>
          <a href='/' className='me-4 text-reset'>
            <i className="fab fa-linkedin"></i>
          </a>
          <a href='/' className='me-4 text-reset'>
            <i className="fab fa-github"></i>
          </a> */}
        </div>
      </section>

      <section className="">
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">
            <Col md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>
                Soil Sage
              </h6>
              <p>
                "Cultivate success with our Fertilizer Recommendation System –
                your one-stop solution for optimizing crop yields through
                personalized nutrient advice, making every harvest a triumph."
              </p>
            </Col>

            <Col md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">SERVICES</h6>
              <p>
                <a href="/news" className="text-reset">
                  NEWS
                </a>
              </p>
              <p>
                <a href="/AboutUs" className="text-reset">
                  About Us
                </a>
              </p>
              <p>
                <a href="/Login" className="text-reset">
                  Login Page
                </a>
              </p>
              <p>
                <a href="/" className="text-reset"></a>
              </p>
            </Col>

            <Col md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a
                  href="https://www.justdial.com/Mumbai/Fertilizer-Dealers/nct-10203273"
                  className="text-reset"
                >
                  Top Dealers
                </a>
              </p>
              <p>
                <a
                  href="https://geopard.tech/blog/what-is-the-best-type-of-fertilizer/"
                  className="text-reset"
                >
                  Types Of Fertilizers
                </a>
              </p>
              <p></p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </Col>

            <Col md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-2"></i>
                Mumbai, Maharashtra 10012, IND
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                fertilizersite@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i>+ 01 234 567 87
              </p>
              <p>
                <i className="fas fa-print me-3"></i>+ 01 234 567 89
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="#">
          Soil Sage
        </a>
      </div>
    </footer>
  );
}
