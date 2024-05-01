import styled from "@emotion/styled";
import Box from "components/Atom/Box";
import CustomButton from "components/Atom/CustomButton";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FoodType, FoodTypeKey } from "schema/bodyType.schema";
import { db } from "shared/firebase";
import color from "styles/color";
import AddFoodModal from "./AddFoodModal";

interface BodyTypeFoodFormProps {
  food?: FoodType;
}

function BodyTypeFoodForm({ food }: BodyTypeFoodFormProps) {
  const { id } = useParams();
  const auth = getAuth();

  const [foodKey, setFoodKey] = useState<string>("");
  const [foodValues, setFoodValues] = useState<string[]>([]);
  const [_food, setFood] = useState<FoodType | undefined>(food);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClickAddFood = () => {
    let newFood: any;

    if (_food && _food.hasOwnProperty(foodKey)) {
      const existingValues = _food[foodKey as FoodTypeKey];
      const setValues = new Set([...existingValues, ...foodValues]);
      const updatedValues = [...setValues];

      newFood = {
        ..._food,
        [foodKey]: updatedValues,
      };
    } else {
      newFood = {
        ..._food,
        [foodKey]: foodValues,
      };
    }

    setFood(newFood);
    setFoodKey("");
    setFoodValues([]);
    setIsModalOpen(false);
  };

  const handelClickSave = async () => {
    const bodyTypeRef = doc(db, "체질", id as string);

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        await updateDoc(bodyTypeRef, {
          음식: _food,
        });
      }
    });
  };

  useEffect(() => {
    setFood(food);
  }, [food]);

  return (
    <Box
      width="100%"
      title="음식"
      showButton={true}
      isEditMode={isEditMode}
      setIsEditMode={setIsEditMode}
      onClickSave={handelClickSave}
    >
      <List>
        {_food &&
          Object.entries(_food).map(([key, value], index) => (
            <FoodItem key={index}>
              <FoodItemCategory>{key}</FoodItemCategory>

              <FoodItemList>
                {value.map((item, index) => (
                  <li key={item}>
                    {item} {index + 1 < value.length && ","}
                  </li>
                ))}
              </FoodItemList>
            </FoodItem>
          ))}
      </List>

      {isEditMode && (
        <CustomButton label="추가하기" onClick={() => setIsModalOpen(true)} />
      )}

      <AddFoodModal
        isModalOpen={isModalOpen}
        handleClickSave={handleClickAddFood}
        toggleModal={toggleModal}
        foodKey={foodKey}
        setFoodKey={setFoodKey}
        foodValues={foodValues}
        setFoodValues={setFoodValues}
      />
    </Box>
  );
}

const List = styled.ul`
  padding-bottom: 20px;
  display: grid;
  row-gap: 24px;
`;

const FoodItem = styled.div`
  display: grid;
  row-gap: 8px;
  border-bottom: 1px solid ${color.gray200};
  padding-bottom: 8px;
`;

const FoodItemCategory = styled.p`
  font-size: 16px;
  background-color: ${color.gray300};
  border-radius: 12px;
  padding: 4px 8px;
  width: fit-content;
`;

const FoodItemList = styled.ul`
  display: flex;
  column-gap: 12px;
`;
export default BodyTypeFoodForm;
