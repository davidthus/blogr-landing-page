import styled from "styled-components";
import Laptop from "../../images/illustration-laptop-desktop.svg";

export const Container = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 4.5rem;

  @media screen and (min-width: 870px) {
    height: 870px;
    margin-top: 10rem;
    padding-top: 3rem;

    justify-content: center;
    align-items: flex-end;
    padding-right: 10%;

    background-image: url(${Laptop});
    background-repeat: no-repeat;
    background-position: top left -600px;
  }

  @media screen and (min-width: 980px) {
    background-position: top left -500px;
  }

  @media screen and (min-width: 1180px) {
    background-position: top left -400px;
  }

  @media screen and (min-width: 1300px) {
    background-position: top left -300px;
    padding-right: 17%;
  }

  @media screen and (min-width: 1700px) {
    background-position: top left -100px;
    padding-right: 17%;
  }
`;

export const ImageWrapper = styled.aside`
  display: none;
  margin-bottom: 3rem;

  @media screen and (max-width: 870px) {
    display: block;
  }
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 75%;
  margin-bottom: 3rem;

  @media screen and (min-width: 870px) {
    width: 100%;
    max-width: 450px;
  }
`;

export const ArticleHeading = styled.h3`
  font-family: "Overpass", sans-serif;
  color: ${(props) => props.theme.headings};
  font-size: 2rem;

  @media screen and (min-width: 870px) {
    text-align: left;
    width: 100%;
  }
`;

export const Paragraph = styled.p`
  font-family: "Overpass", sans-serif;
  color: ${(props) => props.theme.bodycopy};
  font-size: 0.9rem;
  opacity: 0.8;
  text-align: left;
  line-height: 2rem;
  font-size: 1.1rem;
  font-weight: 300;
  text-align: center;
  max-width: 400px;

  @media screen and (min-width: 870px) {
    text-align: left;
    max-width: 500px;
  }
`;
