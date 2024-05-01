import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactComponent as Close } from "assets/svgs/close.svg";
import { ReactNode } from "react";

interface ModalProps {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

function Modal({ title, isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <ModalWrapper isOpen={isOpen}>
      <ModalContent>
        <TitleAndClose>
          {title ? <Title>{title}</Title> : <p></p>}
          <CloseButton onClick={onClose}>
            <Close width={16} color="black" />
          </CloseButton>
        </TitleAndClose>

        {children}
      </ModalContent>
      <Background isOpen={isOpen} onClick={onClose} />
    </ModalWrapper>
  );
}
const ModalWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -100px;
  animation: ${({ isOpen }) => (isOpen ? fadeIn : fadeOut)} 0.3s ease-in-out;
`;

const Background = styled.div<{ isOpen: boolean }>`
  animation: ${({ isOpen }) => (isOpen ? fadeIn : fadeOut)} 0.3s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  z-index: 10;
  position: relative;
`;

const TitleAndClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

const CloseButton = styled.button`
  margin-top: -10px;
`;

export default Modal;
