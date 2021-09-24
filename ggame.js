var rngResult;
let score = 0;
let misses = 0;
var reveal = '? \xa0\xa0 ? \xa0\xa0 ?';
var title = 'Can you guess the button I have in mind?';

// processes user input based on RNG 1-3, updates the scores based on the results and calls the updatePlay function
function gameButton(selection) {
	rngResult = Math.floor(Math.random() * 3)+1;
    if (selection === rngResult) {
        title = 'You guessed right!';
        score += 1;
        misses += 1;
        updatePlay();
    } else {
        title = 'Better luck next time!';
        misses += 1;
        updatePlay();
    }
}


// updates the various displays to show the new results based on user input
function updatePlay() {
    if (rngResult === 1) {
        reveal = 'X \xa0\xa0 O \xa0\xa0 O';
    } else if (rngResult === 2) {
        reveal = 'O \xa0\xa0 X \xa0\xa0 O';
    } else {
        reveal = 'O \xa0\xa0 O \xa0\xa0 X';
    }
    var scoreboard = `Your score is ${score} out of ${misses}!`;
    document.getElementById('title').innerHTML = title;
    document.getElementById('scoreboard').innerHTML = scoreboard;
    document.getElementById('revealResults').innerHTML = reveal;
}

// resets the scores
function reset() {
    score = 0;
    misses = 0;
    updatePlay();
}

// initial page setup
document.getElementById('revealResults').innerHTML = reveal;
document.getElementById('title').innerHTML = title;
document.getElementById('scoreboard').innerHTML = 'Take your best shot!';