import styled from "styled-components";
import { logo } from "../../assets";
import { useState } from "react";
import { LoginBtn } from "../header/LoginBtn";
import { font } from "../../theme";

export const Header = () => {
  const [isLogined, setIsLogined] = useState<boolean>(true);

  return (
    <Container>
      <Box>
        <LeftBox>
          <img src={logo} alt={"logo"} />
          {isLogined && (
            <>
              <p>학생봉사 시간 조회/부여</p>
              <p>봉사활동 신청 조회/생성</p>
              <p>봉사 일정 확인</p>
              <p>알림 생성</p>
            </>
          )}
        </LeftBox>
        <RightBox>
          {isLogined && <p>마이페이지</p>}
          <LoginBtn isLogined={isLogined} />
        </RightBox>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 90px;
  gap: 82.5px;
  font: ${font.Body3};
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const LeftBox = styled.div`
  display: flex;
  gap: 80px;
  align-items: center;
`;

const RightBox = styled.div`
  display: flex;
  align-items: center;
  gap: 44px;
`;
