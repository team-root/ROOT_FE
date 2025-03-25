import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./RootLayout";
import {
  CreateSchedule,
  CreateVolunteerActivity,
  EditSchedule,
  EditVolunteerActivity,
  ViewScheduleDetails,
  Schedule,
  VolunteerActivityPost,
  CreateNotification,
  StudentSearchPage,
  MainPage,
  VolunteerContentPage,
  ApplicationDetails,
  AssignRolesPage,
  Mypage,
} from "./pages";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/create-volunteer-activity",
        element: <CreateVolunteerActivity />,
      },
      {
        path: "/edit-volunteer-activity/:postid",
        element: <EditVolunteerActivity />,
      },
      {
        path: "/create-schedule",
        element: <CreateSchedule />,
      },
      {
        path: "/edit-schedule",
        element: <EditSchedule />,
      },
      {
        path: "/view-schedule-details/:scheduleid",
        element: <ViewScheduleDetails />,
      },
      {
        path: "/schedule",
        element: <Schedule />,
      },
      {
        path: "/volunteer-activity-post",
        element: <VolunteerActivityPost />,
      },
      {
        path: "/create-notification",
        element: <CreateNotification />,
      },
      {
        path: "/student-search",
        element: <StudentSearchPage />,
      },
      {
        path: "/view-volunteer-activity/:postid",
        element: <VolunteerContentPage />,
      },
      {
        path: "/applications",
        element: <ApplicationDetails />,
      },
      {
        path: "/assign-role",
        element: <AssignRolesPage />,
      },
      {
        path: "/mypage",
        element: <Mypage />,
      },
    ],
  },
]);
