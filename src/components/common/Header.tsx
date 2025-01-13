import styled from "styled-components";
import logo from "../../assets/icons/Logo.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { font } from "../../theme";
import { LoginBtn } from "../header/LoginBtn";

export const Header = () => {
  const [isLogined, setIsLogined] = useState<boolean>(false);

  return (
    <>
      {isLogined ? (
        <Container>
          <img src={logo} alt={"logo"} />
          <Box>
            <LeftBox>
              <p>학생봉사 시간 조회/부여</p>
              <p>봉사활동 신청 조회/생성</p>
              <p>봉사 일정 확인</p>
              <p>알림 생성</p>
            </LeftBox>
            <RightBox>
              <p>마이페이지</p>
              <LoginBtn isLogined={isLogined}></LoginBtn>
            </RightBox>
          </Box>
        </Container>
      ) : (
        <Container>
          <Box>
            <img src={logo} alt={"logo"} />
            <LoginBtn isLogined={isLogined}></LoginBtn>
          </Box>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 90px;
  gap: 3vw;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const LeftBox = styled.div`
  display: flex;
  gap: 3vw;
  align-items: center;
`;

const RightBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3vw;
`;

const StyledLink = styled(NavLink)`
  font-size: ${font.Body3.fontSize};
  font-weight: ${font.Body3.fontWeight};
  line-height: ${font.Body3.lineHeight};
`;
