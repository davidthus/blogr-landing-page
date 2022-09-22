import styled from "styled-components";
import backgroundDesktop from "../../images/bg-pattern-intro-desktop.svg";
import backgroundMobile from "../../images/bg-pattern-intro-mobile.svg";

export const HeaderContainer = styled.header`
  height: 75vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${backgroundDesktop}),
    linear-gradient(
      to right,
      ${(props) => props.theme.verylightred},
      ${(props) => props.theme.lightred}
    );
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 4.2rem;
  border-bottom-left-radius: 7rem;

  @media screen and (max-width: 500px) {
    background-image: url(${backgroundMobile}),
      linear-gradient(
        to right,
        ${(props) => props.theme.verylightred},
        ${(props) => props.theme.lightred}
      );
  }
`;
