'use client';
import React, { use, useEffect } from 'react';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import ReviewDetails from '@/components/admin/quiz-review/reviewDetails';
import LoadingDots from '@/components/ui/loading/loadingDots';
export default function QuizReviewPage({ params }) {
  const unwrappedParams = use(params);
  const quizId = unwrappedParams.id;
  const [responseGetQuizInfo, errorGetQuizInfo, loadingGetQuizInfo, axiosFetchGetQuizInfo] = useAxios();

  useEffect(() => {
    axiosFetchGetQuizInfo({
      method: 'Get',
      url: `${configuration.admin.singleQuiz}/${quizId}`,
    });
  }, [quizId]);

  return (
    <>
      {loadingGetQuizInfo && <LoadingDots />}
      {responseGetQuizInfo?.data && !loadingGetQuizInfo && !errorGetQuizInfo && responseGetQuizInfo?.data && (
        <ReviewDetails data={responseGetQuizInfo?.data} />
      )}
    </>
  );
}
