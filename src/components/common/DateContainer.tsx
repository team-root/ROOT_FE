import styled from 'styled-components';
import { DateInput } from './DateInput';
import { colors, font } from '../../theme';

export const DateContainer = () => {
  return (
    <DateContentContainer>
      <DateInput />
      <AndContent>~</AndContent>
      <DateInput />
    </DateContentContainer>
  );
};

const DateContentContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const AndContent = styled.div`
  font: ${font.Heading6};
  color: ${colors.gray[400]};
`;
