import styled from 'styled-components';
import { colors, font } from '../theme';
import { VolunteerHoursContent } from '../components';
import { useRef } from 'react';

type VolunteerHoursType = {
  setIsShow?: React.Dispatch<React.SetStateAction<boolean>>; //다른 페이지에서 버튼 클릭 시 창 열림 백그라운드 클릭 시 창 닫힘 설정
  isShow?: boolean;
};

export const VolunteerHoursModal = ({
  setIsShow,
  isShow,
}: VolunteerHoursType) => {
  const datas = [
    {
      totalVoluteerTime: 100,
      volunteerList: [
        {
          volunteerAct: '환경지킴이',
          volunteerTime: 24,
        },
        {
          volunteerAct: '환경지킴이',
          volunteerTime: 20,
        },
        {
          volunteerAct: '환경지킴이',
          volunteerTime: 30,
        },
        {
          volunteerAct: '환경지킴이',
          volunteerTime: 30,
        },
        {
          volunteerAct: '환경지킴이',
          volunteerTime: 30,
        },
        {
          volunteerAct: '환경지킴이',
          volunteerTime: 30,
        },
        {
          volunteerAct: '환경지킴이',
          volunteerTime: 30,
        },
        {
          volunteerAct: '환경지킴이',
          volunteerTime: 30,
        },
      ],
    },
  ];

  const backRef = useRef();

  const backClick = (e: MouseEvent) => {
    if (backRef.current === e.target) setIsShow(false);
  };

  return (
    isShow && (
      <ModalContainer ref={backRef} onClick={backClick}>
        <ModalContent>
          <AllTimeContainer>
            <AllTime>{datas[0].totalVoluteerTime}시간</AllTime>
            <AllTimeTitle>총 봉사활동 시간</AllTimeTitle>
          </AllTimeContainer>
          <VolunteerTimeContainer>
            {datas[0].volunteerList.map((data) => (
              <VolunteerHoursContent
                volunteerAct={data.volunteerAct}
                volunteerTime={data.volunteerTime}
              />
            ))}
          </VolunteerTimeContainer>
        </ModalContent>
      </ModalContainer>
    )
  );
};

const VolunteerTimeContainer = styled.div`
  width: 500px;
  height: 300px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
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
  width: 590px;
  height: 580px;
  border-radius: 20px;
  border: 1px solid ${colors.gray[400]};
  background-color: ${colors.gray[600]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const AllTimeContainer = styled.div`
  width: 500px;
  height: 90px;
  background-color: transparent;
  padding: 23px 0 23px 23px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: start;
  justify-content: center;
`;

const AllTime = styled.div`
  font: ${font.Heading2};
  color: ${colors.gray[100]};
`;

const AllTimeTitle = styled.div`
  font: ${font.Caption2};
  color: ${colors.gray[300]};
`;
