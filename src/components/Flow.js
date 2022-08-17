import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileMain from "./ProfileMain";
import FollowSuggestions from "./FollowSuggestions";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import News from "./News";
import { Link } from "react-router-dom";

const Flow = () => {
  return (
    <Container fluid className="bg-light">
      <Row className="bg-info " style={{ height: "12vh" }}>
        <Stack
          direction="horizontal"
          className=" justify-content-start align-items-center"
        >
          <Col sm={11}>
            <Button className="bg-info border border-dark">
              <Link className="link" to="/flow">
                Twitter
              </Link>
            </Button>
          </Col>
          <Col className="justify-self-end">
            <Button className="bg-info border border-dark">
              <Link className="link" to="/landing">
                Log Out
              </Link>
            </Button>
          </Col>
        </Stack>
      </Row>
      <Row className="mt-3">
        <Col sm={1}>
          <Button>
            <Link className="link" to="/profile">
              Go to Profile
            </Link>
          </Button>
        </Col>
        <Col sm={3}>
          <News />
        </Col>
        <Col sm={4}>
          <ProfileMain />
        </Col>
        <Col sm={4}>
          <FollowSuggestions />
        </Col>
      </Row>
    </Container>
  );
};

export default Flow;
