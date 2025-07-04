const word = "LIVER";
let currentRow = 0;

function submitGuess() {
  const guess = document.getElementById("guess-input").value.toUpperCase();
  if (guess.length !== 5) return alert("5 letters please!");

  const row = document.createElement("div");
  row.className = "row";

  const usedLetters = Array(5).fill(false);
  const guessBoxes = [];

  for (let i = 0; i < 5; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.textContent = guess[i];

    if (guess[i] === word[i]) {
      cell.style.backgroundColor = "green";
      usedLetters[i] = true;
    }

    guessBoxes.push(cell);
    row.appendChild(cell);
  }

  for (let i = 0; i < 5; i++) {
    if (guess[i] !== word[i]) {
      for (let j = 0; j < 5; j++) {
        if (!usedLetters[j] && guess[i] === word[j]) {
          guessBoxes[i].style.backgroundColor = "orange";
          usedLetters[j] = true;
          break;
        }
      }
      if (guessBoxes[i].style.backgroundColor === "") {
        guessBoxes[i].style.backgroundColor = "gray";
      }
    }
  }

  document.getElementById("game-board").appendChild(row);

  if (guess === word) {
    document.getElementById("result").textContent = "🎉 Correct!";
  } else {
    currentRow++;
    if (currentRow === 6) {
      document.getElementById("result").textContent = `❌ Game over! Word was ${word}`;
    }
  }

  document.getElementById("guess-input").value = "";
}
