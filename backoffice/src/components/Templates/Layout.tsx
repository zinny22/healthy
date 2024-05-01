import styled from "@emotion/styled";
import Header from "components/Molecules/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Wrapper>
      <Header />

      <Content>
        <Outlet />
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Content = styled.main`
  flex-grow: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

export default Layout;
