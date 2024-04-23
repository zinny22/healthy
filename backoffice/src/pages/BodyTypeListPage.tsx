import styled from "@emotion/styled";
import Box from "components/Atom/Box";
import CustomButton from "components/Atom/CustomButton";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";
import { To } from "router/router";
import { db } from "shared/firebase";

export const BodyType = ["태음인", "소음인", "태양인", "소양인", "item"];

function BodyTypeListPage() {
  const [items, setItems] = useState<any[]>([]);
  const [foods, setFoods] = useState<any[]>([]);
  const [test, setTest] = useState<any[]>([]);

  const getTest = async () => {
    BodyType.map(async (item) => {
      const query = await getDocs(collection(db, item));

      if (!query) return;

      query.forEach((doc) => {
        const data = doc.data();
        const id = doc.id;
        setItems((p) => [...p, data]);

        if (id === "운동") setTest((p) => [...p, data]);
        if (id === "음식") setTest((p) => [...p, data]);
      });
    });
  };

  console.log(items);

  useEffect(() => {
    getTest();
  }, []);

  return (
    <Wrapper>
      <Box width="300px">
        <CustomButton
          label="생성"
          onClick={() => redirect(To.BodyTypeCreate)}
          color="danger"
          fullWidth
        />
      </Box>

      <Box width="100%">
        <ul>
          {items.map((item, index) => (
            <li key={index}>{index}</li>
          ))}
        </ul>
        <div>?</div>
        <Link to={To.BodyTypeDetail(3)}>3</Link>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  column-gap: 12px;
`;

export default BodyTypeListPage;
