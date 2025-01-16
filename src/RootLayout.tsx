import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './theme';
import { Header } from './components';

export const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <GlobalStyle />
    </>
  );
};
