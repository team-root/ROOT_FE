import styled from 'styled-components';
import { colors, font } from '../../theme';

type TitleType = {
  children: string;
};

export const Title = ({ children }: TitleType) => {
  return <TitleContainer>{children}</TitleContainer>;
};

const TitleContainer = styled.div`
  font: ${font.Heading5};
  color: ${colors.gray[200]};
`;
