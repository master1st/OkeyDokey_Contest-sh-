import axios from 'axios';

const API = axios.create({
  baseURL: 'http://13.125.232.138',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default API;
