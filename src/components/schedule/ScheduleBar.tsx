import styled from 'styled-components';
import { colors, font } from '../../theme';

type BarType = {
  children: React.ReactNode;
  $start: boolean;
  $end: boolean;
};

export const ScheduleBar = ({ children, $end, $start }: BarType) => {
  return (
    <BarContainer $start={$start} $end={$end}>
      {$start ? children : null}
    </BarContainer>
  );
};

const BarContainer = styled.div<{ $start: boolean; $end: boolean }>`
  height: 24px;
  border-top-left-radius: ${({ $start }) => ($start ? '4px' : '0')};
  border-bottom-left-radius: ${({ $start }) => ($start ? '4px' : '0')};
  border-top-right-radius: ${({ $end }) => ($end ? '4px' : '0')};
  border-bottom-right-radius: ${({ $end }) => ($end ? '4px' : '0')};
  background-color: ${colors.main[200]};
  color: ${colors.gray[100]};
  font: ${font.Caption3};
  padding-left: 7px;
  display: flex;
  align-items: center;
  justify-content: start;
`;
