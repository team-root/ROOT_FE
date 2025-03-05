import styled from "styled-components";
import { colors, font } from "../../theme";
import { useState } from "react";

type StudentProps = {
  name: string;
  grade: number;
  volunteerTime: number;
  isSelected: boolean;
  onClick: () => void;
};

export const Students = ({
  name,
  grade,
  volunteerTime,
  isSelected,
  onClick,
}: StudentProps) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <StudentContainer isSelected={isSelected} onClick={handleClick}>
      <StudentLeftBox>
        {name}
        <Grade>{grade}학년</Grade>
      </StudentLeftBox>
      {volunteerTime}시간
    </StudentContainer>
  );
};

const StudentContainer = styled.div<{ isSelected: boolean }>`
  width: 1000px;
  height: 158px;
  border-radius: 20px;
  background-color: ${colors.gray[550]};
  padding: 45px 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${font.Heading5};
  color: #fff;
  outline: ${({ isSelected }) =>
    isSelected ? `3px solid ${colors.main[200]}` : "none"};
  box-sizing: border-box;
`;

const StudentLeftBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  ${font.Heading6};
  color: ${colors.gray[200]};
`;

const Grade = styled.div`
  ${font.Caption3};
  color: ${colors.main[200]};
  border: 1px solid ${colors.main[200]};
  border-radius: 12px;
  width: 64px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;
