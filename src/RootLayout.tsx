import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './theme';
import { Header } from './components';
import styled from 'styled-components';

export const RootLayout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <GlobalStyle />
    </>
  );
};

const Main = styled.main`
  width: 100vw;
  margin-top: 70px;
  overflow-x: hidden;
`;
