import styled from "@emotion/styled";
import BodyTypeExerciseForm from "components/Molecules/BodyTypeExerciseForm";
import BodyTypeFoodForm from "components/Molecules/BodyTypeFoodForm";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BodyTypeKey, BodyTypeValue, FoodType } from "schema/bodyType.schema";
import { db } from "shared/firebase";

function BodyTypeDetailPage() {
  const { id } = useParams();

  const [value, setValue] = useState<BodyTypeValue>();
  const [exercise, setExercise] = useState<string[]>([]);
  const [food, setFood] = useState<FoodType>();

  const initBodyTypeList = async () => {
    const query = await getDocs(collection(db, "체질"));

    if (!query) return;

    query.forEach((doc) => {
      const value = doc.data() as BodyTypeValue;
      const _id = doc.id as BodyTypeKey;
      if (_id === id) {
        setValue(value);
        setExercise(value.운동);
        setFood(value.음식);
      }
    });
  };

  useEffect(() => {
    initBodyTypeList();
  }, []);

  return (
    <Wrapper>
      <BodyTypeExerciseForm exercise={exercise} />
      <BodyTypeFoodForm food={food} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  column-gap: 12px;
`;

export default BodyTypeDetailPage;
