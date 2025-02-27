import Input from '@/components/ui/input/input';
import React from 'react';
import styles from './quizQuestion.module.css';
export default function QuizQuestion({ question, options, correctAnswer, questionNo }) {
  return (
    <div className={styles.main}>
      <p className={styles.questionNo}>Question {questionNo} </p>
      <div className={styles.questionContainer}>
        <p className={styles.question}>{question}</p>
      </div>
      <div className={styles.optionsContainer}>
        {options?.map((option, index) => (
          <div key={index} className={styles.singleOption}>
            <input type="radio" name={question} value={option?.option} />
            <label htmlFor="">{option?.option}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
