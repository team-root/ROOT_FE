import styled from "styled-components";
import { colors, font } from "../../theme";
import { useState } from "react";
import { LoginBtn } from "../header";
import { logo } from "../../assets";

export const Header = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={logo} alt="logo" />
        {isLogin && (
          <NavContainer>
            <Nav>학생봉사 시간 조회/부여</Nav>
            <Nav>봉사활동 신청 조회/생성</Nav>
            <Nav>봉사 일정 확인</Nav>
            <Nav>알림 생성</Nav>
          </NavContainer>
        )}
      </LogoContainer>
      <LoginContainer>
        {isLogin && <Nav>마이페이지</Nav>}
        <LoginBtn isLogined={isLogin}></LoginBtn>
      </LoginContainer>
    </HeaderContainer>
  );
};

const LogoContainer = styled.div`
  display: flex;
  gap: 69px;
`;

const LoginContainer = styled.div`
  display: flex;
  gap: 44px;
`;

const HeaderContainer = styled.header`
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 89px;
`;

const NavContainer = styled.nav`
  display: flex;
  gap: 72px;
`;

const Nav = styled.div`
  font: ${font.Body3};
  color: ${colors.gray[100]}; //path에 따라 색상변경 기능 추가
`;
