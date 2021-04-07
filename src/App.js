import React, { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(5);
  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function calculateWords(typedText) {
    const wordsArr = typedText.trim().split(" ");
    const filteredWords = wordsArr.filter((word) => word !== "");
    return filteredWords.length;
  }

  useEffect(() => {
    if (timeRemaining > 0) {
      const timeRemain = setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
      return () => {
        clearTimeout(timeRemain);
      };
    }
  }, [timeRemaining]);

  return (
    <div>
      <h1>Speed Typing Game</h1>
      <textarea value={text} onChange={handleChange} />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button>Start</button>
      <h1>Your Word Count: {calculateWords(text)}</h1>
    </div>
  );
}

export default App;
