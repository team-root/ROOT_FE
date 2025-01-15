import styled from "styled-components";
import { colors, font } from "../../theme";
import { useState } from "react";
import { LoginBtn } from "../header";
import { logo } from "../../assets";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const location = useLocation();

  const navItems = [
    { label: "학생봉사 시간 조회/부여", path: "/hours" },
    { label: "봉사활동 신청 조회/생성", path: "/volunteer-posts" },
    { label: "봉사 일정 확인", path: "/schedules" },
    { label: "알림 생성", path: "/notifications" },
  ];
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={logo} alt="logo" />
        {isLogin && (
          <NavContainer>
            {navItems.map((nav) => (
              <Nav key={nav.path} isActive={location.pathname === nav.path}>
                {nav.label}
              </Nav>
            ))}
          </NavContainer>
        )}
      </LogoContainer>
      <LoginContainer>
        {isLogin && (
          <Nav isActive={location.pathname === "/mypage"}>마이페이지</Nav>
        )}
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

const Nav = styled.div<{ isActive: boolean }>`
  font: ${font.Body3};
  ${({ isActive }) =>
    isActive
      ? `
    background: linear-gradient(to right, ${colors.main[300].from}, ${colors.main[300].to});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `
      : `
    color: ${colors.gray[100]};
  `};
`;
