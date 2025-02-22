import React, { useState } from "react";
import styles from "./createQuiz.module.css";
import Input from "@/components/ui/input/input";
import Button from "@/components/ui/button/button";

export default function CreateQuiz() {
  const [quiz, setQuiz] = useState({
    title: "",
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
          question: "",
          type: "mcq",
          marks: 1,
          options: [{ option: "", isCorrect: false }],
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
    updatedQuestions[index].options.push({ option: "", isCorrect: false });
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
      updatedQuestions[index].options[optionIndex][name] = type === "checkbox" ? checked : value;
      setQuiz({ ...quiz, questions: updatedQuestions });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quiz Payload:", quiz);
  };

  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmit} className="quiz-creator">
        <h1>Create Quiz</h1>

        <div>
          <label>Title:</label>
          <Input
            type="text"
            name="title"
            value={quiz.title}
            onChange={handleInputChange}
            variant="secondary"
            required
          />
        </div>

        <div>
          <label>Quiz Time (minutes):</label>
          <Input
            type="number"
            name="quizTime"
            value={quiz.quizTime}
            onChange={handleInputChange}
            variant="secondary"
            required
          />
        </div>

        <div>
          <label>Passing Score (%):</label>
          <Input
            type="number"
            name="passingScore"
            value={quiz.passingScore}
            onChange={handleInputChange}
            variant="secondary"
            required
          />
        </div>

        <div>
          <label>Max Attempts:</label>
          <Input
            type="number"
            name="maxAttempts"
            value={quiz.maxAttempts}
            onChange={handleInputChange}
            variant="secondary"
            required
          />
        </div>

        <h2>Questions</h2>
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

            {q.type === "mcq" && (
              <div className="options">
                <h3>Options</h3>
                {q.options.map((option, optIndex) => (
                  <div key={optIndex} className="option">
                    <label>Option:</label>
                    <Input
                      type="text"
                      name="option"
                      value={option.option}
                      variant="secondary"
                      onChange={(e) => handleInputChange(e, index, optIndex)}
                      required
                    />

                    <label>Is Correct:</label>
                    <Input
                      type="checkbox"
                      name="isCorrect"
                      checked={option.isCorrect}
                      variant="secondary"
                      onChange={(e) => handleInputChange(e, index, optIndex)}
                    />
                    <Button type="button" onClick={() => handleRemoveOption(index, optIndex)} text="Remove Option" />
                  </div>
                ))}
                <Button type="button" onClick={() => handleAddOption(index)} text="Add Option" />
              </div>
            )}
            <Button type="button" onClick={() => handleRemoveQuestion(index)} text="Remove Question" />
          </div>
        ))}

        <Button type="button" onClick={handleAddQuestion} text="Add Question" />

        <Button type="submit" text="Create Quiz" />
      </form>
    </div>
  );
}
