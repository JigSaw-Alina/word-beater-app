import React from 'react';

const ScoreDisplay = ({ scores, count }) => (
    <div className="scores">
      <p className="scores__text">{count}. {scores}</p>
    </div>
);

export default ScoreDisplay
