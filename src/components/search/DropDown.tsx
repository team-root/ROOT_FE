import styled from "styled-components";
import { colors, font } from "../../theme";
import React, { useState } from "react";
import { DownArrow } from "../../assets";

interface filterProps {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const DropDown = ({ setFilter }: filterProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("학년순");

  const dropdowns: string[] = [
    "학년순",
    "1-1",
    "1-2",
    "1-3",
    "1-4",
    "2-1",
    "2-2",
    "2-3",
    "2-4",
    "3-1",
    "3-2",
    "3-3",
    "3-4",
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectDropdown = (x: string) => {
    setSelected(x);
    setFilter(x);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <Container onClick={toggleDropdown}>
        <DropdownText>{selected}</DropdownText>
        <img src={DownArrow} alt="버튼" />
      </Container>
      {isDropdownOpen && (
        <DropdownMenu>
          {dropdowns
            .filter((x) => x !== selected)
            .map((item) => (
              <DropdownItem key={item} onClick={() => selectDropdown(item)}>
                <DropdownText>{item}</DropdownText>
              </DropdownItem>
            ))}
        </DropdownMenu>
      )}
    </>
  );
};

const Container = styled.div`
  position: relative;
  width: 160px;
  height: 50px;
  border: 1px solid ${colors.gray[400]};
  border-radius: 10px;
  background-color: ${colors.gray[550]};
  display: flex;
  align-items: center;
  padding-left: 55px;
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
