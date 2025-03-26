import { useMutation } from '@tanstack/react-query';
import { instance } from './instance';

interface CreateScheduleRequest {
  title: string;
  startDate: string;
  endDate: string;
}

export const apiCreateSchedule = () => {
  const accessToken = localStorage.getItem('accessToken');

  return useMutation({
    mutationFn: async (data: CreateScheduleRequest) => {
      const response = await instance.post('/schedules', data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response;
    },
    onSuccess: () => {
      console.log('success');
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
