import styled from 'styled-components';
import { Button, DateContainer, Inputs, Title } from '../components';
import { colors } from '../theme';
import { useState } from 'react';

export const CreateSchedule = () => {
  const [inputs, setInputs] = useState<{
    title: string;
    date: { startDate: string; endDate: string };
  }>({ title: '', date: { startDate: '', endDate: '' } });

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleDateChange = (field: 'startDate' | 'endDate', value: string) => {
    setInputs((prev) => ({ ...prev, date: { ...prev.date, [field]: value } }));
  };

  console.log(inputs);

  return (
    <CreateScheduleContainer>
      <BtnContainer>
        <ContentContainer>
          <Title>일정 생성</Title>
          <Inputs
            label="제목"
            placeholder="제목을 입력하세요"
            onChange={handleTitleChange}
          />
          <DateContainer label="날짜" onDateChange={handleDateChange} />
        </ContentContainer>
        <Button backgroundColor={colors.gray[550]}>생성하기</Button>
      </BtnContainer>
    </CreateScheduleContainer>
  );
};

const CreateScheduleContainer = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BtnContainer = styled.div`
  width: 840px;
  display: flex;
  flex-direction: column;
  align-items: end;
  height: 660px;
  justify-content: space-between;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: start;
  width: 100%;
`;
