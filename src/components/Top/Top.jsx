import React from "react";
import { ReactComponent as MobileEditor } from "../../images/illustration-editor-mobile.svg";
import {
  Article,
  ArticlesContainer,
  Container,
  Heading,
  ImageWrapper,
  Paragraph,
  Subheadings,
} from "./Top.style";

function Top() {
  return (
    <Container>
      <Heading>Designed for the future</Heading>
      <ArticlesContainer>
        <ImageWrapper>
          <MobileEditor />
        </ImageWrapper>
        <Article>
          <Subheadings>Introducing an extensible editor</Subheadings>
          <Paragraph>
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </Paragraph>
        </Article>
        <Article>
          <Subheadings>Robust content management</Subheadings>
          <Paragraph>
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you’re in full control.
          </Paragraph>
        </Article>
      </ArticlesContainer>
    </Container>
  );
}

export default Top;
