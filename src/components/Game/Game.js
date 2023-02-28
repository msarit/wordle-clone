import React from "react";
import Entry from "../Entry";
import GuessResults from "../GuessResults";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [enteredWord, setEnteredWord] = React.useState("");
  const [guessedWords, setGuessedWords] = React.useState([]);

  function storeProcessedWord(word) {
    const wordObj = {
      id: Math.random(),
      label: word,
    };
    const updatedGuessedWords = [...guessedWords, wordObj];
    setGuessedWords(updatedGuessedWords);
  }

  function processEnteredWord(event) {
    event.preventDefault();
    const processedWord = enteredWord.toUpperCase();
    storeProcessedWord(processedWord);
    setEnteredWord("");
  }

  return (
    <>
      <GuessResults guessedWords={guessedWords} />
      <Entry
        enteredWord={enteredWord}
        setEnteredWord={setEnteredWord}
        processEnteredWord={processEnteredWord}
      />
    </>
  );
}

export default Game;
