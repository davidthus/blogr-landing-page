import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 78%;
`;

export const DropdownLinksContainer = styled.ul`
  margin-left: 4.5rem;
  padding: 0;
  display: flex;
  gap: 2rem;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  list-style: none;

  @media screen and (max-width: 930px) {
    display: none;
  }
`;

export const SignInContainer = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media screen and (max-width: 930px) {
    display: none;
  }
`;

export const Login = styled.p`
  color: ${(props) => props.theme.text};
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  font-size: 1.1rem;
  cursor: pointer;
  opacity: 0.8;
`;

export const SignUp = styled.button`
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.lightred};
  padding: 1rem 2.5rem;
  border-radius: 999rem;
  border: none;
  cursor: pointer;
  font-family: "Ubuntu", sans-serif;
  font-weight: 700;
  font-size: 1.2rem;

  &:hover {
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.ctahoverbackground};
  }
`;

export const HamburgerContainer = styled.div`
  position: relative;
  display: none;
  cursor: pointer;

  @media screen and (max-width: 930px) {
    display: flex;
  }
`;
