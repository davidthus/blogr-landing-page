import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 5rem;
  right: 0;

  display: flex;
  justify-content: center;
  width: 78vw;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  align-items: center;
  padding: 2rem 1.5rem;
  background-color: ${(props) => props.theme.text};
  border-radius: 5px;
`;

export const LinkContainer = styled.menu`
  width: 100%;
  display: flex;
  list-style: none;
  gap: 1.5rem;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.desaturatedblue};
  padding-bottom: 1.5rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Login = styled.p`
  font-family: "Overpass", sans-serif;
  font-size: 1.2rem;
  color: ${(props) => props.theme.headings};
  font-weight: 600;
  cursor: pointer;
  padding-top: 1.9rem;
  padding-bottom: 1.2rem;
`;

export const SignUp = styled.button`
  font-family: "Ubuntu", sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  padding: 1rem 2.5rem;
  border-radius: 999rem;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.verylightred},
    ${(props) => props.theme.lightred}
  );
  border: none;
`;
