import styled from "styled-components";
import DesktopEditor from "../../images/illustration-editor-desktop.svg";

export const Container = styled.section`
  width: 100%;
  padding-top: 10.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${DesktopEditor});
  background-repeat: no-repeat;
  height: 120vh;
  background-position: top 50px right -295px;

  @media screen and (max-width: 1050px) {
    background-position: top 50px right -350px;
  }

  @media screen and (max-width: 1026px) {
    height: auto;
  }

  @media screen and (max-width: 970px) {
    background-position: top 100px right -420px;
  }

  @media screen and (max-width: 875px) {
    background-image: none;
    padding-top: 6rem;
  }
`;

export const Subheadings = styled.h4`
  font-family: "Overpass", sans-serif;
  color: ${(props) => props.theme.headings};
  font-size: 2rem;
  text-align: left;
  @media screen and (max-width: 875px) {
    text-align: center;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.7rem;
  }
`;

export const Heading = styled.h3`
  font-family: "Overpass", sans-serif;
  color: ${(props) => props.theme.headings};
  font-size: 2.8rem;
  letter-spacing: -1px;

  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 2rem;
  }
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 40%;

  @media screen and (max-width: 800px) {
    width: 300px;
  }

  @media screen and (max-width: 350px) {
    width: 100vw;
  }
`;

export const Paragraph = styled.p`
  font-family: "Overpass", sans-serif;
  color: ${(props) => props.theme.bodycopy};
  font-size: 0.9rem;
  text-align: left;
  line-height: 2rem;
  font-size: 1.1rem;
  font-weight: 600;

  @media screen and (max-width: 875px) {
    text-align: center;
  }
`;

export const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-top: 8rem;
  padding-left: 10rem;
  gap: 5rem;
  margin-bottom: 6rem;

  @media screen and (max-width: 1180px) {
    padding-left: 4rem;
  }

  @media screen and (max-width: 875px) {
    padding-left: 0;
    padding-top: 4rem;
    align-items: center;
    margin-bottom: 18rem;
  }
`;

export const ImageWrapper = styled.aside`
  display: none;

  @media screen and (max-width: 870px) {
    display: block;
  }
`;
