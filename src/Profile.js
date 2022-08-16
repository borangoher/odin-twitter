import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

const Profile = () => {
  const [isOwnProfile, setIsOwnProfile] = useState(false);

  return (
    <Container fluid className="bg-info">
      <Image
        fluid
        className="roundedCircle"
        src="./logo512.png"
        style={{ position: "absolute", top: "10%", left: "10%" }}
      ></Image>
      <Row className="bg-primary"></Row>
      <Row className="bg-info">
        <Col sm={4}></Col>
        <Col sm={8}>
          <Stack direction="horizontal">
            <Card className="border border-light">
              <Card.Body>
                <Card.Text>Tweets</Card.Text>
                <Card.Text>1337</Card.Text>
              </Card.Body>
            </Card>
            <Card className="border border-light">
              <Card.Body>
                <Card.Text>Following</Card.Text>
                <Card.Text>1337</Card.Text>
              </Card.Body>
            </Card>
            <Card className="border border-light">
              <Card.Body>
                <Card.Text>Followers</Card.Text>
                <Card.Text>1337</Card.Text>
              </Card.Body>
            </Card>
            <Card className="border border-light">
              <Card.Body>
                <Card.Text>Favorites</Card.Text>
                <Card.Text>1337</Card.Text>
              </Card.Body>
            </Card>
          </Stack>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={3}>
          <ListGroup>
            <ListGroup.Item>Display Name</ListGroup.Item>
            <ListGroup.Item>Username</ListGroup.Item>
            <ListGroup.Item>Location</ListGroup.Item>
            <ListGroup.Item>Link</ListGroup.Item>
            <ListGroup.Item>Joined</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={6}>
          <ProfileMain></ProfileMain>
        </Col>
        <Col sm={3}>
          <Card className="border border-light">
            <FollowSuggestions></FollowSuggestions>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
