import axios from 'axios';
import { Posts } from './types';

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
});

const findAll = async () => {
  const response = await apiClient.get<Posts[]>('');

  return response.data.slice(0, 30);
};

export const PostsApi = {
  findAll,
};

export default PostsApi;
