import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { actions as userActions } from "../store/ducks/userDuck";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
};

export default function SignUp() {
  const [newUser, setNewUser] = useState(initialState);
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const dispatch = useDispatch();
  const { push } = useHistory();

  if (loggedIn) {
    push("/dashboard");
  }

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userActions.signUpThunk(newUser));
    setNewUser(initialState);
  };

  return (
    <div style={{ width: "25%", margin: "auto" }}>
      <h1>Namaste (logo)</h1>
      <Form onSubmit={(e) => submitHandler(e)}>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="firstName"
              value={newUser.firstName}
              onChange={(e) => changeHandler(e)}
              placeholder="First name"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lastName"
              value={newUser.lastName}
              onChange={(e) => changeHandler(e)}
              placeholder="Last name"
            />
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            value={newUser.email}
            onChange={(e) => changeHandler(e)}
            type="email"
            placeholder="example@abc123.com"
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              value={newUser.username}
              onChange={(e) => changeHandler(e)}
              placeholder="Username"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              value={newUser.password}
              onChange={(e) => changeHandler(e)}
              placeholder="Password"
              type="password"
            />
          </Form.Group>
        </Form.Row>

        <Form.Group as={Row}>
          <Button style={{ margin: "auto" }} variant="primary" type="submit">
            Sign Up
          </Button>
        </Form.Group>

        <Form.Group as={Row}>
          <Link style={{ margin: "auto" }} to="/">
            Already have an account? Log in
          </Link>
        </Form.Group>
      </Form>
    </div>
  );
}
