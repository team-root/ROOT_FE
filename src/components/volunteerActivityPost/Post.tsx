import styled from 'styled-components';
import { colors, font } from '../../theme';

type PostType = {
  children: string;
  key: number;
};

export const Post = ({ children, key }: PostType) => {
  return <PostContainer key={key}>{children}</PostContainer>;
};

const PostContainer = styled.div`
  width: 100%;
  height: 140px;
  border-radius: 20px;
  padding-left: 60px;
  background-color: ${colors.gray[550]};
  color: ${colors.gray[200]};
  font: ${font.Heading5};
  display: flex;
  align-items: center;
`;
