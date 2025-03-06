import React, { useState } from "react";
import styled from "styled-components";
import { profile } from "../assets";
import { colors, font } from "../theme";
import { Notification } from "../components";

interface MyInfo {
  name: string;
  area: string;
  notifications: Notification[];
}

interface Notification {
  title: string;
  content: string;
}

export const Mypage = () => {
  const [myInfo, setMyInfo] = useState<MyInfo>({
    name: "안현수",
    area: "교내 청소 담당",
    notifications: [
      {
        title: "환경 지킴이 봉사 날짜 변경 안내",
        content:
          "오늘 예정된 환경 지킴이 봉사활동이 내일(10/21) 점심시간으로 변경되었습니다.",
      },
      {
        title: "자원봉사 모집 안내",
        content:
          "다가오는 주말, 학교 주변 환경 정리를 위한 자원봉사를 모집합니다. 참여를 원하시면 신청해주세요.",
      },
      {
        title: "봉사활동 시간 기록 변경 안내",
        content:
          "최근 봉사활동 시간 기록이 업데이트되었습니다. 확인 후 이상이 있으면 문의 바랍니다.",
      },
      {
        title: "청소구역 변경 안내",
        content:
          "이번 주부터 일부 청소구역이 변경되었습니다. 담당 구역을 확인해 주세요.",
      },
    ],
  });

  return (
    <Container>
      <MainBox>
        <ProfileBox>
          <Profile src={profile} alt="프로필사진" />
          <ProfileCard>
            <ProfileNameBox>
              <ProfileName>{myInfo.name}</ProfileName>
              선생님
            </ProfileNameBox>
            <ProfileText>{myInfo.area}</ProfileText>
          </ProfileCard>
        </ProfileBox>
        <Hr />
        <Notifications>
          {myInfo.notifications?.map((noti) => (
            <Notification titleText={noti.title} text={noti.content} />
          ))}
        </Notifications>
      </MainBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 70px);
  padding-top: 70px;
  display: flex;
  justify-content: center;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: auto;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`;

const Profile = styled.img`
  width: 160px;
`;

const MainBox = styled.div`
  margin-top: 114px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Hr = styled.hr`
  background-color: ${colors.gray[400]};
  width: 800px;
  height: 1px;
  margin: 56px 0 40px;
`;

const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ProfileText = styled.div`
  ${font.Caption2};
  color: ${colors.main[200]};
  border: 1px solid ${colors.main[200]};
  border-radius: 12px;
  width: 128px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.gray[550]};
`;

const ProfileNameBox = styled.div`
  ${font.Body1};
  color: #fff;
  display: flex;
  gap: 12px;
  align-items: center;
`;

const ProfileName = styled.p`
  ${font.Heading4};
`;

const Notifications = styled.div`
  width: 728px;
  display: flex;
  gap: 44px;
  flex-direction: column;
`;
