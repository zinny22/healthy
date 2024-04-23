import styled from "@emotion/styled";
import color from "styles/color";

export type Color = "default" | "seconds" | "danger";
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
  background-color: ${({ buttonProps }) => {
    if (buttonProps.type === "contained") {
      switch (buttonProps.color) {
        case "default":
          return color.default40;
        case "seconds":
          return color.seconds30;
        case "danger":
          return color.danger30;
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
        return "0px 12px";
      case "md":
        return "0px 8px";
      case "sm":
        return "0px 4px";
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
    }
  }};
  border-radius: 10px;
  height: ${({ buttonProps }) => {
    switch (buttonProps.size) {
      case "lg":
        return "52px";
      case "md":
        return "48px";
      case "sm":
        return "44px";
    }
  }};

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
