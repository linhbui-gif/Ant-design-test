import AppService from '@/services/app';

// FUNCTION

export const changePassword = async ({ token, params, body }) => {
  const response = await AppService.post(`/create_new_password`, body, {
    params,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
