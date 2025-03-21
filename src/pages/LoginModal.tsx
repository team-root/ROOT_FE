import styled from "styled-components";
import { colors, font } from "../theme";
import { Button, Inputs } from "../components";
import { useEffect, useRef, useState } from "react";
import { login } from "../apis/login";

type LoginModalProps = {
  isShow?: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoginModal = ({
  isShow,
  setIsShow,
  setIsLogin,
}: LoginModalProps) => {
  const backRef = useRef(null);
  const [xquareId, setXquareId] = useState("");
  const [password, setPassword] = useState("");
  const [isFail, setIsFail] = useState<boolean>(false);

  const backClick = (e: React.MouseEvent) => {
    if (backRef.current === e.target) setIsShow && setIsShow(false);
    setIsFail(false);
  };

  const handleLogin = async () => {
    try {
      const response = await login({ xquareId, password, deviceToken: null });
      console.log("로그인 성공", response);
      setIsShow(false);
      setIsFail(false);
      setIsLogin(true);
      setPassword("");
      setXquareId("");
    } catch (error) {
      console.log("로그인 실패", error);
      setIsFail(true);
    }
  };

  useEffect(() => {
    console.log(xquareId, password);
  }, [xquareId, password]);

  return (
    isShow && (
      <ModalBackground onClick={backClick} ref={backRef}>
        <Content>
          <Title>로그인</Title>
          <Description>이용하려면 로그인하세요</Description>
          <InputContainer>
            <InputBox>
              <Inputs
                label="아이디"
                placeholder="아이디를 입력하세요"
                value={xquareId}
                onChange={(e) => setXquareId(e.target.value)}
              />
            </InputBox>
            <InputBox>
              <Inputs
                label="비밀번호"
                isLogin={true}
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isfail={isFail}
              />
              {isFail && (
                <RedText>
                  등록되지 않은 아이디이거나 아이디 또는 비밀번호가
                  잘못되었습니다.
                </RedText>
              )}
            </InputBox>
          </InputContainer>
          <ButtonContainer>
            <LoginButton onClick={handleLogin}>로그인</LoginButton>
          </ButtonContainer>
        </Content>
      </ModalBackground>
    )
  );
};

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(36, 36, 36, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 600px;
  height: 600px;
  padding: 93px 79px;
  border-radius: 12px;
  background-color: ${colors.gray[550]};
  box-sizing: border-box;
`;

const Title = styled.h2`
  font: ${font.Heading3};
  color: ${colors.gray[100]};
  margin-bottom: 10px;
`;

const Description = styled.p`
  font: ${font.Caption2};
  color: ${colors.gray[300]};
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
  width: 100%;
  margin-top: 20px;
  position: relative;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LoginButton = styled.button`
  border-radius: 8px;
  padding: 13px 200px;
  ${font.Caption1};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.main[100]};
  color: ${colors.gray[100]};
  box-sizing: border-box;
  margin-top: 61px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  ${font.Caption1};
  color: ${colors.gray[300]};
`;

const RedText = styled.p`
  color: ${colors.error};
  ${font.Caption2};
  font-weight: 700;
  position: absolute;
  bottom: -25px;
`;
