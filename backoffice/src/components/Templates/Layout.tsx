import styled from "@emotion/styled";
import Header from "components/Molecules/Header";
import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

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
