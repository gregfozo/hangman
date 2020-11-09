const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Alberta', 3);

puzzleEl.textContent = game1.getPuzzle();
guessesEl.textContent = guessesEl.textContent = `Remaining guesses: ${game1.remainingGuesses}`;

window.addEventListener('keypress', function(e){

    if (game1.remainingGuesses < 0 || !puzzleEl.textContent.includes("*")) {
        return;
        }

    game1.makeGuess(e.key)

    if(game1.getPuzzle().includes('*')){
        puzzleEl.textContent = game1.getPuzzle();
        guessesEl.textContent = `Remaining guesses: ${game1.remainingGuesses}`;
    } else if(!game1.getPuzzle().includes('*')) {
        puzzleEl.textContent = "YOU WON!"
        guessesEl.textContent = "Congratulations!"
    }

    if(game1.remainingGuesses < 1){
        puzzleEl.textContent = "GAME OVER!"
        guessesEl.textContent = `You lost :( The word was "${game1.word.join("")}"`  
    }
    
})

