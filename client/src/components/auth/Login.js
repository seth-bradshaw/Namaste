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

const StyledTitle = styled.h2`
  text-align: center;
  color: #413d15;
  font-family: Poppins;
  margin-bottom: 12.5%;
`;

const StyledCard = styled.div`
  width: 750px;
  padding: 5%;
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 0% auto 9.5% auto;
  background-color: #f8f9fa;
`;

const StyledCardHeaderBar = styled.div`
  background-color: #fe6e00;
  height: 100px;
  width: 100%;
`;

const StyledContentContainer = styled.div`
  width: 100%;
  padding: 0% 2% 0% 2%;
  margin: 8% 0% 8% 0%;
  display: flex;
  justifycontent: center;
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
    <StyledContentContainer>
      <StyledCard>
        <StyledTitle>Log In</StyledTitle>
        <Form
          onSubmit={(e) => submitHandler(e)}
          style={{ width: "60%", margin: "auto" }}
        >
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
              type="submit"
              style={{
                backgroundColor: "#fe6e00",
                borderColor: "#fe6e00",
                margin: "5% auto 2% auto",
                borderRadius: "25px",
                width: "90%",
                fontFamily: "Poppins",
                fontWeight: "Bold",
              }}
            >
              Submit
            </Button>
          </Form.Group>

          <Form.Group as={Row}>
            <Link style={{ margin: "auto", textAlign: "center" }} to="/signup">
              Don't already have an account? Start your journey today.
            </Link>
          </Form.Group>
        </Form>
      </StyledCard>
    </StyledContentContainer>
  );
}
