import React, { useEffect, useState } from "react";
import { actions as userActions } from "./store/ducks/userDuck";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useModal from "./hooks/useModal";
import styled from "styled-components";
import { Button, Carousel } from "react-bootstrap";

const StyledTitle = styled.h2`
  font-family: Poppins;
  font-size: 35px;
  text-align: center;
  margin: 5% auto;
  color: #fe6e00;
`;

const StyledBar = styled.div`
  background-color: gray;
  width: 75%;
  height: 75px;
  margin: 3% auto;
  padding: 10px;
  border-radius: 3px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledBarTitle = styled.h3`
  font-family: Poppins;
  font-size: 23px;
  color: white;
`;

const StyledButton = styled(Button)`
  height: 35px;
`;

export default function Dashboard() {
  const [index, setIndex] = useState(0);
  const [journalsActive, openJournals, closeJournals] = useModal();
  const [tasksActive, openTasks, closeTasks] = useModal();
  const [] = useModal();
  const { activeUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getUserThunk());
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <StyledTitle>Welcome, {activeUser.username}</StyledTitle>
      <StyledBar>
        <StyledBarTitle>Recent Journals</StyledBarTitle>
        <StyledButton onClick={() => openJournals()}>Expand</StyledButton>
      </StyledBar>
      {journalsActive ? (
        <Carousel activeIndex={0} onSelect={handleSelect}>
          <Carousel.Item>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      ) : null}
      <StyledBar>
        <StyledBarTitle>Recent Tasks</StyledBarTitle>
        <StyledButton onClick={() => openTasks()}>Expand</StyledButton>
      </StyledBar>
    </div>
  );
}
