import styled from "@emotion/styled";
import CustomButton from "components/Atom/CustomButton";
import Navigation from "./Navigation";

function Header() {
  return (
    <Wrapper>
      <TitleAndNav>
        <Title>백오피스</Title>

        <Navigation />
      </TitleAndNav>

      <UserNameAndButton>
        <UserName>
          <strong>00</strong>님 안녕하세요
        </UserName>

        <CustomButton
          label="로그아웃"
          onClick={() => {}}
          color="danger"
          type="none"
        />
      </UserNameAndButton>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  border-bottom: 1px solid #dadada;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 12px;
  padding: 0px 16px;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

const TitleAndNav = styled.div`
  display: flex;
  align-items: center;
  column-gap: 50px;
`;

const UserNameAndButton = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

const UserName = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export default Header;
