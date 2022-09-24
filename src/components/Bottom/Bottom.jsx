import React from "react";
import LaptopMobile from "../../images/illustration-laptop-mobile.svg";
import {
  Article,
  ArticleHeading,
  Container,
  ImageWrapper,
  Paragraph,
} from "./Bottom.style";

function Bottom() {
  return (
    <Container>
      <ImageWrapper>
        <img src={LaptopMobile} alt="" />
      </ImageWrapper>
      <Article>
        <ArticleHeading>Free, open, simple</ArticleHeading>
        <Paragraph>
          Blogr is a free and open source application backed by a large
          community of helpful developers. It supports features such as code
          syntax highlighting, RSS feeds, social media integration, third-party
          commenting tools, and works seamlessly with Google Analytics. The
          architecture is clean and is relatively easy to learn.
        </Paragraph>
      </Article>
      <Article>
        <ArticleHeading>Powerful tooling</ArticleHeading>
        <Paragraph>
          Batteries included. We built a simple and straightforward CLI tool
          that makes customization and deployment a breeze, but capable of
          producing even the most complicated sites.
        </Paragraph>
      </Article>
    </Container>
  );
}

export default Bottom;
