import React from "react";

function Entry({ storeProcessedWord, gameEnded }) {
  const [enteredWord, setEnteredWord] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        storeProcessedWord(enteredWord.toUpperCase());
        setEnteredWord("");
      }}
    >
      <label htmlFor="guess-input">Enter guess (five letter words only):</label>
      <input
        id="guess-input"
        type="text"
        pattern="[A-Za-z]{5}"
        disabled={gameEnded}
        value={enteredWord}
        onChange={(event) => setEnteredWord(event.target.value)}
      />
    </form>
  );
}

export default Entry;
