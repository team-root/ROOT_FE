import styled from "styled-components";
import { colors, font } from "../../theme";
import { useState } from "react";
import { LoginModal } from "../../pages/LoginModal";

type Props = {
  isLogined: boolean;
};

export const LoginBtn = ({ isLogined }: Props) => {
  const [isLoginModalOpen, setLoginModalOpen] = useState<boolean>(false);

  const handleLogin = (id: string, password: string) => {
    console.log("로그인 시도:", id, password);
    setLoginModalOpen(false);
  };

  return (
    <>
      <Container onClick={() => setLoginModalOpen(true)}>
        {isLogined && "logout"}
        {!isLogined && "login"}
      </Container>
      <LoginModal
        isShow={isLoginModalOpen}
        setIsShow={setLoginModalOpen}
        onLogin={handleLogin}
      />
    </>
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
  color: ${colors.gray[300]};
`;
