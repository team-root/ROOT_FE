import styled from 'styled-components';
import { colors, font } from '../../theme';

type KeywordType = {
  children: string;
};

export const Keyword = ({ children }: KeywordType) => {
  return <KeywordContainer>{children}</KeywordContainer>;
};

const KeywordContainer = styled.div`
  padding: 10px 32px;
  border-radius: 100px;
  border: 0.5px solid ${colors.main[200]};
  color: ${colors.main[200]};
  font: ${font.Caption1};
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
