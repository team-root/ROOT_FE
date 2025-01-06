import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './RootLayout';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <div>hello</div>,
      },
    ],
  },
]);
