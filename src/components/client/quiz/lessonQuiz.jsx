'use client';
import React, { useState } from 'react';
import styles from './lessonQuiz.module.css';
import Timer from './timer';
import Button from '@/components/ui/button/button';
import QuizQuestion from '../atom/quizQuestion';
export default function LessonQuiz({ courseId, moduleId, lessonId }) {
	const [questionNo, setQuestionNo] = useState(0);

	const esgQuiz = [
		{
			question: 'What does ESG stand for?',
			options: [
				'Environmental, Social, and Governance',
				'Energy, Sustainability, and Growth',
				'Economic, Social, and Governance',
				'Environmental, Safety, and Growth',
			],
			correctAnswer: 'Environmental, Social, and Governance',
		},
		{
			question:
				'Which of the following is an example of an environmental factor in ESG?',
			options: [
				'Employee diversity',
				'Carbon emissions',
				'Executive compensation',
				'Shareholder voting rights',
			],
			correctAnswer: 'Carbon emissions',
		},
		{
			question:
				"What is the primary focus of the 'Social' component in ESG?",
			options: [
				'Employee well-being',
				'Carbon neutrality',
				'Financial transparency',
				'Board structure',
			],
			correctAnswer: 'Employee well-being',
		},
		{
			question:
				'Which of the following is considered a governance factor in ESG?',
			options: [
				'Waste management policies',
				'Equal pay practices',
				'Board diversity',
				'Energy efficiency',
			],
			correctAnswer: 'Board diversity',
		},
		{
			question: 'What is the goal of ESG investing?',
			options: [
				'Maximizing short-term returns',
				'Encouraging sustainable and ethical practices',
				'Avoiding all risks',
				'Focusing only on financial performance',
			],
			correctAnswer: 'Encouraging sustainable and ethical practices',
		},
		{
			question:
				'Which organization introduced the Principles for Responsible Investment (PRI)?',
			options: [
				'United Nations',
				'World Bank',
				'International Monetary Fund',
				'World Economic Forum',
			],
			correctAnswer: 'United Nations',
		},
		{
			question: 'What is greenwashing in the context of ESG?',
			options: [
				'An effective ESG strategy',
				'Exaggerating or misleading about sustainability practices',
				'A method to recycle industrial waste',
				'An environmental policy framework',
			],
			correctAnswer:
				'Exaggerating or misleading about sustainability practices',
		},
		{
			question:
				'Which of the following is a common tool for measuring ESG performance?',
			options: [
				'SWOT analysis',
				'Carbon footprint calculator',
				'ESG rating agencies',
				'Risk assessment matrix',
			],
			correctAnswer: 'ESG rating agencies',
		},
		{
			question: 'How can companies demonstrate strong ESG performance?',
			options: [
				'Disclosing financial performance only',
				'Ignoring governance issues',
				'Setting measurable sustainability goals',
				'Avoiding shareholder engagement',
			],
			correctAnswer: 'Setting measurable sustainability goals',
		},
		{
			question: 'Why is ESG important for investors?',
			options: [
				'It guarantees higher returns',
				'It helps identify long-term risks and opportunities',
				'It eliminates all investment risks',
				'It is mandated by law worldwide',
			],
			correctAnswer:
				'It helps identify long-term risks and opportunities',
		},
	];

	const OnNextQuestionBtnPressHandler = () => {
		setQuestionNo(questionNo + 1);
	};
	const OnPreviousQuestionBtnPressHandler = () => {
		setQuestionNo(questionNo - 1);
	};

	return (
		<div className={styles.main}>
			<div className={styles.header}>
				<h1 className={styles.title}>Quiz</h1>
				<Timer initialTime={1} />
			</div>
			<div className={styles.container}>
				<QuizQuestion
					question={esgQuiz[questionNo].question}
					options={esgQuiz[questionNo].options}
					correctAnswer={esgQuiz[questionNo].correctAnswer}
					questionNo={questionNo + 1}
				/>
			</div>
			<div className={styles.btnContainer}>
				<Button
					text="Previous"
					variant="outLined"
					onClick={OnPreviousQuestionBtnPressHandler}
					disabled={questionNo === 0}
				/>
				<Button
					text="Next"
					variant="primary"
					onClick={OnNextQuestionBtnPressHandler}
					disabled={questionNo === esgQuiz.length - 1}
				/>
			</div>
		</div>
	);
}
