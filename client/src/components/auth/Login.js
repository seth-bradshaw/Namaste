import React, { useState } from "react";
import { Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { actions as userActions } from "../store/ducks/userDuck";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const initialState = {
  username: "",
  password: "",
};

const StyledHeader = styled.h2`
  text-align: center;
  color: #413d15;
  font-family: Poppins;
  margin-bottom: 5%;
`;

const StyledContainer = styled.div`
  width: 30%;
  margin: 5% auto auto auto;
`;

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
    <StyledContainer>
      <StyledHeader>Log In To Happiness</StyledHeader>
      <Form onSubmit={(e) => submitHandler(e)}>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Control
            onChange={(e) => changeHandler(e)}
            placeholder="Username"
            name="username"
            value={credentials.username}
          />
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Control
            name="password"
            value={credentials.password}
            onChange={(e) => changeHandler(e)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group as={Row}>
          <Button
            style={{
              backgroundColor: "#fe6e00",
              borderColor: "#fe6e00",
              margin: "auto",
            }}
            type="submit"
          >
            Log In
          </Button>
        </Form.Group>

        <Form.Group as={Row}>
          <Link style={{ margin: "auto" }} to="/signup">
            Don't already have an account? Start your journey today
          </Link>
        </Form.Group>
      </Form>
    </StyledContainer>
  );
}
