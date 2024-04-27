import styled from "@emotion/styled";
import { Dispatch, SetStateAction } from "react";
import CustomButton from "./CustomButton";

interface EditControlProps {
  isEditMode: boolean;
  setIsEditMode: Dispatch<SetStateAction<boolean>>;
  onClickSave: () => void;
}

function EditControl({
  isEditMode,
  setIsEditMode,
  onClickSave,
}: EditControlProps) {
  return (
    <>
      {isEditMode ? (
        <Buttons>
          <CustomButton
            label="취소"
            onClick={() => setIsEditMode(false)}
            size="sm"
            color="gray"
          />
          <CustomButton
            label="저장"
            onClick={() => {
              setIsEditMode(false);
              onClickSave();
            }}
            size="sm"
            color="danger"
          />
        </Buttons>
      ) : (
        <CustomButton
          label="수정"
          onClick={() => setIsEditMode(true)}
          size="sm"
        />
      )}
    </>
  );
}

const Buttons = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
`;

export default EditControl;
