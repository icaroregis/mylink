import axios from 'axios';

export const key = 'a0a21d21b9a6291ecdd25c2d152a40fc593b2d75';

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${key}`,
  },
});

export default api;
