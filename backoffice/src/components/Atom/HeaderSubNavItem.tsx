import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import color from "styles/color";

interface HeaderSubNavItemProps {
  label: string;
  to: string;
}

function HeaderSubNavItem({ label, to }: HeaderSubNavItemProps) {
  return (
    <Wrapper>
      <Link to={to}>{label}</Link>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  > a {
    display: block;
    padding: 0.5rem 1rem;
    width: 144px;
    font-size: 15px;
    font-weight: 500;
    text-align: center;

    &:hover {
      background-color: ${color.default20};
      color: ${color.default100};
    }
  }
`;

export default React.memo(HeaderSubNavItem);
