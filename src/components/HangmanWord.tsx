import React from "react";

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  revealLetters?:boolean;
};

const HangmanWord = ({ guessedLetters, wordToGuess,revealLetters=false }: HangmanWordProps) => {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}>
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{
              visibility: guessedLetters.includes(letter) || revealLetters
                ? "visible"
                : "hidden",
                color: !guessedLetters.includes(letter) && revealLetters ? 'red' : 'black',
            }}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
