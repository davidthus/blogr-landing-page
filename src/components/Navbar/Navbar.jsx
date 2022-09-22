import { useState } from "react";
import { ReactComponent as IconClose } from "../../images/icon-close.svg";
import { ReactComponent as Hamburger } from "../../images/icon-hamburger.svg";
import { ReactComponent as Logo } from "../../images/logo.svg";
import DropDown from "../DropDown/DropDown";
import MobileMenu from "../MobileMenu/MobileMenu";
import {
  DropdownLinksContainer,
  HamburgerContainer,
  Login,
  NavbarContainer,
  SignInContainer,
  SignUp,
} from "./Navbar.style";

const dropdowns = [
  {
    title: "Product ",
    links: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
  },
  { title: "Company ", links: ["About", "Team", "Blog", "Careers"] },
  { title: "Connect ", links: ["Contact", "Newsletter", "LinkedIn"] },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <NavbarContainer>
      <Logo />
      <DropdownLinksContainer>
        {dropdowns.map((dropdown, i) => {
          return <DropDown key={i} dropdown={dropdown} />;
        })}
      </DropdownLinksContainer>
      <SignInContainer>
        <Login>Login</Login>
        <SignUp>Sign Up</SignUp>
      </SignInContainer>
      <HamburgerContainer onClick={() => setMobileMenuOpen((prev) => !prev)}>
        {mobileMenuOpen ? <IconClose /> : <Hamburger />}
        {mobileMenuOpen && <MobileMenu />}
      </HamburgerContainer>
    </NavbarContainer>
  );
}

export default Navbar;
