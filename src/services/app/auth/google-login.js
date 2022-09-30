import AppService from '@/services/app';

// FUNCTION

export const googleLogin = async ({ params }) => {
  const response = await AppService.get(`/google_login`, { params });
  return response.data;
};
