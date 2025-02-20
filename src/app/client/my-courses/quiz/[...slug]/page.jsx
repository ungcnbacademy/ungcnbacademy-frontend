'use client';
import LessonQuiz from '@/components/client/quiz/lessonQuiz';
import React from 'react';

export default function Quiz({ params }) {
	const unwrappedParams = React.use(params);
	const courseId = unwrappedParams.slug[0];
	const moduleId = unwrappedParams.slug[1];
	const lessonId = unwrappedParams.slug[2];
	return (
		<LessonQuiz
			courseId={courseId}
			moduleId={moduleId}
			lessonId={lessonId}
		/>
	);
}
