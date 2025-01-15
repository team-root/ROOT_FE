import styled from "styled-components";
import { colors, font } from "../../theme";

type Props = {
  isLogined: boolean;
};

export const LoginBtn = ({ isLogined }: Props) => {
  return (
    <Container>
      {isLogined && "logout"}
      {!isLogined && "login"}
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
