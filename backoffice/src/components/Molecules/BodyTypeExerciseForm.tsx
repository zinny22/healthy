import styled from "@emotion/styled";
import Box from "components/Atom/Box";
import CustomInput from "components/Atom/CustomInput";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "shared/firebase";

interface BodyTypeExerciseFormProps {
  exercise: string[];
}

function BodyTypeExerciseForm({ exercise }: BodyTypeExerciseFormProps) {
  const { id } = useParams();
  const auth = getAuth();

  const [value, setValue] = useState<string>("");
  const [_exercise, setExercise] = useState<string[]>(exercise);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setValue("");
      setExercise((p) => {
        if (!value) {
          return p;
        }
        return [...p, value];
      });
    }
  };

  const handelClickSave = async () => {
    const bodyTypeRef = doc(db, "체질", id as string);

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        await updateDoc(bodyTypeRef, {
          운동: _exercise,
        });
      }
    });
  };

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
      onClickSave={handelClickSave}
    >
      <List>
        {_exercise.map((item, index) => (
          <li key={index}>
            {index + 1}. {item}
          </li>
        ))}
      </List>

      {isEditMode && (
        <CustomInput
          label="운동"
          initialValue={value}
          passedHandleChange={(e) => setValue(e)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
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
