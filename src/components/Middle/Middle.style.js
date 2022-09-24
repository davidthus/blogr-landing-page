import styled from "styled-components";
import Circles from "../../images/bg-pattern-circles.svg";

export const Container = styled.section`
  width: 100vw;
  border-bottom-left-radius: 7rem;
  border-top-right-radius: 7rem;
  display: flex;
  height: 28rem;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  background-color: ${(props) => props.theme.desaturatedblue};
  background-image: url(${Circles});
  background-repeat: no-repeat;
  background-position: left -150px bottom -100px;

  @media screen and (max-width: 1000px) {
    gap: 0;
  }

  @media screen and (max-width: 875px) {
    flex-direction: column;
    height: 700px;
    padding-bottom: 4rem;
    justify-content: flex-end;
    background-position: bottom -50% center;
  }

  @media screen and (max-width: 470px) {
    padding-bottom: 8rem;
  }

  @media screen and (max-width: 300px) {
    padding-bottom: 4rem;
  }
`;

export const PhonesImage = styled.img`
  @media screen and (max-width: 875px) {
    width: 400px;
    height: auto;
  }

  @media screen and (max-width: 550px) {
    width: 300px;
    height: auto;
  }
`;

export const ArticleContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 40%;

  @media screen and (max-width: 470px) {
    width: 65%;
  }
`;

export const ArticleHeading = styled.h3`
  color: ${(props) => props.theme.text};
  font-family: "Overpass", sans-serif;
  font-weight: 600;
  font-size: 2.8rem;

  @media screen and (max-width: 875px) {
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.text};
  font-family: "Overpass", sans-serif;
  opacity: 0.8;
  font-size: 0.9rem;
  text-align: left;
  line-height: 2rem;
  font-size: 1.1rem;
  font-weight: 300;

  @media screen and (max-width: 875px) {
    text-align: center;
  }
`;
