import styled from "@emotion/styled";
import React, { useState } from "react";
import { Link } from "react-router-dom";

type HeaderNavItemProps =
  | {
      label: string;
      to: string;
      children?: undefined;
    }
  | {
      label: string;
      to?: undefined;
      children: React.ReactNode;
    };

function HeaderNavItem({ label, ...props }: HeaderNavItemProps) {
  const [isOpenSubNav, setIsOpenSubNav] = useState<boolean>(false);
  const to = props.to;

  const openSubNav = () => setIsOpenSubNav(true);
  const closeSubNav = () => setIsOpenSubNav(false);

  return (
    <Wrapper onMouseEnter={openSubNav} onMouseLeave={closeSubNav}>
      {typeof to === "undefined" ? (
        <>
          <Label>{label}</Label>

          <HeaderSubNav onClick={closeSubNav} isOpenSubNav={isOpenSubNav}>
            {props.children}
          </HeaderSubNav>
        </>
      ) : (
        <Link to={to}>
          <Label>{label}</Label>
        </Link>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: 64px;
  padding: 0px 8px;
  align-items: center;
  cursor: pointer;
  transition: color 120ms;
`;

const Label = styled.h4`
  font-size: 15px;
  font-weight: 500;
`;

const HeaderSubNav = styled.ul<{ isOpenSubNav: boolean }>`
  padding: 0.5rem 0;
  position: absolute;
  background-color: #fff;
  border-radius: 5px;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%) translateY(100%);
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  opacity: ${({ isOpenSubNav }) => (isOpenSubNav ? "1" : "0")};
  transition: all 0.25s;
  transition-timing-function: ease;
`;

export default React.memo(HeaderNavItem);
