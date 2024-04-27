import styled from "@emotion/styled";
import Box from "components/Atom/Box";
import CustomButton from "components/Atom/CustomButton";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";
import { To } from "router/router";
import {
  BodyTypeKey,
  BodyTypeSchema,
  BodyTypeValue,
} from "schema/bodyType.schema";
import { db } from "shared/firebase";

function BodyTypeListPage() {
  const [bodyType, setBodyType] = useState<BodyTypeSchema[]>([]);

  const initBodyTypeList = async () => {
    const query = await getDocs(collection(db, "체질"));

    if (!query) return;

    const newBodyTypes: BodyTypeSchema[] = [];

    query.forEach((doc) => {
      const value = doc.data() as BodyTypeValue;
      const id = doc.id as BodyTypeKey;

      const result: BodyTypeSchema = {
        id,
        value,
      };

      newBodyTypes.push(result);
    });

    setBodyType(newBodyTypes);
  };

  useEffect(() => {
    initBodyTypeList();
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
          {bodyType.map((item, index) => (
            <li key={index}>
              <Link to={To.BodyTypeDetail(item.id)}> {item.id}</Link>
            </li>
          ))}
        </ul>
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
