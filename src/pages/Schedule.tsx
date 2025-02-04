import styled from 'styled-components';
import { CalendarContainer } from '../components';
import { useState } from 'react';

export const Schedule = () => {
  const [datas, setDatas] = useState<
    { title: string; startDate: string; endDate: string }[]
  >([
    {
      title: '환경지킴이',
      startDate: '2024-12-23',
      endDate: '2024-12-30',
    },
    {
      title: '2',
      startDate: '2024-12-23',
      endDate: '2024-12-23',
    },
    {
      title: '3',
      startDate: '2024-12-23',
      endDate: '2024-12-31',
    },
  ]);

  return (
    <ScheduleContainer>
      <CalendarContainer data={datas} />
    </ScheduleContainer>
  );
};

const ScheduleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin: 100px 0 120px 0;
`;
