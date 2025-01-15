import styled from 'styled-components';
import { colors, font } from '../theme';
import { Button } from '../components';
import { useRef, useState } from 'react';

type ConfirmType = {
  message?: string;
  setIsShow?: React.Dispatch<React.SetStateAction<boolean>>; //다른 페이지에서 버튼 클릭 시 창 열림 백그라운드 클릭 시 창 닫힘 설정
  isShow?: boolean;
};

export const ConfirmModal = ({ message, setIsShow, isShow }: ConfirmType) => {
  const backRef = useRef();

  const backClick = (e: MouseEvent) => {
    if (backRef.current === e.target) setIsShow(false);
  };
  return (
    isShow && (
      <ModalBackground onClick={backClick} ref={backRef}>
        <Content>
          <ContentContainer>
            <ConfirmMsg>{message}</ConfirmMsg>
            <BtnContainer>
              <Button color={colors.main[200]} borderColor={colors.main[200]}>
                네
              </Button>
              <Button color={colors.error} borderColor={colors.error}>
                아니오
              </Button>
            </BtnContainer>
          </ContentContainer>
        </Content>
      </ModalBackground>
    )
  );
};

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgb(36, 36, 36, 0.28);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 640px;
  height: 320px;
  border-radius: 20px;
  border: 1px solid ${colors.gray[400]};
  background-color: ${colors.gray[550]};
`;

const ConfirmMsg = styled.div`
  font: ${font.Heading5};
  color: ${colors.gray[100]};
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 20px;
`;
