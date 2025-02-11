import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './RootLayout';
import {
  CreateSchedule,
  CreateVolunteerActivity,
  EditSchedule,
  EditVolunteerActivity,
  ViewScheduleDetails,
  Schedule,
} from './pages';

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
        path: '/create-volunteer-activity',
        element: <CreateVolunteerActivity />,
      },
      {
        path: '/edit-volunteer-activity/:postid',
        element: <EditVolunteerActivity />,
      },
      {
        path: '/create-schedule',
        element: <CreateSchedule />,
      },
      {
        path: '/edit-schedule',
        element: <EditSchedule />,
      },
      {
        path: '/view-schedule-details/:scheduleid',
        element: <ViewScheduleDetails />,
      },
      {
        path: '/schedule',
        element: <Schedule />,
      },
    ],
  },
]);
