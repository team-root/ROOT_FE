import styled from "styled-components";
import { colors, font } from "../../theme";
import { useEffect, useState } from "react";
import { LoginBtn } from "../header";
import { logo } from "../../assets";
import { useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const location = useLocation();
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const navigate = useNavigate();

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  const navItems = [
    { label: "학생봉사 시간 조회/부여", path: "/student-search" },
    { label: "봉사활동 신청 조회/생성", path: "/volunteer-activity-post" },
    { label: "봉사 일정 확인", path: "/schedule" },
    { label: "알림 생성", path: "/create-notification" },
  ];
  return (
    <HeaderContainer scrollPosition={scrollPosition}>
      <LogoContainer>
        <img
          src={logo}
          alt="logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        />
        {isLogin && (
          <NavContainer>
            {navItems.map((nav) => (
              <Nav
                key={nav.path}
                isActive={location.pathname === nav.path}
                onClick={() => navigate(nav.path)}
              >
                {nav.label}
              </Nav>
            ))}
          </NavContainer>
        )}
      </LogoContainer>
      <LoginContainer>
        {isLogin && (
          <Nav
            isActive={location.pathname === "/mypage"}
            onClick={() => navigate("/mypage")}
          >
            마이페이지
          </Nav>
        )}
        <LoginBtn isLogined={isLogin} setIsLogin={setIsLogin}></LoginBtn>
      </LoginContainer>
    </HeaderContainer>
  );
};

const LogoContainer = styled.div`
  display: flex;
  gap: 69px;
  align-items: center;
`;

const LoginContainer = styled.div`
  display: flex;
  gap: 44px;
  align-items: center;
`;

const HeaderContainer = styled.header<{ scrollPosition: number }>`
  background-color: ${({ scrollPosition }) =>
    scrollPosition ? colors.gray[600] : "transparent"};
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 89px;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid
    ${({ scrollPosition }) =>
      scrollPosition ? colors.gray[500] : "transparent"};
  z-index: 10;
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
  cursor: pointer;
`;
