import styled from "styled-components";
import { colors, font } from "../../theme";

type Props = {
  isLogined: boolean;
};

export const LoginBtn = ({ isLogined }: Props) => {
  return (
    <Container>
      {isLogined ? <Text>logout</Text> : <Text>login</Text>}
    </Container>
  );
};

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 46px;
  width: 140px;
  height: 46px;
  border: 0.5px solid ${colors.gray[300]};
  border-radius: 100px;
  background-color: transparent;
`;

const Text = styled.p`
  font-size: ${font.Body3.fontSize};
  font-weight: ${font.Body3.fontWeight};
  line-height: ${font.Body3.lineHeight};
  color: ${colors.gray[300]};
`;
