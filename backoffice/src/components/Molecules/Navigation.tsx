import styled from "@emotion/styled";
import HeaderNavItem from "components/Atom/HeaderNavItem";
import HeaderSubNavItem from "components/Atom/HeaderSubNavItem";
import { To } from "router/router";

function Navigation() {
  return (
    <Wrapper>
      <Inner>
        <HeaderNavItem label="전시 관리">
          <HeaderSubNavItem label="체질 데이터 관리" to={To.BodyTypeList} />
        </HeaderNavItem>
      </Inner>
    </Wrapper>
  );
}

const Wrapper = styled.nav``;

const Inner = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 1.5rem;
`;

export default Navigation;
