import styled from "@emotion/styled";
import color from "styles/color";

export type Color = "default" | "seconds" | "danger" | "gray";
export type Type = "contained" | "outline" | "none";
export type Size = "sm" | "md" | "lg";

interface CustomButtonProps {
  label: string;
  fullWidth?: boolean;
  onClick: () => void;
  color?: Color;
  type?: Type;
  size?: Size;
}

function CustomButton({
  label,
  fullWidth,
  onClick,
  color = "default",
  size = "md",
  type = "contained",
}: CustomButtonProps) {
  const buttonProps = { color, fullWidth, type, size };

  return (
    <Button buttonProps={buttonProps} onClick={onClick}>
      {label}
    </Button>
  );
}

const Button = styled.button<{
  buttonProps: Omit<CustomButtonProps, "label" | "onClick">;
}>`
  white-space: nowrap;
  width: ${({ buttonProps }) => buttonProps.fullWidth && "100%"};
  background-color: ${({ buttonProps }) => {
    if (buttonProps.type === "contained") {
      switch (buttonProps.color) {
        case "default":
          return color.default40;
        case "seconds":
          return color.seconds30;
        case "danger":
          return color.danger30;
        case "gray":
          return color.gray300;
      }
    }
    return "transparent";
  }};
  font-size: ${({ buttonProps }) => {
    switch (buttonProps.size) {
      case "lg":
        return "18px";
      case "md":
        return "16px";
      case "sm":
        return "14px";
    }
  }};
  padding: ${({ buttonProps }) => {
    switch (buttonProps.size) {
      case "lg":
        return "8px 32px";
      case "md":
        return "4px 28px";
      case "sm":
        return "4px 20px";
    }
  }};
  font-weight: 500;
  color: ${({ buttonProps }) => {
    switch (buttonProps.color) {
      case "default":
        return color.default100;
      case "seconds":
        return color.seconds100;
      case "danger":
        return color.danger100;
      case "gray":
        return color.gray500;
    }
  }};
  border-radius: 10px;

  border: ${({ buttonProps }) => {
    switch (buttonProps.type) {
      case "outline":
        switch (buttonProps.color) {
          case "default":
            return `1px solid ${color.default50}`;
          case "seconds":
            return `1px solid ${color.seconds50}`;
          case "danger":
            return `1px solid ${color.danger50}`;
          case "gray":
            return `1px solid ${color.gray50}`;
          default:
            return `1px solid ${color.default50}`;
        }
      default:
        return "none";
    }
  }};

  :hover {
    background-color: ${({ buttonProps }) => {
      switch (buttonProps.color) {
        case "default":
          return color.default20;
        case "seconds":
          return color.seconds20;
        case "danger":
          return color.danger20;
        case "gray":
          return color.gray200;
      }
    }};

    color: ${({ buttonProps }) => {
      switch (buttonProps.type) {
        case "contained":
          switch (buttonProps.color) {
            case "default":
              return color.default60;
            case "seconds":
              return color.seconds60;
            case "danger":
              return color.dander60;
            case "gray":
              return color.gray400;
            default:
              return color.default60;
          }
        default:
          switch (buttonProps.color) {
            case "default":
              return color.default100;
            case "seconds":
              return color.seconds100;
            case "danger":
              return color.danger100;
            case "gray":
              return color.gray100;
          }
      }
    }};

    border: none;
  }

  transition: all;
  transition-timing-function: ease;
  transition-duration: 0.25s;
`;

export default CustomButton;
