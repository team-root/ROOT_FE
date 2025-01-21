import styled from 'styled-components';
import { colors, font } from '../../theme';
import { useEffect, useState } from 'react';

interface DayContainerType {
  onWorkDayChange?: (workDay: string[]) => void;
}

export const DayContainer = ({ onWorkDayChange }: DayContainerType) => {
  const [dayData, setDayData] = useState<{ day: string; isCheck: boolean }[]>([
    { day: '일', isCheck: false },
    { day: '월', isCheck: false },
    { day: '화', isCheck: false },
    { day: '수', isCheck: false },
    { day: '목', isCheck: false },
    { day: '금', isCheck: false },
    { day: '토', isCheck: false },
  ]);

  const checkClick = (index: number) => {
    setDayData((prev) =>
      prev.map((data, idx) =>
        idx === index ? { ...data, isCheck: !data.isCheck } : data
      )
    );
  };

  useEffect(() => {
    const workDay = dayData
      .filter((data) => data.isCheck)
      .map((data) => data.day);
    onWorkDayChange(workDay);
  }, [dayData]);
  return (
    <Container>
      {dayData.map((data, index) => (
        <FakeDate
          isCheck={data.isCheck}
          onClick={() => checkClick(index, data.isCheck)}
        >
          {data.day}
        </FakeDate>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 16px;
`;
const FakeDate = styled.button<{ isCheck: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid
    ${({ isCheck }) => (isCheck ? colors.main[100] : colors.gray[400])};
  background-color: ${({ isCheck }) =>
    isCheck ? colors.main[100] : colors.gray[550]};
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${font.Caption2};
  color: ${({ isCheck }) => (isCheck ? colors.gray[100] : colors.gray[300])};
  cursor: pointer;
`;
