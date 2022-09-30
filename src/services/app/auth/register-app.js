import AppService from '@/services/app';

// FUNCTION

export const registerApp = async ({ params, body }) => {
  const response = await AppService.post(`/register`, body, { params });
  return response.data;
};
