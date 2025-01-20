import styled from 'styled-components';
import { colors, font } from '../../theme';

type VolunteerHoursContentType = {
  volunteerAct: string;
  volunteerTime: number;
};

export const VolunteerHoursContent = ({
  volunteerAct,
  volunteerTime,
}: VolunteerHoursContentType) => {
  return (
    <VolunteerTimeContent>
      <VolunteerAct>{volunteerAct}</VolunteerAct>
      <VolunteerTime>+ {volunteerTime}시간</VolunteerTime>
    </VolunteerTimeContent>
  );
};

const VolunteerTimeContent = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0 22px;
  align-items: center;
  border-radius: 10px;
  background-color: ${colors.gray[550]};
`;

const VolunteerAct = styled.div`
  font: ${font.Body3};
  color: ${colors.gray[100]};
`;

const VolunteerTime = styled.div`
  font: ${font.Body3};
  color: ${colors.main[100]};
`;
