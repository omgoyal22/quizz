import React, { useState, useEffect, useRef } from 'react';
import Webcam from 'react-webcam';
import QuizResult from './QuizResult';
import { ReactQuizData } from '../Data/ReactQuizData';
import { JavaScriptQuizData } from '../Data/JavaScriptQuizData';
import { CppQuizData } from '../Data/CppQuizData';
import { CQuizData } from '../Data/CQuizData';
import { NodeJSQuizData } from '../Data/NodeJSQuizData';
import { FullStackQuizData } from '../Data/FullStackQuizData';
import './Quiz.css';

function Quiz() {
    const [quizType, setQuizType] = useState(null);
    const [numQuestions, setNumQuestions] = useState(10);
    const [filteredQuizData, setFilteredQuizData] = useState([]);
    const [score, setScore] = useState(0);
    const [clickedOptions, setClickedOptions] = useState({});
    const [showResult, setShowResult] = useState(false);
    const [timeLeft, setTimeLeft] = useState(180);
    const [timerActive, setTimerActive] = useState(false);
    const [selectingQuestions, setSelectingQuestions] = useState(false);
    const [inputError, setInputError] = useState('');
    const [webcamEnabled, setWebcamEnabled] = useState(false);

    const webcamRef = useRef(null);

    const quizDataMap = {
        react: ReactQuizData,
        javascript: JavaScriptQuizData,
        cpp: CppQuizData,
        c: CQuizData,
        nodejs: NodeJSQuizData,
        fullstack: FullStackQuizData,
    };

    useEffect(() => {
        if (timerActive && timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0 && timerActive) {
            setShowResult(true);
            setTimerActive(false);
            setWebcamEnabled(false);
        }
    }, [timeLeft, timerActive]);

    const getRandomQuestions = (questions, num) => {
        let shuffled = [...questions].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    };

    const startQuizSetup = (type) => {
        setQuizType(type);
        setSelectingQuestions(true);
    };

    const startQuiz = () => {
        if (!quizType) return;

        const maxQuestions = quizDataMap[quizType].length;

        if (numQuestions < 1 || numQuestions > maxQuestions) {
            setInputError(`Enter a number between 1 and ${maxQuestions}`);
            return;
        }

        setInputError('');
        const selectedQuestions = getRandomQuestions(quizDataMap[quizType], numQuestions);
        setFilteredQuizData(selectedQuestions);

        setShowResult(false);
        setScore(0);
        setClickedOptions({});
        setTimeLeft(180);
        setTimerActive(true);
        setSelectingQuestions(false);
        setWebcamEnabled(true);
    };

    const handleOptionClick = (questionIndex, optionIndex) => {
        setClickedOptions({
            ...clickedOptions,
            [questionIndex]: optionIndex + 1,
        });
    };

    const calculateScore = () => {
        let totalScore = 0;
        filteredQuizData.forEach((question, index) => {
            if (clickedOptions[index] === question.answer) {
                totalScore += 1;
            }
        });
        setScore(totalScore);
        setShowResult(true);
        setWebcamEnabled(false);
    };

    const resetAll = () => {
        setQuizType(null);
        setShowResult(false);
        setClickedOptions({});
        setScore(0);
        setTimeLeft(0);
        setTimerActive(false);
        setWebcamEnabled(false);
    };

    return (
        <div className="quiz-container">
            <h1 className="quiz-title">Student Quiz Dashboard</h1>
            <div className="quiz-box">
                {!quizType ? (
                    <>
                        <h2>Select a Quiz Topic</h2>
                        <div className="quiz-list">
                            {Object.keys(quizDataMap).map((key) => (
                                <div key={key} className="quiz-item">
                                    <span className="quiz-subject">{key.toUpperCase()}</span>
                                    <button className="start-btn" onClick={() => startQuizSetup(key)}>
                                        Start
                                    </button>
                                </div>
                            ))}
                        </div>
                    </>
                ) : selectingQuestions ? (
                    <div className="question-select-popup">
                        <h2>Enter Number of Questions</h2>
                        <input
                            type="number"
                            min="1"
                            max={quizDataMap[quizType].length}
                            value={numQuestions}
                            onChange={(e) => setNumQuestions(Number(e.target.value))}
                            className="num-questions-input"
                        />
                        {inputError && <p className="error-message">{inputError}</p>}
                        <button className="start-btn" onClick={startQuiz}>Start Quiz</button>
                    </div>
                ) : showResult ? (
                    <QuizResult score={score} totalScore={filteredQuizData.length} tryAgain={resetAll} />
                ) : (
                    <>
                        <div className="quiz-header">
                            <h2>{quizType.toUpperCase()} Quiz</h2>
                            <div className="timer">
                                Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
                            </div>
                        </div>

                        {webcamEnabled && (
                            <div className="webcam-container">
                                <Webcam
                                    audio={false}
                                    ref={webcamRef}
                                    screenshotFormat="image/jpeg"
                                    className="webcam"
                                />
                            </div>
                        )}

                        <div className="questions-container">
                            {filteredQuizData.map((question, questionIndex) => (
                                <div key={questionIndex} className="question">
                                    <span className="question-number">{questionIndex + 1}. </span>
                                    <span className="question-text">{question.question}</span>
                                    <div className="option-container">
                                        {question.options.map((option, optionIndex) => (
                                            <button
                                                className={`option-btn ${clickedOptions[questionIndex] === optionIndex + 1 ? "selected" : ""}`}
                                                key={optionIndex}
                                                onClick={() => handleOptionClick(questionIndex, optionIndex)}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="submit-btn" onClick={calculateScore}>Submit</button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Quiz;
