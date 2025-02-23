import axios from 'axios';
import { configuration } from '../configuration/configuration';

export const instance = axios.create({
  baseURL: configuration.baseUrl,
});

//interceptor for adding token in your request
instance.interceptors.request.use((config) => {
  const userToken = JSON.parse(localStorage.getItem('user'));
  const token = userToken?.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

//interceptor for removing token
instance.interceptors.response.use(
  (config) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return config;
  },
  function (error) {
    // if error code is 401 means authentication is not valid
    if (error?.response?.status === 406) {
      localStorage.clear(); //clearing the local storage (token and other info)
      window.location.reload(false); //refreshing the page to go to login page
    } else if (error?.response?.status === 429) {
      //console.log('Too many requests, please try again later.')
    } else {
      //console.log(error.response);
    }
    return Promise.reject(error);
  }
);
