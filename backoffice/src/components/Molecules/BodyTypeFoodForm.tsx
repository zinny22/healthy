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
import EditFoodModal from "./EditFoodModal";
import { useAuth } from "service/AuthService";

interface BodyTypeFoodFormProps {
  food?: FoodType;
}

function BodyTypeFoodForm({ food }: BodyTypeFoodFormProps) {
  const { id } = useParams();
  const auth = getAuth();
  const { logOut } = useAuth();
  
  const [foodKey, setFoodKey] = useState<string>("");
  const [foodValues, setFoodValues] = useState<string[]>([]);
  const [selectedFoodKey, setSelectedFoodKey] = useState<string>("");
  const [selectedFoodValues, setSelectedFoodValues] = useState<string[]>([]);
  const [_food, setFood] = useState<FoodType | undefined>(food);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [isAddFoodModal, setIsAddFoodModal] = useState<boolean>(false);
  const [isEditFoodModal, setIsEditFoodModal] = useState<boolean>(false);

  const handleClickAddFoodModal = () => {
    setIsAddFoodModal(!isAddFoodModal);
  };

  const handleClickEditFoodModal = () => {
    setIsEditFoodModal(!isEditFoodModal);
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
    setIsAddFoodModal(false);
  };


  const handleClickSaveEditedFood = () => {
    let newFood: any;
    newFood = {
      ..._food,
      [selectedFoodKey]: selectedFoodValues,
    };

    setFood(newFood);
    setSelectedFoodKey("")
    setSelectedFoodValues([]);
    setIsEditFoodModal(false);
  };

  const handelClickSave = async () => {
    const bodyTypeRef = doc(db, "체질", id as string);

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        await updateDoc(bodyTypeRef, {
          음식: _food,
        });
      } else{
        alert('다시 로그인 해주세요');
        logOut()
      }
    });
  };

  const handleClickEditFood = (foodKey:any, values:string[]) =>{
    setIsEditFoodModal(true)
    setSelectedFoodKey(foodKey);
    setSelectedFoodValues(values)
  }


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
             <CustomButton label={key} onClick={() => handleClickEditFood(key, value)} color={isEditMode ? "default": "gray"} size="sm" isDisabled={!isEditMode}/>

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
        <CustomButton label="추가하기" onClick={() => setIsAddFoodModal(true)} />
      )}

      <AddFoodModal
        isModalOpen={isAddFoodModal}
        handleClickSave={handleClickAddFood}
        toggleModal={handleClickAddFoodModal}
        foodKey={foodKey}
        setFoodKey={setFoodKey}
        foodValues={foodValues}
        setFoodValues={setFoodValues}
      />
      
      <EditFoodModal
        isModalOpen={isEditFoodModal}
        handleClickSave={handleClickSaveEditedFood}
        toggleModal={handleClickEditFoodModal}
        foodTypeKey={selectedFoodKey}
        foodValues={selectedFoodValues}
        setFoodValues={setSelectedFoodValues}
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


const FoodItemList = styled.ul`
  display: flex;
  column-gap: 12px;
  flex-wrap: wrap;
`;
export default BodyTypeFoodForm;
