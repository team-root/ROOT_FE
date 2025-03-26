import { colors, font } from "../../theme";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { LoginModal } from "../../pages/LoginModal";
import { getCookie, removeCookie } from "../../apis/cookie";

type Props = {
  isLogined: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoginBtn = ({ isLogined, setIsLogin }: Props) => {
  const [isLoginModalOpen, setLoginModalOpen] = useState<boolean>(false);

  const handleClick = (isLogined: boolean) => {
    if (isLogined) {
      setIsLogin(false);
      removeCookie("accessToken");
      removeCookie("refreshToken");
    } else {
      setLoginModalOpen(true);
    }
  };

  useEffect(() => {
    if (getCookie("accessToken")) {
      setIsLogin(true);
    }
  });

  return (
    <>
      <Container onClick={() => handleClick(isLogined)}>
        {isLogined && "logout"}
        {!isLogined && "login"}
      </Container>
      <LoginModal
        isShow={isLoginModalOpen}
        setIsShow={setLoginModalOpen}
        setIsLogin={setIsLogin}
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
  ${font.Body3};
`;
