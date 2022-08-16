import React, { useState } from "react";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap//Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const Landing = () => {
  const [currentDisp, setCurrentDisp] = useState("start");

  const displayStack = () => {
    if (currentDisp === "start") {
      return (
        <Stack
          direction="vertical"
          gap={3}
          className="my-auto mx-auto bg-primary rounded align-items-center p-2"
          style={{ maxWidth: "30rem", minHeight: "24rem" }}
        >
          <h1
            className="display-1 text-light mb-0"
            style={{ fontSize: "2rem" }}
          >
            Welcome to Twitter!
          </h1>
          <Card
            style={{ width: "90%", height: "18rem", fontSize: "1.5rem" }}
            className="bg-primary text-center text-light border border-info"
          >
            <Card.Text>
              This is a very good app, many people use it! It is good and very
              nice. To join millions of users, by which we mean, like, four,
              please log in or sign up!
            </Card.Text>
          </Card>
          <Stack
            direction="horizontal"
            gap={5}
            className="justify-content-center"
          >
            <Button
              variant="primary"
              className="border border-light"
              style={{ fontSize: "1.5rem" }}
              onClick={() => {
                setCurrentDisp("sign up");
              }}
            >
              Sign Up
            </Button>
            <Button
              variant="secondary"
              className="border border-light"
              style={{ fontSize: "1.5rem" }}
              onClick={() => {
                setCurrentDisp("log in");
              }}
            >
              Log In
            </Button>
          </Stack>
        </Stack>
      );
    } else if (currentDisp === "sign up") {
      return (
        <Stack
          direction="vertical"
          gap={3}
          className="my-auto mx-auto bg-primary rounded align-items-center p-2"
          style={{ maxWidth: "30rem", minHeight: "24rem" }}
        >
          <Button
            variant="secondary"
            className="border border-light text-light align-self-start"
            onClick={() => {
              setCurrentDisp("start");
            }}
          >
            Go Back
          </Button>
          <Form className="mt-2 text-light">
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email Adress</Form.Label>
              <Form.Control type="email"></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password"></Form.Control>
            </Form.Group>
            <Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="text-center border border-light mt-3"
                style={{ fontSize: "1.3rem" }}
              >
                Sign Up!
              </Button>
            </Form.Group>
          </Form>
        </Stack>
      );
    } else {
      return (
        <Stack
          direction="vertical"
          gap={3}
          className="my-auto mx-auto bg-primary rounded align-items-center p-2"
          style={{ maxWidth: "30rem", minHeight: "24rem" }}
        >
          <Button
            variant="secondary"
            className="border border-light text-light align-self-start"
            onClick={() => {
              setCurrentDisp("start");
            }}
          >
            Go Back
          </Button>
          <Form className="mt-2 text-light">
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"></Form.Control>
            </Form.Group>
            <Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="text-center border border-light mt-3"
                style={{ fontSize: "1.3rem" }}
              >
                Log In
              </Button>
            </Form.Group>
          </Form>
        </Stack>
      );
    }
  };

  return (
    <Container
      fluid
      className="bg-info"
      style={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      {displayStack()}
    </Container>
  );
};

export default Landing;
