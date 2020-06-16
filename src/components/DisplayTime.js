import React from 'react';
import ScoreDisplay from './ScoreDisplay';

const DisplayTime = ({ displayTime, scoreDisplay, startDisabled, startTimeMatch, scoreBoard }) => (
  <div>
   <div className="content_game_over">
      <p className="content_game">{displayTime === 0 ? 'Game Over!' : undefined }</p>
   </div>
    <button 
      className="big-button"
      disabled={!startDisabled} 
      onClick={startTimeMatch} >
      Start Game
    </button>
  <div className="widget-time__and__score">
    <p className="widget_time-score">Time Left:{displayTime}</p>
    <p className="widget_time-score">Score:{scoreDisplay}</p>
  </div>
  <div className="content_game__play">
    <p className="content_text">Type each word in the given amount of seconds 
    to score. To play again, just press the button. Your score will reset.</p>
  </div>
    <div className="widget-header">
      <h3 className="widget-header__title">High Score</h3>
    </div>
    <div>
      {scoreBoard.sort((a, b) => b - a)
                .map((score, index) => 
        <ScoreDisplay 
          key={score}
          key={index}
          scores={score}
          count={index + 1}
      />
    )}
  </div>
  </div>
);

export default DisplayTime;


