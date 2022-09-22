import React from "react";
import { Container, LinkContainer, Menu } from "./MobileMenu.style";

const dropdowns = [
  {
    title: "Product ",
    links: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
  },
  { title: "Company ", links: ["About", "Team", "Blog", "Careers"] },
  { title: "Connect ", links: ["Contact", "Newsletter", "LinkedIn"] },
];

function MobileMenu() {
  return (
    <Container>
      <Menu>
        <LinkContainer>High</LinkContainer>
      </Menu>
    </Container>
  );
}

export default MobileMenu;
