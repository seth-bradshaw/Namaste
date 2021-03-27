import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actions as userActions } from "../store/ducks/userDuck";

const StyledHeader = styled.h1`
  font-size: 28px;
  font-family: Poppins;
  color: #fe6e00;
  margin: 0px;
  font-weight: bolder;
`;

const StyledLink = styled(Link)`
  font-size: 18px;
  font-family: Poppins;
  text-decoration: none;
  color: #414a4c;
  padding: 0.1% 1% 0.1% 1%;
  position: static;
  &:hover {
    text-decoration: none;
    color: #414a4c;
  }
`;

const StyledNavBar = styled.div`
  display: flex;
  justify-content: left;
  padding: 0.5%;
  background-color: #f8f9fa;
`;

const StyledNavContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 80%;
  align-items: center;
`;

export default function NavBar() {
  const { push } = useHistory();
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.loggedIn);

  const handleSignOut = () => {
    dispatch(userActions.logOutUserThunk());
  };

  return (
    <StyledNavBar>
      <StyledHeader onClick={() => push("/dashboard")}>Namaste</StyledHeader>
      {loggedIn ? (
        <StyledNavContainer>
          <StyledLink to="/dashboard">Home</StyledLink>
          <StyledLink to="/task">Tasks</StyledLink>
          <StyledLink to="/journal">Journals</StyledLink>
          <StyledLink to="/" onClick={() => handleSignOut()}>
            Sign Out
          </StyledLink>
        </StyledNavContainer>
      ) : null}
    </StyledNavBar>
  );
}
