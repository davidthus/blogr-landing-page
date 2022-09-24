import React, { useReducer } from "react";
import MobileDropdown from "../MobileDropdown/MobileDropdown";
import {
  ButtonsContainer,
  Container,
  LinkContainer,
  Login,
  Menu,
  SignUp,
} from "./MobileMenu.style";

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

function MobileMenu() {
  const [state, dispatch] = useReducer(reducer, {
    nav0open: false,
    nav1open: false,
    nav2open: false,
  });

  return (
    <Container>
      <Menu>
        <LinkContainer>
          {dropdowns.map((dropdown, i) => {
            return (
              <MobileDropdown
                key={i}
                state={state}
                id={i}
                dispatch={dispatch}
                dropdown={dropdown}
              />
            );
          })}
        </LinkContainer>
        <ButtonsContainer>
          <Login>Login</Login>
          <SignUp>Sign Up</SignUp>
        </ButtonsContainer>
      </Menu>
    </Container>
  );
}

export default MobileMenu;
