import styled from 'styled-components';
import { colors, font } from '../../theme';
import { useEffect, useState } from 'react';

interface DayContainerType {
  onWorkDayChange?: (workDay: string[]) => void;
  workDay?: string[];
}

export const DayContainer = ({
  onWorkDayChange = () => {},
  workDay = [],
}: DayContainerType) => {
  const [dayData, setDayData] = useState(() =>
    ['일', '월', '화', '수', '목', '금', '토'].map((day) => ({
      day,
      isCheck: workDay.includes(day),
    }))
  );

  const checkClick = (index: number) => {
    setDayData((prev) => {
      const newDayData = prev.map((data, idx) =>
        idx === index ? { ...data, isCheck: !data.isCheck } : data
      );

      const selectedDays = newDayData //데이터 페이지로 보내주기
        .filter((data) => data.isCheck)
        .map((data) => data.day);
      onWorkDayChange(selectedDays);

      return newDayData;
    });
  };

  useEffect(() => {
    setDayData((prev) =>
      prev.map((data) => ({
        ...data,
        isCheck: workDay.includes(data.day),
      }))
    );
  }, [workDay]);

  return (
    <Container>
      {dayData.map((data, index) => (
        <FakeDate isCheck={data.isCheck} onClick={() => checkClick(index)}>
          {data.day}
        </FakeDate>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
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
