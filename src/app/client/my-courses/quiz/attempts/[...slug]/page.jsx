'use client';
import Header from '@/components/atom/header';
import LessonQuiz from '@/components/client/quiz/lessonQuiz';
import React from 'react';

export default function QuizAttempts({ params }) {
  const unwrappedParams = React.use(params);
  const courseId = unwrappedParams.slug[0];
  const moduleId = unwrappedParams.slug[1];
  const lessonId = unwrappedParams.slug[2];
  return (
    <>
      <Header
        title={'Quiz Attempts'}
        height={'45vh'}
        description={'Educational resources from the world’s leading experts on sustainable development'}
      />
      <LessonQuiz courseId={courseId} moduleId={moduleId} lessonId={lessonId} />
    </>
  );
}
