// NextQuiz.js

import React, { useState, useEffect, useRef} from 'react';
import './Quiz.css'; // Ensure Quiz.css styles are imported or adjust as needed
import nextQuizData from './NextQuizData'; // Import quiz data for next level
import './NextQuiz.css';
import Swal from 'sweetalert2';

const NextQuiz = ({ handleRestartQuiz }) => {
    const [answers, setAnswers] = useState(Array(nextQuizData.length).fill(''));
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [resultMessage, setResultMessage] = useState('');
    const [timeLeft, setTimeLeft] = useState(60);
    const [message, setMessage] = useState('');
    const [cameraAccess, setCameraAccess] = useState(false);
    const cameraStreamRef = useRef(null);


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


    useEffect(() => {
        const requestCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                cameraStreamRef.current = stream;
                setCameraAccess(true);
            } catch (error) {
                console.error('Error accessing camera:', error);
            }
        };
      
        requestCamera();
      
        // Cleanup function to turn off camera when component unmounts or quiz is submitted
        return () => {
            if (cameraStreamRef.current) {
                const tracks = cameraStreamRef.current.getTracks();
                tracks.forEach(track => track.stop());
            }
        };
      }, []);  // Empty dependency array ensures this effect runs only once on component mount

     

    const handleAnswerChange = (index, option) => {
        const newAnswers = [...answers];
        newAnswers[index] = option;
        setAnswers(newAnswers);
    };

    const handleSubmitQuiz = () => {
        let correctCount = 0;
        answers.forEach((answer, index) => {
            if (answer === nextQuizData[index].answer) {
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

        if (cameraStreamRef.current) {
            const tracks = cameraStreamRef.current.getTracks();
            tracks.forEach(track => track.stop());
        }
    };

    const getCertificate = () => {
        window.location.href = '/Certificate';
    }
     
    

    return (
        <div className="quiz-page">
            <h1><u>HTML, CSS, JS Quiz</u></h1>
            {!showScore ? (
                <>
                <div className={`timer ${timeLeft <= 10 ? 'red-timer' : ''}`}>
                   Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
              </div>
                    {nextQuizData.map((questionData, index) => (
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
                    {/* <button className="restart-btn" onClick={handleRestartQuiz}>Restart Quiz</button> */}
                </>
            ) : (
                <div className="score-section">
                    <h2>Your Score</h2>
                    <p>{score} out of {nextQuizData.length}</p>
                    <h3>{resultMessage}</h3>
                    <p>{message}</p>
                    {score < 5 && (
                <button onClick={handleRestartQuiz} className="restart-btn">
                    Restart Quiz
                </button>
            )}
             {score >= 5 && (
                        <button onClick={getCertificate} className="certificate-btn">
                           Get Certificate
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default NextQuiz;
