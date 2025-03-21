import React from "react";
import styled from "styled-components";
import { colors, font } from "../../theme";

interface Props {
  titleText: string;
  text: string;
}

export const Notification = ({ titleText, text }: Props) => {
  return (
    <Container>
      <Title>{titleText}</Title>
      {text}
    </Container>
  );
};

const Container = styled.div`
  color: #fff;
  ${font.Caption2}
  width: 728px;
  border-bottom: 1px solid ${colors.gray[400]};
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 12px;
`;
const Title = styled.p`
  ${font.Body1}
`;
