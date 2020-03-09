import styled from "@emotion/styled";

export const AppContainer = styled.div`
  background-color: lightgray;
  height: 100vh;
  overflow: auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 7fr 2fr;
  grid-template-rows: 1fr 23fr 1fr;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "sidebar footer footer";
`;

export const Sidebar = styled.div`
  background-color: pink;
  grid-area: sidebar;
  display: flex;
`;

export const Main = styled.div`
  grid-area: main;
  display: flex;
  background-color: aliceblue;
`;

export const Header = styled.div`
  grid-area: header;
  display: flex;
  flex-direction: row;
  flex: 1;
  background-color: beige;
`;

export const Footer = styled.div`
  grid-area: footer;
`;
