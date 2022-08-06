import axios from 'axios';

export const customFetch = axios.create({
  baseURL: 'http://localhost:5000',
});
