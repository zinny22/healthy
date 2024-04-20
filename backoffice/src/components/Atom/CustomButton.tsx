import styled from "@emotion/styled";

interface CustomButtonProps {
  label: string;
  color?: string;
  fullWidth?: boolean;
  onClick: () => void;
}
function CustomButton({ label, color, fullWidth, onClick }: CustomButtonProps) {
  const buttonProps = { color, fullWidth };

  return (
    <Button buttonProps={buttonProps} onClick={onClick}>
      {label}
    </Button>
  );
}

const Button = styled.button<{
  buttonProps: Omit<CustomButtonProps, "label" | "onClick">;
}>`
  background-color: rgba(37, 145, 253, 0.5);
  font-size: 16px;
  font-weight: 500;
  color: rgba(0, 112, 240, 1);
  border-radius: 10px;
  height: 48px;
  border: none;
  :hover {
    background-color: rgba(37, 145, 253, 0.2);
    color: rgba(0, 112, 240, 0.6);
  }
  transition: all;
  transition-timing-function: ease;
  transition-duration: 0.25s;
`;

export default CustomButton;
