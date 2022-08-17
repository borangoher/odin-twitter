import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

const Tweet = () => {
  return (
    <Container
      className="border border-dark bg-info"
      style={{ width: "24rem", minHeight: "8rem", boxSizing: "border-box" }}
    >
      <Row className="align-items-center" style={{ height: "4rem" }}>
        <Col sm={3}>
          <Image
            fluid
            roundedCircle
            className="bg-white m-1"
            src="logo192.png"
            style={{ height: "3rem" }}
          />
        </Col>
        <Col>
          <h2
            className="display-2 text-light mb-0"
            style={{ fontSize: "1.2rem" }}
          >
            Ahmet Mehmet
          </h2>
        </Col>
      </Row>
      <Row className="border-top border-light">
        <p
          className="display-3 text-light mt-2 mb-0"
          style={{ fontSize: "1rem" }}
        >
          Hello I'm Ahmet Mehmet, this is a tweet. lorem lorem lorem
        </p>
      </Row>
      <Row>
        <Stack
          direction="horizontal"
          gap={2}
          className="justify-content-end mb-1"
        >
          <Button>Retweet</Button>
          <Button>Like</Button>
        </Stack>
      </Row>
    </Container>
  );
};

export default Tweet;
