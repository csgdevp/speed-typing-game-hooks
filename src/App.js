import React from "react";
import useWordGame from "./useWordGame";

function App() {
  const {
    text,
    timeRemaining,
    isTimeRunning,
    wordCount,
    textareaRef,
    handleChange,
    startGame,
  } = useWordGame(10);
  return (
    <div>
      <h1>Speed Typing Game</h1>
      <textarea
        ref={textareaRef}
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
