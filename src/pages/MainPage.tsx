import styled from "styled-components";
import { Header } from "../components";
import { font } from "../theme";
import { background } from "../assets";
import { watch } from "../assets";
import { broom } from "../assets";
import { calender } from "../assets";
import { bell } from "../assets";

export const MainPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Img src={background} alt="배경" />
        <Buttons>
          <Button>
            <img src={watch} alt="시계" />
            <Text>학생봉사 시간 조회/부여</Text>
          </Button>
          <Button>
            <img src={broom} alt="빗자루" />
            <Text>봉사 활동 신청 조회/생성</Text>
          </Button>
          <Button>
            <img src={calender} alt="달력" />
            <Text>봉사일정 확인하기</Text>
          </Button>
          <Button>
            <img src={bell} alt="종" />
            <Text>알림 생성하기</Text>
          </Button>
        </Buttons>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding-top: 70px;
  box-sizing: border-box;
  height: calc(100vh - 30px);
`;

const Buttons = styled.div`
  width: 100vw;
  height: calc(100vh - 583px);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
`;

const Button = styled.div`
  padding: 0 27px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const Text = styled.p`
  ${font.Body2};
  color: #fff;
`;

const Img = styled.img`
  width: 100vw;
`;
