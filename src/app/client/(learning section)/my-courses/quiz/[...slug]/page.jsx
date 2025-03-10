'use client';
import QuizStart from '@/components/client/quiz/quizStart';
import React from 'react';

export default function Quiz({ params }) {
  const unwrappedParams = React.use(params);
  const courseId = unwrappedParams.slug[0];
  const moduleId = unwrappedParams.slug[1];
  const lessonId = unwrappedParams.slug[2];
  return <QuizStart courseId={courseId} moduleId={moduleId} lessonId={lessonId} />;
}
