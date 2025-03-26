import styled from 'styled-components';
import { colors } from '../theme';
import { Button, DateContainer, Inputs, Title } from '../components';
import { useState } from 'react';

export const EditSchedule = () => {
  const [datas, setDatas] = useState<{
    title: string;
    applicationPeriod: { startDate: string; endDate: string };
  }>({
    title: '환경지킴이 시간 변경 안내',
    applicationPeriod: {
      startDate: '2024-10-23',
      endDate: '2024-10-23',
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
          <Title>일정 수정</Title>
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
        <Button backgroundColor={colors.gray[550]}>수정하기</Button>
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
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
`;

const ScheduleContainer = styled.div`
  padding: 60px 280px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
