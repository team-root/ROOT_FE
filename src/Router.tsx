import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './RootLayout';
import { CreateSchedule, CreateVolunteerActivity } from './pages';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <div>hello</div>,
      },
      {
        path: '/create-schedule',
        element: <CreateSchedule />,
      },
      {
        path: '/create-volunteer-activity',
        element: <CreateVolunteerActivity />,
      },
    ],
  },
]);
