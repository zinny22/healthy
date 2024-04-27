import styled from "@emotion/styled";
import { Dispatch, ReactNode, SetStateAction } from "react";
import EditControl from "./EditControl";

type BoxProps = {
  children: ReactNode;
  width?: string;
  title?: string;
} & (
  | {
      showButton?: true;
      isEditMode: boolean;
      setIsEditMode: Dispatch<SetStateAction<boolean>>;
      onClickSave: () => void;
    }
  | {
      showButton?: false;
    }
);

function Box({ children, width, title, ...props }: BoxProps) {
  return (
    <Wrapper width={width}>
      <TitleAndButton>
        {title && <Title>{title}</Title>}

        {props.showButton && (
          <EditControl
            isEditMode={props.isEditMode}
            setIsEditMode={props.setIsEditMode}
            onClickSave={props.onClickSave}
          />
        )}
      </TitleAndButton>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.section<{ width?: string }>`
  border-radius: 12px;
  width: ${({ width }) => width};
  padding: 16px 12px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 4px 10px 0px;
`;

const TitleAndButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 18px;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 800;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
`;
export default Box;
