import axios from 'axios';
import { Users } from './types';

const apiClient = axios.create({
  baseURL: '/api/users',
  headers: {
    'Content-Type': 'application/json',
  },
});

const loadUser = async () => {
  const response = await apiClient.get<Users[]>('');

  return response.data.slice(0, 1);
};

export const UsersApi = {
  loadUser,
};

export default UsersApi;
