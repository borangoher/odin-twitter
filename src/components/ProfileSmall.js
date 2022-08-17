import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const ProfileSmall = () => {
  return (
    <Container
      className="border border-dark bg-info"
      style={{ width: "24rem", height: "6rem" }}
    >
      <Row className="align-items-center" style={{ height: "3rem" }}>
        <Col sm={3}>
          <Image
            fluid
            roundedCircle
            className="bg-white m-1"
            src="logo192.png"
            style={{ height: "2rem" }}
          />
        </Col>
        <Col sm={5}>
          <h2
            className="display-2 text-light mb-0"
            style={{ fontSize: "1.2rem" }}
          >
            Ahmet Mehmet
          </h2>
        </Col>
        <Col sm={4}>
          <Button className="ml-1" style={{ height: "2rem" }}>
            Follow
          </Button>
        </Col>
      </Row>
      <Row className="border-top border-light">
        <p
          className="display-3 text-light mt-2 mb-0"
          style={{ fontSize: "1rem" }}
        >
          Hello I'm Ahmet Mehmet, nice to meet you.
        </p>
      </Row>
    </Container>
  );
};

export default ProfileSmall;
