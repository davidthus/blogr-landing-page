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
  padding: 3rem 1.5rem;
  background-color: ${(props) => props.theme.text};
  border-radius: 5px;
`;

export const LinkContainer = styled.menu`
  width: 100%;
  display: flex;
  opacity: 0.5;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.desaturatedblue};
`;
