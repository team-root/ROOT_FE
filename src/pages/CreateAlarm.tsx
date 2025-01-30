import styled from 'styled-components';
import { colors, font } from '../theme';
import { Button, DateContainer, Inputs, Title } from '../components';
import { useState } from 'react';

export const CreateAlarm = () => {
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
    <AlarmContainer>
      <AlarmContent>
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
            startDate={datas.applicationPeriod.startDate}
            endDate={datas.applicationPeriod.endDate}
          />
        </ContentContainer>
        <Button backgroundColor={colors.gray[550]}>생성하기</Button>
      </AlarmContent>
    </AlarmContainer>
  );
};

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: start;
`;

const AlarmContent = styled.div`
  width: 840px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  margin-top: 80px;
`;

const AlarmContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;
