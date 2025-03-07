import React, { useState } from "react";
import styled from "styled-components";
import { VolunteerBar } from "../components";
import { colors, font } from "../theme";

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
}

export const VolunteerContentPage = () => {
  const titles: string[] = [
    "활동 내용",
    "신청, 기간",
    "봉사 기간",
    "활동 장소",
    "봉사 시간",
    "봉사 인원",
    "역할",
  ];

  const [volInfo, setVolInfo] = useState<Volunteer>({
    id: 1,
    title: "환경지킴이 봉사단",
    content: "환경 지킴이는 교내를 깨끗하게 가꾸는 활동입니다.",
    applicationPeriod: {
      startDate: "2024.XX.XX",
      endDate: "2024.XX.XX",
    },
    dayOfWeek: [
      {
        dayId: 1,
        dayOfWeek: "수",
      },
      {
        dayId: 2,
        dayOfWeek: "목",
      },
    ],
    place: "교내",
    time: "10시간/학기",
    personnel: "학기별 60명 내외",
    role: [
      {
        roleId: 1,
        title: "청소부",
      },
      {
        roleId: 2,
        title: "배달부",
      },
    ],
  });

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
        </TitleBox>
        <ContentCard>
          <ContentTitle>{titles[0]}</ContentTitle>
          <Hr />
          {volInfo.content}
        </ContentCard>
        <ContentCard>
          <ContentTitle>{titles[1]}</ContentTitle>
          <Hr />
          {volInfo.applicationPeriod.startDate} ~{" "}
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
              : "정보 없음"}
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
