import styled from "@emotion/styled";
import Box from "components/Atom/Box";
import CustomButton from "components/Atom/CustomButton";
import { useEffect, useState } from "react";
import { FoodType } from "schema/bodyType.schema";
import color from "styles/color";
import AddFoodModal from "./AddFoodModal";

interface BodyTypeFoodFormProps {
  food?: FoodType;
}

function BodyTypeFoodForm({ food }: BodyTypeFoodFormProps) {
  const [foodKey, setFoodKey] = useState<string>("");
  const [foodValues, setFoodValues] = useState<string[]>([]);

  const [_food, setFood] = useState<FoodType | undefined>(food);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClickSave = () => {
    const newFood: any = {
      ..._food,
      [foodKey]: foodValues,
    };

    setFood(newFood);
    setFoodKey("");
    setFoodValues([]);
    setIsModalOpen(false);
  };

  useEffect(() => {
    setFood(food);
  }, [food]);

  console.log(_food && Object.entries(_food));
  return (
    <Box
      width="100%"
      title="음식"
      showButton={true}
      isEditMode={isEditMode}
      setIsEditMode={setIsEditMode}
      onClickSave={() => {}}
    >
      <List>
        {_food &&
          Object.entries(_food).map(([key, value], index) => (
            <li key={index}>
              <span style={{ color: color.dander60 }}>{key} | </span>
              {value.map((item, index) => (
                <span key={item}>
                  {item} {index + 1 < value.length && ","}
                </span>
              ))}
            </li>
          ))}
      </List>

      {isEditMode && (
        <CustomButton label="추가하기" onClick={() => setIsModalOpen(true)} />
      )}

      <AddFoodModal
        isModalOpen={isModalOpen}
        handleClickSave={handleClickSave}
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
  row-gap: 8px;
`;

const AddItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
`;

export default BodyTypeFoodForm;
