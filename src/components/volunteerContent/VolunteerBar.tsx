import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { colors, font } from "../../theme";

const menuItems = [
  { name: "봉사 내용", path: "/" },
  { name: "학생 신청 내역", path: "/applications" },
  { name: "역할 부여하기", path: "/assign-role" },
];

export const VolunteerBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <NavContainer>
      {menuItems.map((item, index) => (
        <React.Fragment key={item.name}>
          <NavItem
            isSelected={location.pathname === item.path}
            onClick={() => navigate(item.path)}
          >
            {item.name}
          </NavItem>
          {index !== menuItems.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
`;

const NavItem = styled.div<{ isSelected: boolean }>`
  ${font.Body1}
  cursor: pointer;
  padding: 10px 20px;
  transition: color 0.3s ease-in-out;
  color: ${({ isSelected }) =>
    isSelected ? colors.main[400] : colors.gray[100]};
`;

const Divider = styled.div`
  height: 16px;
  width: 1px;
  background-color: ${colors.gray[400]};
`;
