import React, { useState } from 'react';
import styled from 'styled-components';
import { VolunteerBar } from '../components';
import { colors, font } from '../theme';
import { download } from '../assets';
import { data } from 'react-router-dom';

interface Period {
  startDate: string;
  endDate: string;
}

interface Role {
  roleId: number;
  title: string;
}

interface DayOfWeek {
  dayId: number;
  dayOfWeek: string;
}

interface Volunteer {
  id: number;
  title: string;
  content: string;
  applicationPeriod: Period;
  dayOfWeek?: DayOfWeek[];
  workDate?: Period;
  place: string;
  time: string;
  personnel: string;
  role: Role[];
  download: {
    fileName: string;
    fileUrl: string | File;
  };
}

export const VolunteerContentPage = () => {
  const titles: string[] = [
    '활동 내용',
    '신청, 기간',
    '봉사 기간',
    '활동 장소',
    '봉사 시간',
    '봉사 인원',
    '역할',
  ];

  const [volInfo, setVolInfo] = useState<Volunteer>({
    id: 1,
    title: '환경지킴이 봉사단',
    content: '환경 지킴이는 교내를 깨끗하게 가꾸는 활동입니다.',
    applicationPeriod: {
      startDate: '2024.XX.XX',
      endDate: '2024.XX.XX',
    },
    dayOfWeek: [
      {
        dayId: 1,
        dayOfWeek: '수',
      },
      {
        dayId: 2,
        dayOfWeek: '목',
      },
    ],
    place: '교내',
    time: '10시간/학기',
    personnel: '학기별 60명 내외',
    role: [
      {
        roleId: 1,
        title: '청소부',
      },
      {
        roleId: 2,
        title: '배달부',
      },
    ],
    download: {
      fileName: 'ssssss',
      fileUrl:
        'data:image/png;base64,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',
    },
  });

  const downloadClick = (fileName: string, fileUrl: File | string) => {
    const element = document.createElement('a');

    if (typeof fileUrl === 'string') {
      element.href = fileUrl;
    } else {
      const blob = new Blob([fileUrl], {
        type: fileUrl.type || 'application/octet-stream',
      });
      element.href = URL.createObjectURL(blob);
    }

    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <Container>
      <BarBox>
        <VolunteerBar />
      </BarBox>
      <ContentBox>
        <TitleBox>
          <VolunteerTitle>{volInfo.title}</VolunteerTitle>
          <TextBtn>삭제</TextBtn>
          <TextBtn>수정</TextBtn>
          <img
            src={download}
            alt="download"
            onClick={() =>
              downloadClick(volInfo.download.fileName, volInfo.download.fileUrl)
            }
          />
        </TitleBox>
        <ContentCard>
          <ContentTitle>{titles[0]}</ContentTitle>
          <Hr />
          {volInfo.content}
        </ContentCard>
        <ContentCard>
          <ContentTitle>{titles[1]}</ContentTitle>
          <Hr />
          {volInfo.applicationPeriod.startDate} ~{' '}
          {volInfo.applicationPeriod.endDate}
        </ContentCard>
        <ContentCard>
          <ContentTitle>{titles[2]}</ContentTitle>
          <Hr />
          <DateBox>
            {volInfo.workDate
              ? `${volInfo.workDate.startDate} ~ ${volInfo.workDate.endDate}`
              : volInfo.dayOfWeek
              ? volInfo.dayOfWeek.map((day) => <Date>{day.dayOfWeek}</Date>)
              : '정보 없음'}
          </DateBox>
        </ContentCard>
        <ContentCard>
          <ContentTitle>{titles[3]}</ContentTitle>
          <Hr />
          {volInfo.place}
        </ContentCard>
        <ContentCard>
          <ContentTitle>{titles[4]}</ContentTitle>
          <Hr />
          {volInfo.time}
        </ContentCard>
        <ContentCard>
          <ContentTitle>{titles[5]}</ContentTitle>
          <Hr />
          {volInfo.personnel}
        </ContentCard>
        <ContentCard>
          <ContentTitle>{titles[6]}</ContentTitle>
          <Hr />
          <RoleBox>
            {volInfo.role.map((r) => (
              <Role key={r.roleId}>{r.title}</Role>
            ))}
          </RoleBox>
        </ContentCard>
      </ContentBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 70px);
  padding-top: 70px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const BarBox = styled.div`
  width: 90vw;
  border-bottom: 1px solid ${colors.gray[300]};
  margin-left: auto;
  margin-right: auto;
`;

const ContentBox = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
  ${font.Body2};
  gap: 36px;
`;

const TitleBox = styled.div`
  display: flex;
  gap: 20px;
  margin: 80px 0 60px;
  align-items: center;
`;

const VolunteerTitle = styled.p`
  ${font.Heading5};
  margin-right: 20px;
`;

const ContentCard = styled.div`
  ${font.Body2};
`;

const ContentTitle = styled.p`
  ${font.Body1}
`;

const Hr = styled.hr`
  width: 315px;
  height: 1px;
  background-color: ${colors.gray[200]};
  margin: 12px 0 20px;
`;

const RoleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const Role = styled.div`
  box-sizing: border-box;
  padding: 4px 21px;
  gap: 10px;
  background: rgba(136, 160, 252, 0.1);
  border: 0.5px solid ${colors.main[200]};
  border-radius: 12px;
  ${font.Caption3};
  color: ${colors.main[200]};
`;

const TextBtn = styled.p`
  cursor: pointer;
  ${font.Caption2};
  color: #fff;
`;

const Date = styled.div`
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  border: 1px solid ${colors.main[200]};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${font.Body3}
`;

const DateBox = styled.div`
  display: flex;
  gap: 15px;
`;
