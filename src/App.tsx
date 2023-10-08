//using useState so need to import
import { useState } from "react";
//import words from the json file word list
import word from "./wordList.json";

//import components of hangman
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";

function App() {
  // set a useState to log/set the word the player needs to guess
  const [wordToGuess, setWordToGuess] = useState(() => {
    return word[Math.floor(Math.random() * word.length)];
  });

  // set a useState for winning the game to change the display depending on win/loss
  const [win, setWin] = useState(false);

  // set useState for completing the game
  const [completeGame, setCompleteGame] = useState(false);

  //store the guessed letters
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>Lose Win</div>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </div>
  );
}
export default App;
