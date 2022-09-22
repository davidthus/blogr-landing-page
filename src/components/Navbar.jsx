import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";
import { NavbarContainer } from "./Navbar.style";

function Navbar() {
  return (
    <NavbarContainer>
      <Logo />
    </NavbarContainer>
  );
}

export default Navbar;
