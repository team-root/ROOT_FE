import { useMutation } from '@tanstack/react-query';
import { instance } from './instance';

interface CreateVolunteerActivity {
  title: string;
  body: string;
}

export const apiAlarm = () => {
  return useMutation({
    mutationFn: async (data: CreateVolunteerActivity) => {
      const response = await instance.post('/posts', data);
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
