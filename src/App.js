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
      Product Overview Pricing Marketplace Features Integrations Company About
      Team Blog Careers Connect Contact Newsletter LinkedIn Challenge by
      Frontend Mentor. Coded by Your Name Here.
    </AppContainer>
  );
}

export default App;
