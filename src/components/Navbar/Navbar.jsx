import { useReducer, useState } from "react";
import { ReactComponent as IconClose } from "../../images/icon-close.svg";
import { ReactComponent as Hamburger } from "../../images/icon-hamburger.svg";
import { ReactComponent as Logo } from "../../images/logo.svg";
import DropDown from "../DropDown/DropDown";
import MobileMenu from "../MobileMenu/MobileMenu";
import {
  DropdownLinksContainer,
  HamburgerContainer,
  HamburgerWrapper,
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

function reducer(state, action) {
  switch (action.type) {
    case 0:
      return { nav0open: !state.nav0open, nav1open: false, nav2open: false };
    case 1:
      return { nav0open: false, nav1open: !state.nav1open, nav2open: false };
    case 2:
      return { nav0open: false, nav1open: false, nav2open: !state.nav2open };
    default:
      return state;
  }
}

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    nav0open: false,
    nav1open: false,
    nav2open: false,
  });

  return (
    <NavbarContainer>
      <Logo />
      <DropdownLinksContainer>
        {dropdowns.map((dropdown, i) => {
          return (
            <DropDown
              key={i}
              state={state}
              id={i}
              dispatch={dispatch}
              dropdown={dropdown}
            />
          );
        })}
      </DropdownLinksContainer>
      <SignInContainer>
        <Login>Login</Login>
        <SignUp>Sign Up</SignUp>
      </SignInContainer>
      <HamburgerContainer>
        {mobileMenuOpen ? (
          <HamburgerWrapper onClick={() => setMobileMenuOpen((prev) => !prev)}>
            <IconClose />
          </HamburgerWrapper>
        ) : (
          <HamburgerWrapper onClick={() => setMobileMenuOpen((prev) => !prev)}>
            <Hamburger />
          </HamburgerWrapper>
        )}
        {mobileMenuOpen && <MobileMenu />}
      </HamburgerContainer>
    </NavbarContainer>
  );
}

export default Navbar;
