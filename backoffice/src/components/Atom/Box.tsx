import styled from "@emotion/styled";
import { ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
  width?: string;
}
function Box({ children, width }: BoxProps) {
  return <Wrapper width={width}>{children}</Wrapper>;
}

const Wrapper = styled.section<{ width?: string }>`
  border-radius: 12px;
  width: ${({ width }) => width};
  padding: 16px 12px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 4px 10px 0px;
`;
export default Box;
