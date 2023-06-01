import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'HTTP-X-CSRFTOKEN';

const API = axios.create({
  baseURL: 'http://13.125.232.138',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default API;
