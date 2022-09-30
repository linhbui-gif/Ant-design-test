import AppService from '@/services/app';

// FUNCTION

export const loginApp = async ({ params, body }) => {
  const response = await AppService.post(`/login`, body, { params });
  return response.data;
};
