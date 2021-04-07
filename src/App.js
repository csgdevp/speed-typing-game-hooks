import React, { useState, useEffect } from "react";

function App() {
  const STARTING_TIME = 7;
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function calculateWords(typedText) {
    const wordsArr = typedText.trim().split(" ");
    const filteredWords = wordsArr.filter((word) => word !== "");
    return filteredWords.length;
  }

  function startGame() {
    setIsTimeRunning(true);
    setTimeRemaining(STARTING_TIME);
    setText("");
  }

  function endGame() {
    setIsTimeRunning(false);
    const numWords = calculateWords(text);
    setWordCount(numWords);
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  return (
    <div>
      <h1>Speed Typing Game</h1>
      <textarea
        disabled={!isTimeRunning}
        value={text}
        onChange={handleChange}
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        Start
      </button>
      <h1>Your Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
