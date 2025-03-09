import React from 'react';
import styles from './reviewDetails.module.css';
import moment from 'moment';

export default function ReviewDetails({data}) {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>{data.course.title}</h1>
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
          <h2>Questions and Answers</h2>
          {data.questions.map((question, index) => (
            <div key={question.questionId} className={styles.questionBlock}>
              <p>
                <strong>Question {index + 1}:</strong> {question.question}
              </p>
              <p>
                <strong>Type:</strong> {question.type}
              </p>
              <p>
                <strong>Marks:</strong> {question.marks}/{question.maxMarks}
              </p>
              {question.type === 'mcq' ? (
                <div>
                  <p>
                    <strong>Options:</strong>
                  </p>
                  <ul>
                    {question.options.map((option) => (
                      <li key={option._id}>
                        {option.option} {option.isCorrect && '(Correct)'}
                      </li>
                    ))}
                  </ul>
                  <p>
                    <strong>Your Answer:</strong> {question.userAnswer.selectedOption}
                  </p>
                </div>
              ) : (
                <p>
                  <strong>Your Answer:</strong> {question.userAnswer.textAnswer}
                </p>
              )}
              <p>
                <strong>Is Correct:</strong> {String(question.userAnswer.isCorrect)}
              </p>
            </div>
          ))}
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
    </div>
  );
}
