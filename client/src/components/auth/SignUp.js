import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { actions as userActions } from "../store/ducks/userDuck";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
};

const StyledTitle = styled.h2`
  text-align: center;
  color: #413d15;
  font-family: Poppins;
  margin-bottom: 10%;
`;

const StyledCard = styled.div`
  width: 750px;
  margin: auto;
  padding: 5%;
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #f8f9fa;
`;

const StyledContentContainer = styled.div`
  width: 100%;
  padding: 0% 2% 0% 2%;
  margin: 8% 0% 8% 0%;
  display: flex;
  justifycontent: center;
`;

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
    <StyledContentContainer>
      <StyledCard>
        <StyledTitle>Sign Up</StyledTitle>
        <Form
          onSubmit={(e) => submitHandler(e)}
          style={{ width: "80%", margin: "auto" }}
        >
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

          <Form.Group as={Row}>
            <Button
              type="submit"
              style={{
                backgroundColor: "#fe6e00",
                borderColor: "#fe6e00",
                margin: "5% auto 2% auto",
                borderRadius: "25px",
                width: "80%",
                fontFamily: "Poppins",
                fontWeight: "Bold",
              }}
            >
              Submit
            </Button>
          </Form.Group>

          <Form.Group as={Row}>
            <Link style={{ margin: "auto", textAlign: "center" }} to="/login">
              Already have an account? Log in
            </Link>
          </Form.Group>
        </Form>
      </StyledCard>
    </StyledContentContainer>
  );
}
