'use client';
import React, { useEffect } from 'react';
import styles from './quizDetails.module.css';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
export default function QuizDetails({ courseId, moduleId, lessonId }) {
  const [response, error, loading, axiosFetch] = useAxios();
  useEffect(() => {
    axiosFetch({
      method: 'Get',
      url: `${configuration.courses}/${courseId}/modules/${moduleId}/lessons/${lessonId}/quiz`,
    });
  }, []);
  console.log(response);
  return <div>QuizDetails</div>;
}
