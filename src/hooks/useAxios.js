'use client';
import { useState, useEffect } from 'react';
import { instance } from '../lib/axiosInstance';
//import { message } from 'antd';

const useAxios = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [controller, setController] = useState();
  const [progress, setProgress] = useState(0);

  const axiosFetch = async (configObj) => {
    const { method, url, requestConfig = {} } = configObj;
    try {
      setLoading(true);
      setError(null);
      setResponse({});
      const ctrl = new AbortController();
      setController(ctrl);
      const res = await instance[method.toLowerCase()](url, requestConfig, {
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress(percentCompleted);
        },
      });
      setResponse(res?.data);
    } catch (error) {
      if (error.response) {
        //message.error(error.response.data.message);

        if (error.response.data.message) {
          setError(error.response.data);
        } else if (error.response) {
          setError({
            message: 'Something went wrong.',
            error: error.response,
          });
        } else {
          setError({
            message: 'Something went wrong.',
            error: error,
          });
        }
        // if (error.response.status === 429) {
        // 	setError({ message: 'Too many requests.' });
        // }
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // useEffect cleanup function
    return () => controller && controller.abort();
  }, [controller]);

  return [response, error, loading, axiosFetch, progress];
};

export default useAxios;
