import styled from "styled-components";

export const Dropdown = styled.li`
  position: relative;
`;

export const DropdownHeading = styled.p`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  opacity: 0.8;
  color: ${(props) => props.theme.text};
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  font-size: 1.1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    opacity: 1;
  }
`;

export const DropdownLinks = styled.ul`
  position: absolute;
  list-style: none;
  top: 3rem;
  left: -2rem;
  padding: 2rem 3rem 2rem 2rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.text};
  border-radius: 5px;
`;

export const Link = styled.li`
  color: ${(props) => props.theme.headings};
  font-family: "Ubuntu", sans-serif;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    font-weight: 700;
  }
`;
