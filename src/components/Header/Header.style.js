import styled from "styled-components";
import backgroundDesktop from "../../images/bg-pattern-intro-desktop.svg";
import backgroundMobile from "../../images/bg-pattern-intro-mobile.svg";

export const HeadingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 9rem;

  @media screen and (max-width: 410px) {
    margin-top: 8rem;
  }
  @media screen and (max-width: 360px) {
    margin-top: 6rem;
  }
`;

export const MainHeading = styled.h1`
  font-family: "Overpass", sans-serif;
  font-weight: 600;
  color: ${(props) => props.theme.text};
  font-size: 4.2rem;
  text-align: center;
  @media screen and (max-width: 880px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 410px) {
    font-size: 2.7rem;
  }
`;

export const SubHeading = styled.h2`
  margin-top: 1.4rem;
  text-align: center;
  font-family: "Overpass", sans-serif;
  font-weight: 300;
  color: ${(props) => props.theme.text};
  font-size: 1.4rem;
  @media screen and (max-width: 450px) {
    font-size: 1.3rem;
  }
`;

export const ButtonContainers = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;

  @media screen and (max-width: 340px) {
    gap: 0.4rem;
  }
`;

export const StartFree = styled.button`
  width: 10rem;
  color: ${(props) => props.theme.ctatext};
  background-color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.text};
  font-family: "Ubuntu", sans-serif;
  border-radius: 999rem;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 0.9rem 0;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.ctahoverbackground};
    border: 1px solid ${(props) => props.theme.ctahoverbackground};
    color: ${(props) => props.theme.text};
  }
`;

export const LearnMore = styled.button`
  width: 10rem;
  color: ${(props) => props.theme.text};
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.text};
  font-family: "Ubuntu", sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 999rem;
  padding: 0.9rem 0;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.ctahoverbackground};
  }
`;

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
