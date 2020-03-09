import React, { FunctionComponent } from "react";
import { AppContainer, Header, Sidebar, Footer } from "./components";

const Content: FunctionComponent = () => {
  return (
    <div>
      <Sidebar>this is the sidebar</Sidebar>
      it just works!
    </div>
  );
};

const App: FunctionComponent = () => (
  <AppContainer>
    <Header>This is the header</Header>
    <Content />

    <Sidebar>This is where the sidebar should be</Sidebar>

    <Footer>This is the footer</Footer>
  </AppContainer>
);

export default App;
