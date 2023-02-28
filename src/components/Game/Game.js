import React from "react";
import Entry from "../Entry";
import GuessResults from "../GuessResults";
import GameEndBanner from "../GameEndBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);

function Game() {
  const [guessedWords, setGuessedWords] = React.useState([]);

  const gameWon = guessedWords.includes(answer);
  const gameEnded = guessedWords.length === NUM_OF_GUESSES_ALLOWED || gameWon;

  function storeProcessedWord(word) {
    const updatedGuessedWords = [...guessedWords, word];
    setGuessedWords(updatedGuessedWords);
  }

  return (
    <>
      <GuessResults guessedWords={guessedWords} answer={answer} />
      <button
        className="reset-btn"
        onClick={() => window.location.reload(true)}
      >
        Reset Game
      </button>
      <Entry storeProcessedWord={storeProcessedWord} gameEnded={gameEnded} />
      {gameEnded && (
        <GameEndBanner
          gameWon={gameWon}
          numGuesses={guessedWords.length}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
