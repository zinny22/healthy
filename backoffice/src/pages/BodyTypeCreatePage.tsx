import styled from "@emotion/styled";
import Box from "components/Atom/Box";

function BodyTypeCreatePage() {
  return (
    <Wrapper>
      <Box width="100%">
        <div>BodyTypeCreatePage</div>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  column-gap: 12px;
`;

export default BodyTypeCreatePage;
