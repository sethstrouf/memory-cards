import React, { useState } from 'react';
import Card from './Card';
import Scoreboard from './Scoreboard'
import './cards.css'

const Cards = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  let [chosenCards, setChosenCards] = useState([]);

  const handleClick = (e) => {
    let cardValue = e.target.value;
    if(chosenCards.includes(cardValue)) {
      clickedSameCard(cardValue);
    } else {
      clickedNewCard(cardValue);
    }
  }

  let cards = [
    <Card key="1" value="1" background="#7FFFD4" onClick={handleClick} />,
    <Card key="2" value="2" background="#6495ED" onClick={handleClick} />,
    <Card key="3" value="3" background="#DC143C" onClick={handleClick} />,
    <Card key="4" value="4" background="#40E0D0" onClick={handleClick} />,
    <Card key="5" value="5" background="#9932CC" onClick={handleClick} />,
    <Card key="6" value="6" background="#2E8B57" onClick={handleClick} />,
    <Card key="7" value="7" background="#FF69B4" onClick={handleClick} />,
    <Card key="8" value="8" background="#90EE90" onClick={handleClick} />,
    <Card key="9" value="9" background="#FFA500" onClick={handleClick} />,
    <Card key="10" value="10" background="#FF6347" onClick={handleClick} />
  ];

  const sortCards = () => {
    return cards.sort(()=> Math.random() - 0.5);
  };

  const clickedSameCard = (selected) => {
    if(currentScore > highScore) {
      setHighScore(currentScore);
    }
    alert("Oops! You already clicked that!");
    reset();
  };

  const reset = () => {
    setCurrentScore(0);
    setChosenCards([]);
  }

  const clickedNewCard = (selected) => {
    setCurrentScore(currentScore + 1);
    if(currentScore === 9) {
      alert("Great memory! You win!")
      reset();
      setHighScore(0);
    }
    chosenCards.push(selected);
  };

  let cardsContent =
    <div>
      <div className="cards">
        {sortCards()}
      </div>
        <Scoreboard currentScore={currentScore} highScore={highScore} />
    </div>

  return cardsContent;
}

export default Cards;
