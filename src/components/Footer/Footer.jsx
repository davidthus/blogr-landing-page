import React from "react";
import { ReactComponent as Logo } from "../../images/logo.svg";
import {
  Attribution,
  Container,
  GroupHeading,
  GroupsContainer,
  Link,
  LinksContainer,
  LinksGroup,
} from "./Footer.style";

const dropdowns = [
  {
    title: "Product ",
    links: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
  },
  { title: "Company ", links: ["About", "Team", "Blog", "Careers"] },
  { title: "Connect ", links: ["Contact", "Newsletter", "LinkedIn"] },
];

function Footer() {
  return (
    <>
      <Container>
        <Logo />
        <GroupsContainer>
          {dropdowns.map((group, index) => {
            return <Group group={group} key={index} />;
          })}
        </GroupsContainer>
      </Container>
      <Attribution>
        Challenge by Frontend Mentor. Coded by{" "}
        <a href="https://github.com/davidthus">davidthus</a>.
      </Attribution>
    </>
  );
}

function Group({ group }) {
  return (
    <LinksGroup>
      <GroupHeading>{group.title}</GroupHeading>
      <LinksContainer>
        {group.links.map((link, index) => {
          return <Link key={index}>{link}</Link>;
        })}
      </LinksContainer>
    </LinksGroup>
  );
}

export default Footer;
