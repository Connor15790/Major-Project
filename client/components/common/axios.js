// api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
  timeout: 5000, // Adjust the timeout as needed
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apiGet = async (endpoint, params) => {
  try {
    const response = await instance.get(endpoint, { params });
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

export const apiPost = async (endpoint, data) => {
  try {
    const response = await instance.post(endpoint, data);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

export const apiPut = async (endpoint, data) => {
  try {
    const response = await instance.put(endpoint, data);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

export const apiDelete = async (endpoint) => {
  try {
    const response = await instance.delete(endpoint);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

const handleRequestError = (error) => {
  console.error('API Request Error:', error.message);
  throw error;
};
