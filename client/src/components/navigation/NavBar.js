import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actions as userActions } from "../store/ducks/userDuck";

const StyledTitle = styled.h1`
  font-size: 28px;
  font-family: Poppins;
  color: #fe6e00;
  margin: auto 0% auto 0%;
  font-weight: bolder;
  width: 7.5%;
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
  justify-content: space-between;
  padding: 0.5%;
`;

const StyledNavContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 60%;
  margin: auto auto auto auto;
  justify-content: space-around;
`;

const StyledNavContainerLanding = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 30%;
  justify-content: flex-end;
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
      <StyledTitle onClick={() => push("/dashboard")}>Namaste</StyledTitle>
      {loggedIn ? (
        <StyledNavContainer>
          <StyledLink to="/dashboard">Home</StyledLink>
          <StyledLink to="/task">Tasks</StyledLink>
          <StyledLink to="/journal">Journals</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
          <StyledLink to="/" onClick={() => handleSignOut()}>
            Sign Out
          </StyledLink>
        </StyledNavContainer>
      ) : (
        <StyledNavContainerLanding>
          <StyledLink to="/contact">Contact</StyledLink>
          <StyledLink to="/login" onClick={() => handleSignOut()}>
            Sign In
          </StyledLink>
        </StyledNavContainerLanding>
      )}
    </StyledNavBar>
  );
}
