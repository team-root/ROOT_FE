import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './theme';

export const RootLayout = () => {
  return (
    <>
      <Outlet />
      <GlobalStyle />
    </>
  );
};
