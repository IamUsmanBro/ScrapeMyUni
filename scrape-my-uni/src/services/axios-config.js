import axios from 'axios';

// Create an Axios instance with the correct base URL
const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api; 