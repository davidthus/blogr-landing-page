import styled from "styled-components";

export const Mobiledropdown = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DropdownHeading = styled.p`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: ${(props) => props.theme.headings};
  font-family: "Overpass", sans-serif;
  font-weight: 600;
  font-size: 1.25rem;
  cursor: pointer;
`;

export const DropdownLinks = styled.ul`
  list-style: none;
  gap: 1rem;
  margin-top: 1rem;
  width: 100%;
  display: flex;
  opacity: 0.7;
  flex-direction: column;
  background-color: ${(props) => props.theme.footertext};
  border-radius: 5px;
  align-items: center;
  padding: 1.5rem 0;
`;

export const Link = styled.li`
  color: ${(props) => props.theme.headings};
  font-family: "Overpass", sans-serif;
  font-weight: 600;
  cursor: pointer;
`;

export const ArrowWrapper = styled.div`
  transition: 0.2s;
  rotate: ${(props) => (props.open ? "180deg" : "0deg")};
`;
