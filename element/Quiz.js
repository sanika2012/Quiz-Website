import React from 'react';
import './Quiz.css';
import  { useState, useEffect, useRef } from 'react';
import quizData from './QuizData';
import Feedback from './Feedback';
import Swal from 'sweetalert2';
import NextQuiz from './NextQuiz';
// import { useNavigate } from 'react-router-dom';


const Quiz = () => {

    const [answers, setAnswers] = useState(Array(quizData.length).fill(''));
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [resultMessage, setResultMessage] = useState('');
  const [message , setMessage] = useState('');
  const [timeLeft, setTimeLeft] = useState(30);
  const [nextQuizStarted, setNextQuizStarted] = useState(false);
  // const navigate= useNavigate();
  

  useEffect(() => {
    if (score > 7) {
        Swal.fire({
            icon: 'success',
            title: 'Well Done!',
            text: 'You scored above 7!',
        });
    }
}, [score]);

useEffect(() => {
  if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
  } else {
      handleSubmitQuiz();
  }
}, [timeLeft]);



  const handleAnswerChange = (index, option) => {
    const newAnswers = [...answers];
    newAnswers[index] = option;
    setAnswers(newAnswers);
  };

  const handleRestartQuiz = () => {
    setNextQuizStarted(false);
    window.location.href = '/quiz';
  };

  const handleSubmitQuiz = () => {
    // clearInterval('timer');
    let correctCount = 0;
    answers.forEach((answer, index) => {
      if (answer === quizData[index].answer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setShowScore(true);


    // Determine result message based on score
    if (correctCount < 5) {
      setResultMessage('Fail');
      setMessage('Need Improvement');
    } else if (correctCount >= 5 && correctCount < 7) {
      setResultMessage('Pass');
      setMessage('Good');
    } else {
      setResultMessage('Excellent 🎉');
      setMessage('Well Done');
    }

    const handleNextLevelQuiz = () => {
      setNextQuizStarted(true);
  };


  };
  const handleNextLevelQuiz = () => {
    // Redirect to the next level quiz page or perform other actions
    window.location.href = '/NextQuiz';
};
  


  return (
    <div className="quiz-page">
    <h3><u>Java OOP's Mock Test</u></h3>
    {!nextQuizStarted && !showScore ? (
      <>
        <div className={`timer ${timeLeft <= 10 ? 'red-timer' : ''}`}>
          Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? '0' : ''}{timeLeft % 60}
        </div>
        {quizData.map((questionData, index) => (
          <div key={index} className="question-container">
            <div className="question">
              <h3>{questionData.question}</h3>
            </div>
            <div className="options">
              {questionData.options.map((option, optionIndex) => (
                <div key={optionIndex} className="option">
                  <input
                    type="radio"
                    id={`option${index}${optionIndex}`}
                    name={`question${index}`}
                    value={option}
                    checked={answers[index] === option}
                    onChange={() => handleAnswerChange(index, option)}
                  />
                  <label htmlFor={`option${index}${optionIndex}`}>{option}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
        <button className="submit-button" onClick={handleSubmitQuiz}>Submit Quiz</button>
        {/* <button className="next-level-btn" onClick={handleNextLevelQuiz}>Next Level Quiz</button> */}
      </>
       ) : nextQuizStarted ? (
        <NextQuiz handleRestartQuiz={handleRestartQuiz} />
    ) : (
      <div className="score-section">
        <h3>Your Score</h3>
        <p>{score} out of {quizData.length}</p>
        <h3>{resultMessage}</h3>
        <p>{message}</p>
        {score < 5 && (
                <button onClick={handleRestartQuiz} className="restart-btn">
                    Restart Quiz
                </button>
            )}
             {score >= 5 && (
                        <button onClick={handleNextLevelQuiz} className="next-level-btn">
                            Next Level Quiz
                        </button>
                    )}
              <Feedback />
      </div>
    )}
  </div>
);
};


export default Quiz;