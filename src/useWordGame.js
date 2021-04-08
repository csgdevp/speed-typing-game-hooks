import { useState, useRef, useEffect } from "react";

function useWordGame(startingTime = 5) {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(startingTime);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textareaRef = useRef(null);

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
    setTimeRemaining(startingTime);
    setText("");
    textareaRef.current.disabled = false;
    textareaRef.current.focus();
    setWordCount(0);
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
  return {
    text,
    timeRemaining,
    isTimeRunning,
    wordCount,
    textareaRef,
    handleChange,
    startGame,
  };
}

export default useWordGame;
