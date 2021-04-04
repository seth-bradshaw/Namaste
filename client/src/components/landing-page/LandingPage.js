import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import ReleaseCards from "./ReleaseCards";

const StyledHeader = styled.div`
  background-color: #ffaf42;
  height: 500px;
  margin: 8% 0% 8% 0%;
  width: 60%;
  padding: 1%;
  border-radius: 0px 250px 250px 0px;
`;

const StyledHeaderContent = styled.div`
  margin-left: 2.5%;
`;

const StyledTitle = styled.h2`
  margin-top: 1.5%;
  font-family: Poppins;
  font-size: 50px;
  color: #ffffff;
`;

const StyledParagraph = styled.p`
  margin-top: 3%;
  font-family: Poppins;
  font-size: 18px;
  color: #ffffff;
  width: 30%;
`;

const StyledCardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 3% 2% 5% 2%;
`;

const StyledCardContainerTitle = styled.h2`
  margin-top: 2%;
  font-family: Poppins;
  font-size: 50px;
  color: #0e1111;
  text-align: right;
`;

const StyledSection = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  padding: 2%;
  background-color: #d3d3d3;
  margin: 1% 0% 7.5% 0%;
`;

const futureReleases = [
  {
    feature: "Meditation",
    description:
      "The meditation courses are scheduled to be released in release 2.",
  },
  {
    feature: "Calorie Tracking",
    description:
      "In release 3 calorie tracking will be available. You will be able to track macros, and  calcuate the amount of  calories needed for your goals ",
  },
  {
    feature: "Fitness Tracking",
    description:
      "Fitness tracking will be available in release 4. You will be  able to add new workouts and track the duration and  intensity of a workout.",
  },
];

export default function LandingPage() {
  const { push } = useHistory();

  return (
    <div>
      <StyledHeader>
        <StyledHeaderContent>
          <StyledTitle>
            Life made <br></br> simple
          </StyledTitle>
          <StyledParagraph>
            Ever feel stressed? Unorganized? Unhappy? We've got good news. We've
            designed a product that when used as intended will lead to a happier
            more fullfilling life one day at a time.
          </StyledParagraph>
          <Button
            onClick={() => push("/login")}
            style={{
              backgroundColor: "#0090fe",
              borderColor: "#0090fe",
              margin: "auto",
              borderRadius: "25px",
              width: "25%",
              fontFamily: "Poppins",
              fontWeight: "Bold",
            }}
          >
            Get Started
          </Button>
        </StyledHeaderContent>
      </StyledHeader>
      <StyledSection>
        <StyledCardContainerTitle>In the work</StyledCardContainerTitle>
        <StyledCardsContainer>
          <ReleaseCards futureReleases={futureReleases} />
        </StyledCardsContainer>
      </StyledSection>
    </div>
  );
}
