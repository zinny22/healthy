import styled from "@emotion/styled";
import Box from "components/Atom/Box";
import BodyTypeExerciseForm from "components/Molecules/BodyTypeExerciseForm";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BodyTypeKey, BodyTypeValue } from "schema/bodyType.schema";
import { db } from "shared/firebase";

function BodyTypeDetailPage() {
  const { id } = useParams();

  const [value, setValue] = useState<BodyTypeValue>();
  const [exercise, setExercise] = useState<string[]>([]);

  const initBodyTypeList = async () => {
    const query = await getDocs(collection(db, "체질"));

    if (!query) return;

    query.forEach((doc) => {
      const value = doc.data() as BodyTypeValue;
      const _id = doc.id as BodyTypeKey;
      if (_id === id) {
        setValue(value);
        setExercise(value.운동);
      }
    });
  };

  useEffect(() => {
    initBodyTypeList();
  }, []);

  console.log(value);

  return (
    <Wrapper>
      <BodyTypeExerciseForm exercise={exercise} />
      <Box width="100%">
        <p>음식</p>
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
