import axios from 'axios';

const API = axios.create({
  baseURL: 'http://15.164.232.208',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default API;
