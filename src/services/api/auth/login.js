import ApiService from '@/services/api';

// FUNCTION

export const login = async ({ params, body }) => {
  const response = await ApiService.post(`/login`, body, { params });
  return response.data;
};
