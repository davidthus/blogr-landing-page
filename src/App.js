import styled from "styled-components";
import { Bottom, Footer, Header, Middle, Top } from "./components";

const AppContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Top />
      <Middle />
      <Bottom />
      <Footer />
      Free, open, simple Blogr is a free and open source application backed by a
      large community of helpful developers. It supports features such as code
      syntax highlighting, RSS feeds, social media integration, third-party
      commenting tools, and works seamlessly with Google Analytics. The
      architecture is clean and is relatively easy to learn. Powerful tooling
      Batteries included. We built a simple and straightforward CLI tool that
      makes customization and deployment a breeze, but capable of producing even
      the most complicated sites. Product Overview Pricing Marketplace Features
      Integrations Company About Team Blog Careers Connect Contact Newsletter
      LinkedIn Challenge by Frontend Mentor. Coded by Your Name Here.
    </AppContainer>
  );
}

export default App;
