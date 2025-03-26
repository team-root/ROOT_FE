import styled from 'styled-components';
import { Button } from '../components';
import { colors, font } from '../theme';
import { useState } from 'react';
import { ConfirmModal } from './ConfirmModal';
import { useNavigate } from 'react-router-dom';

export const ViewScheduleDetails = () => {
  const [datas, setDatas] = useState<{
    startDate: string;
    endDate: string;
    content: string;
  }>({
    startDate: '12/24',
    endDate: '12/24',
    content: '환경 지킴이',
  });
  const [isShowDel, setIsShowDel] = useState<boolean>(false);
  const navigate = useNavigate();

  const editClick = () => {
    navigate('/edit-schedule');
  };

  const delClick = () => {
    setIsShowDel(true);
  };

  const delYesClick = () => {
    //삭제 api
  };

  return (
    <>
      {isShowDel && (
        <ConfirmModal
          message="삭제 하시겠습니까?"
          setIsShow={setIsShowDel}
          isShow={isShowDel}
          onClickYes={delYesClick}
        />
      )}
      <ScheduleDetailsContainer>
        <AllContentContainer>
          <ContentContainer>
            <DateContainer>
              <DateContentContainer>
                <Date>{datas.startDate}</Date>
                {datas.startDate !== datas.endDate && (
                  <>
                    <Date>~</Date>

                    <Date>{datas.endDate}</Date>
                  </>
                )}
              </DateContentContainer>
              <Line />
            </DateContainer>
            <Content>{datas.content}</Content>
          </ContentContainer>
          <BtnContainer>
            <Button backgroundColor={colors.gray[550]} onClick={editClick}>
              수정하기
            </Button>
            <Button backgroundColor={colors.gray[550]} onClick={delClick}>
              삭제하기
            </Button>
          </BtnContainer>
        </AllContentContainer>
      </ScheduleDetailsContainer>
    </>
  );
};

const DateContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ScheduleDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 60px 160px;
`;

const AllContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
  width: 100%;
  height: 600px;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: start;
`;

const DateContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 28px;
  align-items: start;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.gray[300]};
`;

const Date = styled.div`
  font: ${font.Heading4};
  color: ${colors.gray[100]};
`;

const Content = styled.div`
  font: ${font.Heading6};
  color: ${colors.gray[100]};
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 52px;
`;
