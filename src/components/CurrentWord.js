import React from 'react';

const CurrentWord = ({ currentWord }) => (
    <div className="content_word">
      <h1 className="current-word">{currentWord}</h1>
    </div>
);

export default CurrentWord;