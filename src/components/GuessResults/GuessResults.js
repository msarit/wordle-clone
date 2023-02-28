import React from "react";

function GuessResults({ guessedWords }) {
  return (
    <div>
      {guessedWords.map(({ id, label }) => (
        <p key={id}>{label}</p>
      ))}
    </div>
  );
}

export default GuessResults;
