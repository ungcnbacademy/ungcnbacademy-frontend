import React, { useState } from 'react';
import styles from './createQuiz.module.css';
import Input from '@/components/ui/input/input';
import Button from '@/components/ui/button/button';
import { MdDeleteOutline } from 'react-icons/md';

export default function CreateQuiz() {
  const [quiz, setQuiz] = useState({
    title: '',
    quizTime: 0,
    passingScore: 0,
    maxAttempts: 0,
    questions: [],
  });

  const handleAddQuestion = () => {
    setQuiz({
      ...quiz,
      questions: [
        ...quiz.questions,
        {
          question: '',
          type: 'mcq',
          marks: 1,
          options: [{ option: '', isCorrect: false }],
        },
      ],
    });
  };

  const handleRemoveQuestion = (index) => {
    const updatedQuestions = quiz.questions.filter((_, qIndex) => qIndex !== index);
    setQuiz({ ...quiz, questions: updatedQuestions });
  };

  const handleAddOption = (index) => {
    const updatedQuestions = [...quiz.questions];
    updatedQuestions[index].options.push({ option: '', isCorrect: false });
    setQuiz({ ...quiz, questions: updatedQuestions });
  };

  const handleRemoveOption = (qIndex, optIndex) => {
    const updatedQuestions = [...quiz.questions];
    updatedQuestions[qIndex].options = updatedQuestions[qIndex].options.filter((_, oIndex) => oIndex !== optIndex);
    setQuiz({ ...quiz, questions: updatedQuestions });
  };

  const handleInputChange = (e, index = null, optionIndex = null) => {
    const { name, value, type, checked } = e.target;

    if (index === null) {
      setQuiz({ ...quiz, [name]: value });
    } else if (optionIndex === null) {
      const updatedQuestions = [...quiz.questions];
      updatedQuestions[index][name] = value;
      setQuiz({ ...quiz, questions: updatedQuestions });
    } else {
      const updatedQuestions = [...quiz.questions];
      updatedQuestions[index].options[optionIndex][name] = type === 'checkbox' ? checked : value;
      setQuiz({ ...quiz, questions: updatedQuestions });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quiz Payload:', quiz);
  };

  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>Title:</label>
        <Input type="text" name="title" value={quiz.title} onChange={handleInputChange} variant="secondary" required />

        <label>Quiz Time (minutes):</label>
        <Input type="number" name="quizTime" value={quiz.quizTime} onChange={handleInputChange} variant="secondary" />

        <label>Passing Score (%):</label>
        <Input type="number" name="passingScore" value={quiz.passingScore} onChange={handleInputChange} variant="secondary" />

        <label>Max Attempts:</label>
        <Input type="number" name="maxAttempts" value={quiz.maxAttempts} onChange={handleInputChange} variant="secondary" />

        <p className={styles.questionHeader}>Questions</p>
        {quiz.questions.map((q, index) => (
          <div key={index} className="question">
            <label>Question:</label>
            <Input
              type="text"
              name="question"
              value={q.question}
              variant="secondary"
              onChange={(e) => handleInputChange(e, index)}
              required
            />

            <label>Marks:</label>
            <Input
              type="number"
              name="marks"
              value={q.marks}
              onChange={(e) => handleInputChange(e, index)}
              variant="secondary"
              required
            />

            <label>Type:</label>
            <select name="type" value={q.type} onChange={(e) => handleInputChange(e, index)} required>
              <option value="mcq">Multiple Choice</option>
              <option value="text">Text</option>
            </select>

            {q.type === 'mcq' && (
              <div className={styles.optionsWrapper}>
                <h3>Options</h3>
                {q.options.map((option, optIndex) => (
                  <div key={optIndex} className={styles.optionContainer}>
                    <label>Option {optIndex + 1}:</label>
                    <div className={styles.optionInputContainer}>
                      <Input
                        type="text"
                        name="option"
                        value={option.option}
                        variant="secondary"
                        onChange={(e) => handleInputChange(e, index, optIndex)}
                        required
                      />
                      <MdDeleteOutline onClick={() => handleRemoveOption(index, optIndex)} className={styles.deleteIcon} />
                    </div>
                    <div className={styles.isCorrectContainer}>
                      <label>Is Correct:</label>
                      <Input
                        type="checkbox"
                        name="isCorrect"
                        checked={option.isCorrect}
                        variant="secondary"
                        className={styles.isCorrectCheckbox}
                        onChange={(e) => handleInputChange(e, index, optIndex)}
                      />
                    </div>
                  </div>
                ))}
                <Button type="button" onClick={() => handleAddOption(index)} text="Add Option" />
              </div>
            )}
            <Button type="button" onClick={() => handleRemoveQuestion(index)} text="Remove Question" />
          </div>
        ))}
        <Button type="button" onClick={handleAddQuestion} text="Add Question" variant="secondary" />
        <div className={styles.submitContainer}>
          {/* <Message
						text={message.text}
						type={message.type}
						loading={loading}
					/> */}
          <div className={styles.buttonContainer}>
            <Button
              text="Clear"
              variant="outLined"
              // disabled={loading} onClick={onClearHandler}
            />
            <Button
              type="submit"
              text="Submit"
              variant="primary"
              //  loading={loading} disabled={loading}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
