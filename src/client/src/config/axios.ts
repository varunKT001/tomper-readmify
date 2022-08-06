import axios from 'axios';

export const customFetch = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : '',
});
