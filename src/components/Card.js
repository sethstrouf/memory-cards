import React, { useState } from 'react';
import './card.css';

const Card = (props) => {
  const [value] = useState(props.value);

  let cardContent =
    <button
      className="card"
      style={{backgroundColor: props.background}}
      onClick={props.onClick}
      value={value}
    >
    </button>

  return cardContent;
}

export default Card;