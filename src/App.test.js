import { fireEvent, render, screen } from "@testing-library/react";
import Landing from "./components/Landing";

it("Landing page switches between displays", () => {
  render(<Landing />);
  let signUpButton = screen.getByText(/^Sign Up$/);
  let logInButton = screen.getByText(/^Log In$/);
  expect(signUpButton).toBeInTheDocument();
  expect(logInButton).toBeInTheDocument();

  fireEvent.click(signUpButton);
  signUpButton = screen.getByText(/^Sign Up!$/);
  let goBackButton = screen.getByText(/^Go Back$/);
  expect(signUpButton).toBeInTheDocument();
  expect(goBackButton).toBeInTheDocument();

  fireEvent.click(goBackButton);
  logInButton = screen.getByText(/^Log In$/);
  fireEvent.click(logInButton);
  logInButton = screen.getByText(/^Log In$/);
  goBackButton = screen.getByText(/^Go Back$/);
  expect(logInButton).toBeInTheDocument();
  expect(goBackButton).toBeInTheDocument();
});
