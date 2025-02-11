import styled from 'styled-components';
import { colors } from '../theme';
import { Button, Inputs, Title } from '../components';
import { useRef, useState } from 'react';

type VolunteerHoursGrantedType = {
  setIsShow?: React.Dispatch<React.SetStateAction<boolean>>; //다른 페이지에서 버튼 클릭 시 창 열림 백그라운드 클릭 시 창 닫힘 설정
  isShow?: boolean;
  onClick?: () => void;
};

export const VolunteerHoursGrantedModal = ({
  onClick,
  setIsShow,
  isShow,
}: VolunteerHoursGrantedType) => {
  const [datas, setDatas] = useState<{
    detail: string;
    time: number;
    place: string;
  }>({
    detail: '',
    time: null,
    place: '',
  });

  const backRef = useRef();

  const backClick = (e: MouseEvent) => {
    if (backRef.current === e.target) setIsShow(false);
  };

  const handleDetailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDatas((prev) => ({
      ...prev,
      detail: value,
    }));
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDatas((prev) => ({
      ...prev,
      time: value,
    }));
  };

  const handlePlaceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDatas((prev) => ({
      ...prev,
      place: value,
    }));
  };

  return (
    isShow && (
      <ModalContainer ref={backRef} onClick={backClick}>
        <ModalContent>
          <TitleContainer>
            <Title>봉사시간 부여</Title>
            <BtnContainer>
              <InputContainer>
                <Inputs
                  label="활동내용"
                  placeholder="활동내용을 입력하세요"
                  value={datas.detail}
                  onChange={handleDetailChange}
                />
                <Inputs
                  label="봉사시간"
                  placeholder="봉사시간을 입력하세요"
                  value={datas.time}
                  onChange={handleTimeChange}
                />
                <Inputs
                  label="활동장소"
                  placeholder="활동장소를 입력하세요"
                  value={datas.place}
                  onChange={handlePlaceChange}
                />
              </InputContainer>
              <Button backgroundColor={colors.gray[550]} onClick={onClick}>
                부여하기
              </Button>
            </BtnContainer>
          </TitleContainer>
        </ModalContent>
      </ModalContainer>
    )
  );
};

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 48px;
  width: 525px;
`;

const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 64px;
  align-items: end;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(36, 36, 36, 0.28);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 640px;
  height: 640px;
  border-radius: 20px;
  border: 1px solid ${colors.gray[400]};
  background-color: ${colors.gray[550]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;
