import React from "react";
import Phones from "../../images/illustration-phones.svg";
import {
  ArticleContainer,
  ArticleHeading,
  Container,
  Paragraph,
  PhonesImage,
} from "./Middle.style";

function Middle() {
  return (
    <Container>
      <asid>
        <PhonesImage src={Phones} alt="phones" />
      </asid>
      <ArticleContainer>
        <ArticleHeading>State of the Art Infrastructure</ArticleHeading>
        <Paragraph>
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </Paragraph>
      </ArticleContainer>
    </Container>
  );
}

export default Middle;
