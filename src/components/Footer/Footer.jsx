import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo test-start">
              <img src={logo} alt="logo" />
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item boarder-0 ps-0">
                <span>Monday - Friday</span>
                <p>10:00am - 10:00pm</p>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item boarder-0 ps-0">
                <span>Saturday-Sunday </span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item boarder-0 ps-0">
                <p>Zhandosova 55</p>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item boarder-0 ps-0">
                <span><p>Phone: 87774923965</p></span>
                <span>Phone: 87785269545</span>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item boarder-0 ps-0">
                <span>Email: AniEmi@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow:</p>
              <span>
                <Link to="https://www.instagram.com/miyalis143">
                  <i class="ri-instagram-line"></i>
                </Link>
              </span>
              <span>
                <Link to="https://www.instagram.com/deesirre">
                  <i class="ri-instagram-line"></i>
                </Link>
              </span>
              <span>
                <Link to="https://github.com/Nia200/food2.git">
                  <i class="ri-github-line"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
