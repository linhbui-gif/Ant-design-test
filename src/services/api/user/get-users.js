import ApiService from '@/services/api';

// FUNCTION

export const getUsers = async ({ params }) => {
  const response = await ApiService.get(`/users`, { params });
  return response.data;
};
