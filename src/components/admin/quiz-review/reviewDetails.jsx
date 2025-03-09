import React from 'react';
import styles from './reviewDetails.module.css';
import moment from 'moment';
import Button from '@/components/ui/button/button';
import CheckMark from '@/components/client/atom/checkMark';

export default function ReviewDetails({ data }) {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>{data.course.title}</h1>
          <p className={styles.subtitle}># {data.attemptId}</p>
        </div>

        <div className={styles.topSection}>
          <section className={styles.section}>
            <h2>Lesson Details</h2>
            <p>
              <strong>Module:</strong> {data.module.title}
            </p>
            <p>
              <strong>Lesson:</strong> {data.lesson.title}
            </p>
          </section>
          <section className={styles.section}>
            <h2>Quiz Information</h2>
            <p>
              <strong>Quiz Title:</strong> {data.quiz.title}
            </p>
            <p>
              <strong>Total Marks:</strong> {data.quiz.totalMarks}
            </p>
            <p>
              <strong>Start Time:</strong> {moment(data.startTime).format('lll')}
            </p>
            <p>
              <strong>Submit Time:</strong> {moment(data.submitTime).format('lll')}
            </p>
            <p>
              <strong>Status:</strong> {data.status}
            </p>
          </section>
          <section className={styles.section}>
            <h2>User Information</h2>
            <p>
              <strong>Name:</strong> {data.user.name}
            </p>
            <p>
              <strong>Email:</strong> {data.user.email}
            </p>
          </section>
        </div>

        <section className={styles.questionSection}>
          <h2>Questions and Answers</h2>
          {data.questions.map((question, index) => (
            <div key={question.questionId} className={styles.questionBlock}>
              <div className={styles.questionInfo}>
                <span className={styles.questionNo}>Question no: {index + 1}</span>
                <span className={styles.marks}>Marks: {question?.marks}</span>
                <span className={styles.type}>Type: {question?.type.toUpperCase()}</span>
              </div>

              <p className={styles.question}>
                {index + 1}. {question?.question}
              </p>
              {question?.options && (
                <>
                  {question?.options.map((option, index) => (
                    <div key={index} className={styles.optionContainer}>
                      <label className={styles.option}>
                        {index + 1}. {option.option} {option.isCorrect && <CheckMark/>}
                      </label>
                    </div>
                  ))}
                  <div className={styles.result}>
                    <strong>Result:</strong>{' '}
                    {question.userAnswer.isCorrect ? (
                      <p className={styles.correct}>Correct</p>
                    ) : (
                      <p className={styles.incorrect}>Incorrect</p>
                    )}
                  </div>
                </>
              )}
              {question?.type === 'text' && (
                <>
                  <p>
                    <strong>Answer:</strong> {question.userAnswer.textAnswer}
                  </p>
                  <Button text="Add review" className={styles.addReviewBtn} />
                </>
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
