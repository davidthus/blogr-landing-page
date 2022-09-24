import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${(props) => props.theme.footerbackground};
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  border-top-right-radius: 7rem;
  padding: 4rem 0;
  margin-top: 3rem;
  gap: 4rem;

  @media screen and (min-width: 800px) {
    flex-direction: row;
    justify-content: center;
    gap: 15%;
    align-items: flex-start;
    height: 400px;
  }
`;

export const GroupsContainer = styled.menu`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
  list-style: none;

  @media screen and (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 50%;
  }
`;

export const LinksGroup = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media screen and (min-width: 800px) {
    gap: 3.5rem;
  }
`;

export const GroupHeading = styled.p`
  color: ${(props) => props.theme.text};
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  text-align: center;

  @media screen and (min-width: 800px) {
    text-align: left;
    width: 100%;
  }
`;

export const LinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  gap: 0.5rem;

  @media screen and (min-width: 800px) {
    gap: 1.3rem;
  }
`;

export const Link = styled.p`
  cursor: pointer;
  color: ${(props) => props.theme.footertext};
  font-family: "Ubuntu", sans-serif;
  font-weight: 400;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (min-width: 800px) {
    text-align: left;
    width: 100%;
  }
`;

export const LogoWrapper = styled.aside``;
