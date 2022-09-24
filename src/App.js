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
    </AppContainer>
  );
}

export default App;
