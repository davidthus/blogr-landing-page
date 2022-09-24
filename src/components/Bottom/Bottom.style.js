import styled from "styled-components";
import { ReactComponent as Laptop } from "../../images/illustration-laptop-desktop.svg";

export const Container = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 4.5rem;

  @media screen and (min-width: 870px) {
    margin-top: 10rem;

    align-items: flex-end;
    padding-right: 6rem;
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
`;

export const ArticleHeading = styled.h3`
  font-family: "Overpass", sans-serif;
  color: ${(props) => props.theme.headings};
  font-size: 2rem;
  letter-spacing: -1px;

  @media screen and (min-width: 870px) {
    text-align: left;
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
  font-weight: 600;
  text-align: center;
  max-width: 400px;

  @media screen and (min-width: 870px) {
    text-align: left;
  }
`;
