import ApiService from '@/services/api';

// FUNCTION

export const updateUser = async ({ body }) => {
  const response = await ApiService.put(`/users`, body);
  return response.data;
};
