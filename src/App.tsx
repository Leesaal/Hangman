function App() {
  // set a useState to log/set the word the player needs to guess
  const [wordToGuess, setWordToGuess] = useState("Test");

  // set a useState for winning the game to change the display depending on win/loss
  const [win, setWin] = useState(false);

  // set useState for completing the game
  const [completeGame, setCompleteGame] = useState(false);

  return <h1>Hi</h1>;
}
export default App;
