import styled from "styled-components";
import {
  backgroundLogo,
  laptop,
  nextphoneArrow,
  nextSectionArrow,
  phone,
  threephone,
  twophone,
} from "../assets";
import { colors, font } from "../theme";

export const MainPage = () => {
  return (
    <Container>
      <FirstSection>
        <FirstSectionArticle>
          <img src={backgroundLogo} alt="배경 로고" />
          ROOT 에서 봉사활동 관리를 시작해보세요!
        </FirstSectionArticle>
        <NextPageDiv>
          <img src={nextSectionArrow} alt="V" />
        </NextPageDiv>
      </FirstSection>
      <SecondSection>
        <SecondSectionArticle>
          <SecondSectionBox>
            <TitleText>봉사활동</TitleText>
            <p>
              더 쉽고,
              <br />더 효율적으로,
              <br />더 의미있게 관리해보세요.
            </p>
          </SecondSectionBox>
          <img src={laptop} alt="노트북" />
        </SecondSectionArticle>
        <NextPageDiv>
          <img src={nextSectionArrow} alt="V" />
        </NextPageDiv>
      </SecondSection>
      <ThirdSection>
        <ThirdSectionArticle>
          <PhoneBox>
            <img src={twophone} alt="예시이미지" />
            <TextBox1>
              <TitleText>봉사신청</TitleText>
              클릭 한 번으로,
              <br />
              간편하고 빠르게
            </TextBox1>
          </PhoneBox>
          <Arrow1 src={nextphoneArrow} alt="->" />
          <PhoneBox>
            <img src={phone} alt="예시이미지" />
            <TextBox2>
              <TitleText>QR 코드</TitleText>
              스캔 한 번으로,
              <br />
              손쉬운 출석체크
            </TextBox2>
          </PhoneBox>
          <Arrow2 src={nextphoneArrow} alt="->" />
          <PhoneBox>
            <img src={threephone} alt="예시이미지" />
            <TextBox3>
              <TitleText>일정 및 봉사 시간</TitleText>
              스마트폰으로,
              <br />
              모든 것을 한 눈에
            </TextBox3>
          </PhoneBox>
        </ThirdSectionArticle>
      </ThirdSection>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  overflow: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const FirstSection = styled.section`
  width: 100vw;
  height: calc(100vh - 70px);
  padding-top: 166px;
  ${font.Heading1};
  color: ${colors.gray[100]};
  display: flex;
  flex-direction: column;
  background-color: ${colors.gray[700]};
  margin-top: 70px;
`;

const NextPageDiv = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
`;

const SecondSection = styled.section`
  width: 100vw;
  height: 100vh;
  ${font.Heading1};
  color: ${colors.gray[100]};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 20vh;
`;

const FirstSectionArticle = styled.article`
  display: flex;
  align-items: center;
  gap: 117px;
  margin-left: auto;
  margin-right: auto;
`;

const SecondSectionArticle = styled.article`
  display: flex;
  width: 100vw;
  justify-content: space-evenly;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

const SecondSectionBox = styled.div`
  display: flex;
  gap: 19px;
  flex-direction: column;
  color: ${colors.gray[100]};
  ${font.Heading2};
`;

const TitleText = styled.p`
  ${font.Heading4};
  color: ${colors.main[400]};
`;

const ThirdSection = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const TextBox1 = styled.div`
  display: flex;
  flex-direction: column;
  ${font.Heading5};
  color: ${colors.gray[100]};
  gap: 12px;
  position: absolute;
  top: -20px;
  right: 30px;
`;

const PhoneBox = styled.div`
  position: relative;
`;

const TextBox2 = styled.div`
  display: flex;
  flex-direction: column;
  ${font.Heading5};
  color: ${colors.gray[100]};
  gap: 12px;
  position: absolute;
  top: -150px;
  left: 20px;
`;

const TextBox3 = styled.div`
  display: flex;
  flex-direction: column;
  ${font.Heading5};
  color: ${colors.gray[100]};
  gap: 12px;
  position: absolute;
  top: 15px;
  right: -110px;
`;

const Arrow1 = styled.img`
  margin: 0 100px;
`;
const Arrow2 = styled.img`
  margin: 0 70px;
`;

const ThirdSectionArticle = styled.div`
  display: flex;
  align-items: center;
  width: 1670px;
`;
