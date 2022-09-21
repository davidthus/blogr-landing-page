import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-size: 16px;
  }
`;

export const theme = {
  ctatext: "hsl(356, 100%, 66%)",
  ctahoverbackground: "hsl(355, 100%, 74%)",
  headings: "hsl(208, 49%, 24%)",
  text: "hsl(0, 0%, 100%)",
  footertext: "hsl(240, 2%, 79%)",
  bodycopy: "hsl(207, 13%, 34%)",
  footerbackground: "hsl(240, 10%, 16%)",
  verylightred: "hsl(13, 100%, 72%)",
  lightred: "hsl(353, 100%, 62%)",
  grayblue: "hsl(237, 17%, 21%)",
  desaturatedblue: "hsl(237, 23%, 32%)",
};
