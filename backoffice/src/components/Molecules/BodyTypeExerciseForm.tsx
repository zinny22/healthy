import styled from "@emotion/styled";
import Box from "components/Atom/Box";
import CustomButton from "components/Atom/CustomButton";
import CustomInput from "components/Atom/CustomInput";
import { useEffect, useState } from "react";

interface BodyTypeExerciseFormProps {
  exercise: string[];
}

function BodyTypeExerciseForm({ exercise }: BodyTypeExerciseFormProps) {
  const [value, setValue] = useState<string>("");
  const [_exercise, setExercise] = useState<string[]>(exercise);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  useEffect(() => {
    setExercise(exercise);
  }, [exercise]);

  return (
    <Box
      width="100%"
      title="운동"
      showButton={true}
      isEditMode={isEditMode}
      setIsEditMode={setIsEditMode}
      onClickSave={() => {}}
    >
      <List>
        {_exercise.map((item, index) => (
          <li key={index}>
            {index + 1}. {item}
          </li>
        ))}
      </List>

      {isEditMode && (
        <AddItem>
          <CustomInput
            initialValue={value}
            passedHandleChange={(e) => setValue(e)}
            placeHolder="작성하기"
            autoFocus
          />

          <CustomButton
            label="추가"
            onClick={() => {
              setValue("");
              setExercise((p) => [...p, value]);
            }}
            size="sm"
          />
        </AddItem>
      )}
    </Box>
  );
}

const List = styled.ul`
  padding-bottom: 20px;
  display: grid;
  row-gap: 8px;
`;

const AddItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
`;

export default BodyTypeExerciseForm;
