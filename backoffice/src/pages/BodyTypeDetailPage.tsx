import styled from "@emotion/styled";
import Box from "components/Atom/Box";
import { useParams } from "react-router-dom";

function BodyTypeDetailPage() {
  const { id } = useParams();
  console.log(id);
  return (
    <Wrapper>
      <Box width="100%">
        <div>BodyTypeDetailPage</div>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  column-gap: 12px;
`;

export default BodyTypeDetailPage;
