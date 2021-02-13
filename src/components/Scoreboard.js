import React from 'react';
import './scoreboard.css';

const Scoreboard = (props) => {

  let content =
    <div className="scoreboard">
      Current Score: {props.currentScore} | High Score: {props.highScore}
    </div>

  return content;
}

export default Scoreboard;