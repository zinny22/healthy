import styled from "@emotion/styled";
import { ReactComponent as ClearText } from "assets/svgs/clearText.svg";
import { ComponentProps, useEffect, useState } from "react";
import { Color, Type } from "./CustomButton";

export type CustomInputProps = ComponentProps<"input"> & {
  label?: string;
  initialValue: string;
  required?: boolean;
  passedHandleChange?: (
    value: string,
    e?: React.ChangeEvent<HTMLInputElement>
  ) => void;
  placeHolder?: string;
  color?: Color;
  inputType?: Type;
};

function CustomInput({
  initialValue,
  label,
  placeHolder,
  passedHandleChange,
  required = false,
  color,
  inputType,
  ...props
}: CustomInputProps) {
  const [value, setValue] = useState(initialValue || "");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);

    if (passedHandleChange) {
      passedHandleChange(newValue, e);
    }
  };

  const handleClickClear = () => {
    if (passedHandleChange) {
      passedHandleChange("");
    }
    setValue("");
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    if (initialValue !== "") return;

    setValue(initialValue);
  }, [initialValue]);

  return (
    <Wrapper>
      <Label isFocused={value === "" ? isFocused : true}>
        {label}
        {required && <Required>*</Required>}
      </Label>

      <InputAndClearButton>
        <Input
          placeholder={placeHolder}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {value !== "" && (
          <button
            onClick={(event) => {
              event.stopPropagation();
              handleClickClear();
            }}
          >
            <ClearText width={12} color="#aeaeaebe" />
          </button>
        )}
      </InputAndClearButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #aeaeae5a;
  border: none;
  border-radius: 10px;
  padding: 4px 12px;

  :hover {
    background-color: #e1e1e15a;
  }
  transition: all;
  transition-timing-function: ease;
  transition-duration: 0.25s;
  width: 100%;
`;

const Label = styled.div<{ isFocused: boolean }>`
  font-size: 14px;
  font-weight: 500;
  color: #646464;
  transform: translateY(${({ isFocused }) => (isFocused ? "1px" : "11px")});
  transition: all;
  transition-timing-function: ease;
  transition-duration: 0.25s;
  width: fit-content;
`;

const Required = styled.span`
  color: red;
`;

const InputAndClearButton = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  background-color: transparent;
  width: 100%;
  :focus {
    outline: none;
  }
`;

export default CustomInput;
