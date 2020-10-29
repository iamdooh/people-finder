import axios from 'axios';

const baseURL = `${process.env.REACT_APP_API_ENDPOINT}/api`;

const instance = axios.create({
  baseURL
});

const successHandler = (response) => {
  return response.data;
}

const errorHandler = (error) => {
  if (axios.isCancel(error)) {
    return false;
  }

  // Unauthorized
  if (error.response.status === 401) {
    window.location.assign('/login');
    return false;
  }

  return Promise.reject({ ...error });
}

instance.interceptors.request.use(config => {
  config.headers.Authorization = sessionStorage.getItem('token');
  return config;
});

instance.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error)
);

export default instance;