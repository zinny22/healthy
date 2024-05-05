import styled from "@emotion/styled";
import CustomButton from "components/Atom/CustomButton";
import CustomInput from "components/Atom/CustomInput";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { To } from "router/router";
import { useAuth } from "service/AuthService";

function LogInPage() {
  const auth = getAuth();
  const navigate = useNavigate();
  const { logIn, isLoggedIn } = useAuth();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handelClickLogIn = () => {
    logIn({ auth, id, pw });
  };

  useEffect(() => {
    if (isLoggedIn) navigate(To.Home);
  }, []);

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>ziny앱!</Title>
        <SubTitle>백오피스</SubTitle>
      </TitleWrapper>

      <Box>
        <CustomInput
          initialValue={id}
          passedHandleChange={(e) => setId(e)}
          label="ID"
        />
        <CustomInput
          initialValue={pw}
          passedHandleChange={(e) => setPw(e)}
          label="PW"
          type="password"
        />
        <CustomButton label="로그인" onClick={handelClickLogIn} fullWidth/>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleWrapper = styled.div`
  display: grid;
  justify-items: center;
  row-gap: 4px;
  padding-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 800;
`;

const SubTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
`;

const Box = styled.section`
  display: flex;
  flex-direction: column;
  width: 300px;
  row-gap: 20px;
  border-radius: 3px;
`;
export default LogInPage;
