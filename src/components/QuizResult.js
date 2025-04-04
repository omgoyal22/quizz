import React from 'react';
import './QuizResult.css'; // Import the CSS file

function QuizResult(props) {
  return (
    <div className="result-container">
      <div className="show-score">
        <h2>Your Score</h2>
        <p className="score-text">{props.score}</p>
        <p className="total-score-text">out of {props.totalScore}</p>
      </div>
      <button className="next-button" onClick={props.tryAgain}>Try Again</button>
    </div>
  );
}

export default QuizResult;