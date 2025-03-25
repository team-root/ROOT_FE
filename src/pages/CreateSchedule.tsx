import styled from 'styled-components';
import { colors } from '../theme';
import { Button, DateContainer, Inputs, Title } from '../components';
import { useState } from 'react';

export const CreateSchedule = () => {
  const [datas, setDatas] = useState<{
    title: string;
    applicationPeriod: { startDate: string; endDate: string };
  }>({
    title: '',
    applicationPeriod: {
      startDate: '',
      endDate: '',
    },
  });

  const handleApplicationPeriodChange = (
    field: 'startDate' | 'endDate',
    value: string
  ) => {
    setDatas((prev) => ({
      ...prev,
      applicationPeriod: {
        ...prev.applicationPeriod,
        [field]: value,
      },
    }));
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDatas((prev) => ({
      ...prev,
      title: value,
    }));
  };

  return (
    <ScheduleContainer>
      <ScheduleContent>
        <ContentContainer>
          <Title>일정 생성</Title>
          <Inputs
            label="제목"
            placeholder="제목을 입력하세요"
            value={datas.title}
            onChange={handleTitleChange}
          />
          <DateContainer
            label="신청기간"
            onDateChange={handleApplicationPeriodChange}
            value={datas.applicationPeriod}
          />
        </ContentContainer>
        <Button backgroundColor={colors.gray[550]}>생성하기</Button>
      </ScheduleContent>
    </ScheduleContainer>
  );
};

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: start;
`;

const ScheduleContent = styled.div`
  width: 840px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
`;

const ScheduleContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
