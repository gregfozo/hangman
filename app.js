const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Alberta', 3);

puzzleEl.textContent = game1.getPuzzle();
guessesEl.textContent = guessesEl.textContent = `Remaining guesses: ${game1.remainingGuesses}`;

window.addEventListener('keypress', function(e){
    game1.makeGuess(e.key)

    puzzleEl.textContent = game1.getPuzzle();

    if(puzzleEl.textContent.includes('*') && game1.remainingGuesses >= 1){
        puzzleEl.textContent = game1.getPuzzle();
        guessesEl.textContent = `Remaining guesses: ${game1.remainingGuesses}`;
    } else if(!puzzleEl.textContent.includes('*') && game1.remainingGuesses >= 1) {
        puzzleEl.textContent = "YOU WON!"
        guessesEl.textContent = "Congratulations!"
    } else {
        puzzleEl.textContent = "GAME OVER!"
        guessesEl.textContent = `You lost :( The word was "${game1.word.join("")}"`
    }
    
})

