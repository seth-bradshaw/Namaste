import React from "react";
import styled from "styled-components";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandFacebook,
} from "@tabler/icons";

const StyledFooter = styled.div`
  height: 250px;
  background-color: #f8f9fa;
  border-top: solid 1px #0e1111;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const StyledFooterContent = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-around;
  margin: auto;
  width: 100%;
`;

const StyledHeader = styled.h1`
  font-size: 28px;
  font-family: Poppins;
  color: #fe6e00;
  margin: 0% auto 1% auto;
  font-weight: bolder;
`;

const StyledIconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: auto;
`;

const StyledLink = styled.a`
  color: #0e1111;
  &:hover {
    color: #0e1111;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledFooterContent>
        <StyledHeader>Namaste</StyledHeader>
        <StyledIconContainer>
          <StyledLink
            href="https://www.linkedin.com/in/seth-bradshaw/"
            target="_blank"
          >
            <IconBrandLinkedin></IconBrandLinkedin>
          </StyledLink>
          <StyledLink href="https://github.com/seth-bradshaw" target="_blank">
            <IconBrandGithub></IconBrandGithub>
          </StyledLink>
          <StyledLink href="" target="_blank">
            <IconBrandFacebook></IconBrandFacebook>
          </StyledLink>
        </StyledIconContainer>
      </StyledFooterContent>
    </StyledFooter>
  );
}
