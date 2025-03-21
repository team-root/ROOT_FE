import styled from "styled-components";
import { colors, font } from "../../theme";
import React, { useState } from "react";
import { DownArrow } from "../../assets";

interface DropDownProps {
  roles: string[];
}

export const RolesDropDown = ({ roles }: DropDownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(roles[0]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectDropdown = (role: string) => {
    setSelected(role);
    setIsDropdownOpen(false);
    console.log(role); // 역할 부여 api
  };

  return (
    <>
      <Container onClick={toggleDropdown}>
        <DropdownText>{selected}</DropdownText>
        <img src={DownArrow} alt="버튼" />
      </Container>
      {isDropdownOpen && (
        <DropdownMenu>
          {roles.map((role) => (
            <DropdownItem key={role} onClick={() => selectDropdown(role)}>
              <DropdownText>{role}</DropdownText>
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </>
  );
};

const Container = styled.div`
  position: relative;
  padding: 15px 18px 15px 50px;
  border: 1px solid ${colors.gray[400]};
  border-radius: 10px;
  background-color: ${colors.gray[550]};
  display: flex;
  align-items: center;
  gap: 28px;
  cursor: pointer;
`;

const DropdownText = styled.p`
  ${font.Body4};
  color: #fff;
`;

const DropdownMenu = styled.div`
  position: absolute;
  width: 160px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.gray[550]};
  border-radius: 10px;
  border: 1px solid ${colors.gray[400]};
  z-index: 1000;
`;

const DropdownItem = styled.div`
  width: 158px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.gray[550]};
  cursor: pointer;

  &:hover {
    background-color: ${colors.main[100]};
  }
`;
