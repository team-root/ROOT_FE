import styled from "styled-components";
import { colors, font } from "../theme";
import { Button, Inputs } from "../components";
import { useRef, useState } from "react";

type LoginModalProps = {
  isShow?: boolean;
  setIsShow?: React.Dispatch<React.SetStateAction<boolean>>;
  onLogin?: (id: string, password: string) => void;
};

export const LoginModal = ({ isShow, setIsShow, onLogin }: LoginModalProps) => {
  const backRef = useRef(null);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const backClick = (e: React.MouseEvent) => {
    if (backRef.current === e.target) setIsShow && setIsShow(false);
  };

  return (
    isShow && (
      <ModalBackground onClick={backClick} ref={backRef}>
        <Content>
          <Title>로그인</Title>
          <Description>이용하려면 로그인하세요</Description>
          <InputContainer>
            <InputBox>
              아이디
              <Inputs
                placeholder="아이디를 입력하세요"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </InputBox>
            <InputBox>
              비밀번호
              <Inputs
                isLogin
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputBox>
          </InputContainer>
          <ButtonContainer>
            <LoginButton>로그인</LoginButton>
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
