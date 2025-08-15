import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptors for request and response
apiClient.interceptors.request.use(
  (config) => {
    // Add any custom logic before sending the request
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    // Handle response data
    return response.data;
  },
  (error) => {
    // Handle response error
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default apiClient;