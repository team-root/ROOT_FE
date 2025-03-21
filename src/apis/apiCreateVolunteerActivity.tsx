import { useMutation } from '@tanstack/react-query';
import { instance } from './instance';

interface CreateVolunteerActivity {
  isRegular: boolean;
  title: string;
  activityDetails: string;
  applicationPeriod: {
    startDate: string;
    endDate: string;
  };
  workDate: {
    startDate: string;
    endDate: string;
  };
  dayOfWeek: { dayId: string; dayOfWeek: string }[];
  place: string;
  time: string;
  personnel: string;
  role: {
    roleId: string;
    title: string;
  }[];
}

export const apiCreateVolunteerActivity = () => {
  const accessToken = localStorage.getItem('accessToken');
  return useMutation({
    mutationFn: async (data: CreateVolunteerActivity) => {
      const response = await instance.post('/posts', data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response;
    },
    onSuccess: (response) => {
      console.log(response.data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
