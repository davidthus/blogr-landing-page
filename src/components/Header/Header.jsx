import React from "react";
import Navbar from "../Navbar/Navbar";
import {
  ButtonContainers,
  HeaderContainer,
  HeadingsContainer,
  LearnMore,
  MainHeading,
  StartFree,
  SubHeading,
} from "./Header.style";

function Header() {
  return (
    <HeaderContainer>
      <Navbar />
      <HeadingsContainer>
        <MainHeading>A modern publishing platform</MainHeading>
        <SubHeading>Grow your audience and build your online brand</SubHeading>
        <ButtonContainers>
          <StartFree>Start for Free</StartFree>
          <LearnMore>Learn More</LearnMore>
        </ButtonContainers>
      </HeadingsContainer>
    </HeaderContainer>
  );
}

export default Header;
