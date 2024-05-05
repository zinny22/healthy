import styled from "@emotion/styled";
import { ReactComponent as ClearText } from "assets/svgs/clearText.svg";
import CustomButton from "components/Atom/CustomButton";
import CustomInput from "components/Atom/CustomInput";
import Modal from "components/Atom/Modal";
import { Dispatch, SetStateAction, useState } from "react";
import { FoodType, FoodTypeKey } from "schema/bodyType.schema";
import color from "styles/color";

interface EditFoodModalProps {
  isModalOpen: boolean;
  handleClickSave: () => void;
  toggleModal: () => void;
  foodTypeKey?:string,
  foodValues: string[];
  setFoodValues: Dispatch<SetStateAction<string[]>>;
}

function EditFoodModal({
  isModalOpen,
  handleClickSave,
  toggleModal,
  foodTypeKey,
  foodValues,
  setFoodValues,
}: EditFoodModalProps) {
  const [foodValue, setFoodValue] = useState<string>("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    let _foodValue = foodValue;
    handleChangeValue("");

    if (event.key === "Enter") {
      setFoodValues((p) => {
        if (!_foodValue) {
          return p;
        }
        return [...p, _foodValue];
      });
    }
  };

  const handleChangeValue = (value: string) => {
    setFoodValue(value);
  };

  const handleClickDelete = (value: string) => {
    setFoodValues((prevValue) =>
      prevValue.filter((_value) => _value !== value)
    );
  };

  return (
    <Modal isOpen={isModalOpen} onClose={toggleModal} title="음식 수정하기">
      <Wrapper>
        <CustomInput
          label="카테고리"
          initialValue={foodTypeKey || ""}
          disabled
        />

        <CustomInput
          label="음식"
          initialValue={foodValue}
          passedHandleChange={(e) => setFoodValue(e)}
          autoFocus
          onKeyDown={handleKeyDown}
        />

        {foodValues.length > 0 && (
          <ListWrapper>
            <ListTitle>음식 목록</ListTitle>

            <FoodList>
              {foodValues.map((value) => (
                <FoodChip key={value}>
                  <FoodChipText>{value}</FoodChipText>

                  <button onClick={() => handleClickDelete(value)}>
                    <ClearText width={12} color="#aeaeaebe" />
                  </button>
                </FoodChip>
              ))}
            </FoodList>
          </ListWrapper>
        )}

        <CustomButton
          label="수정하기"
          onClick={handleClickSave}
          size="lg"
          fullWidth
        />
      </Wrapper>
    </Modal>
  );
}

const Wrapper = styled.div`
  display: grid;
  row-gap: 12px;

  width: 400px;
  padding-top: 20px;
`;

const ListWrapper = styled.section`
  padding: 24px 0px;
`;

const FoodList = styled.ul`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
`;

const ListTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  padding-bottom: 12px;
`;

const FoodChip = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  background-color: ${color.gray200};
  border-radius: 24px;
  padding: 0px 12px;
`;

const FoodChipText = styled.p`
  color: ${color.gray800};
`;
export default EditFoodModal;
