'use client';
import Header from '@/components/atom/header';
import QuizStart from '@/components/client/quiz/quizStart';
import React from 'react';

export default function Quiz({ params }) {
  const unwrappedParams = React.use(params);
  const courseId = unwrappedParams.slug[0];
  const moduleId = unwrappedParams.slug[1];
  const lessonId = unwrappedParams.slug[2];
  return (
    <>
      <Header title={'Quiz Eligibility'} height={'45vh'} description={'Educational resources from the world’s leading experts on sustainable development'} />
      <QuizStart courseId={courseId} moduleId={moduleId} lessonId={lessonId} />
    </>
  );
}
