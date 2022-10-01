import AppService from '@/services/app';

// FUNCTION

export const resetPassword = async ({ params, body }) => {
  const response = await AppService.post(`/reset_password`, body, { params });
  return response.data;
};
