import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

// Import individual images
import tasmia from "../../Images/dp.jpg";
import haider from "../../Images/dp.jpg";
import zinia from "../../Images/dp.jpg";
import mahnoor from "../../Images/dp.jpg";

const ContactUs = ({ aboutProfile }) => {
  const [showDetail, setShowDetail] = useState(false);
  const showDetailHandler = () => {
    setShowDetail(true);
  };

  return (
    <div style={{ marginTop: "150px" }}>
      <Container>
        <div>
          <Row className="justify-content-center">
            <div className="text-center">
              <h2>Our Team</h2>
              <p className="p-5">
                Our leadership team comes together with one goal: to help
                learners, organizations, and nations prepare for and strengthen
                the digital workforce of the next generation.
              </p>
            </div>
          </Row>
          <Row className="justify-content-center">
            {/* Shahzaib Sarwar */}
            <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
              <Card style={{ width: "100%", margin: "0 auto" }}>
                <Card.Img
                  variant="top"
                  src={haider}
                  style={{ height: "265px", objectFit: "cover" }}
                />
                <Card.Body className="text-center">
                  <Card.Title>Haider Ali</Card.Title>
                  <Card.Text>
                    <p>Full Stack Mern Developer</p>
                  </Card.Text>
                  <Link to="/Haider">
                    <Button variant="outline-success">About Me</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            {/* Salman Talat */}
            <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
              <Card style={{ width: "100%", margin: "0 auto" }}>
                <Card.Img
                  variant="top"
                  src={mahnoor}
                  style={{ height: "265px", objectFit: "cover" }}
                />
                <Card.Body className="text-center">
                  <Card.Title>Mahnoor</Card.Title>
                  <Card.Text>
                    <p>Documentation + Frontend Design</p>
                  </Card.Text>
                  <Link to="/Mahnoor">
                    <Button variant="outline-success">About Me</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            {/* Mohsin Shoaib */}
            <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
              <Card style={{ width: "100%", margin: "0 auto" }}>
                <Card.Img
                  variant="top"
                  src={tasmia}
                  style={{ height: "265px", objectFit: "cover" }}
                />
                <Card.Body className="text-center">
                  <Card.Title>Tasmia</Card.Title>
                  <Card.Text>
                    <p>Documentation + Frontend Design</p>
                  </Card.Text>
                  <Link to="/Tasmia">
                    <Button variant="outline-success">About Me</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            {/* New Team Member */}
            <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
              <Card style={{ width: "100%", margin: "0 auto" }}>
                <Card.Img
                  variant="top"
                  src={zinia}
                  style={{ height: "265px", objectFit: "cover" }}
                />
                <Card.Body className="text-center">
                  <Card.Title>Zinia Alex John</Card.Title>
                  <Card.Text>
                    <p>Documentation + Frontend Design</p>
                  </Card.Text>
                  <Link to="/Zinia">
                    <Button variant="outline-success">About Me</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
