import React, { useState } from "react";
import { Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { actions as userActions } from "../store/ducks/userDuck";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const initialState = {
  username: "",
  password: "",
};

export default function Login() {
  const [credentials, setCredentials] = useState(initialState);
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const dispatch = useDispatch();
  const { push } = useHistory();

  if (loggedIn) {
    push("/dashboard");
  }

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userActions.loginThunk(credentials));
    setCredentials(initialState);
  };

  return (
    <div style={{ width: "25%", margin: "auto" }}>
      <h1>Namaste (logo)</h1>
      <Form onSubmit={(e) => submitHandler(e)}>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label sm={2}>Username</Form.Label>
          <Form.Control
            onChange={(e) => changeHandler(e)}
            placeholder="Username"
            name="username"
            value={credentials.username}
          />
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label sm={2}>Password</Form.Label>
          <Form.Control
            name="password"
            value={credentials.password}
            onChange={(e) => changeHandler(e)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group as={Row}>
          <Button style={{ margin: "auto" }} type="submit">
            Sign in
          </Button>
        </Form.Group>

        <Form.Group as={Row}>
          <Link style={{ margin: "auto" }} to="/signup">
            Don't already have an account? Sign up
          </Link>
        </Form.Group>
      </Form>
    </div>
  );
}
