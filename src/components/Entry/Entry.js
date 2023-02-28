import React from "react";

function Entry({ enteredWord, setEnteredWord, processEnteredWord }) {
  return (
    <form className="guess-input-wrapper" onSubmit={processEnteredWord}>
      <label htmlFor="guess-input">Enter guess (five letter words only):</label>
      <input
        id="guess-input"
        type="text"
        pattern="[A-Za-z]{5}"
        value={enteredWord}
        onChange={(event) => setEnteredWord(event.target.value)}
      />
    </form>
  );
}

export default Entry;
