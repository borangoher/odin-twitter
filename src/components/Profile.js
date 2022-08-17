import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import ProfileMain from "./ProfileMain";
import FollowSuggestions from "./FollowSuggestions";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Profile = () => {
  const [isOwnProfile, setIsOwnProfile] = useState(false);

  return (
    <Container fluid className="bg-light">
      <Image
        fluid
        roundedCircle
        className="bg-white border border-light"
        src="./logo512.png"
        style={{
          position: "absolute",
          top: "10%",
          left: "10%",
          width: "3.5rem",
          height: "auto",
          zIndex: "99",
        }}
      ></Image>
      <Row className="bg-primary" style={{ height: "8vh" }}>
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
      <Row className="bg-info " style={{ height: "12vh" }}>
        <Col sm={4}></Col>
        <Col sm={6}>
          <Stack direction="horizontal" className="align-items-start" gap={1}>
            <Card className="border border-primary mt-2">
              <Card.Body className="p-1">
                <Card.Text className="m-0">Tweets</Card.Text>
                <Card.Text>1337</Card.Text>
              </Card.Body>
            </Card>
            <Card className="border border-light mt-2">
              <Card.Body className="p-1">
                <Card.Text className="m-0">Followers</Card.Text>
                <Card.Text>1337</Card.Text>
              </Card.Body>
            </Card>
            <Card className="border border-light mt-2">
              <Card.Body className="p-1">
                <Card.Text className="m-0">Following</Card.Text>
                <Card.Text>1337</Card.Text>
              </Card.Body>
            </Card>
            <Card className="border border-light mt-2">
              <Card.Body className="p-1">
                <Card.Text className="m-0">Favorites</Card.Text>
                <Card.Text>1337</Card.Text>
              </Card.Body>
            </Card>
          </Stack>
        </Col>
        <Col sm={2}>
          <Button className="mt-3">
            <Link className="link" to="/flow">
              Go To Flow
            </Link>
          </Button>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={3}>
          <ListGroup>
            <ListGroup.Item>
              Display Name <Button className="py-1">Edit</Button>
            </ListGroup.Item>
            <ListGroup.Item>
              Username <Button className="py-1">Edit</Button>
            </ListGroup.Item>
            <ListGroup.Item>
              Location <Button className="py-1">Edit</Button>
            </ListGroup.Item>
            <ListGroup.Item>
              Link <Button className="py-1">Edit</Button>
            </ListGroup.Item>
            <ListGroup.Item>Joined</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={5}>
          <ProfileMain />
        </Col>
        <Col sm={4}>
          <FollowSuggestions />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
