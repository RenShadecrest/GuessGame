var RNGresult;
let score = 0;
let misses = 0;
var reveal = '? \xa0\xa0 ? \xa0\xa0 ?';
var title = 'Can you guess the button I have in mind?';

document.getElementById('revealResults').innerHTML = reveal;

function RNG() {
    RNGresult = Math.floor(Math.random() * 3)+1;
    console.log(RNGresult);
} 

function gameButton(selection) {
    RNG();
    if (selection === RNGresult) {
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

function results() {
    if (RNGresult === 1) {
        reveal = 'X \xa0\xa0 O \xa0\xa0 O';
    } else if (RNGresult === 2) {
        reveal = 'O \xa0\xa0 X \xa0\xa0 O';
    } else {
        reveal = 'O \xa0\xa0 O \xa0\xa0 X';
    }
}

function updatePlay() {
    results();
    var scoreboard = `Your score is ${score} out of ${misses}!`;
    document.getElementById('title').innerHTML = title;
    document.getElementById('scoreboard').innerHTML = scoreboard;
    document.getElementById('revealResults').innerHTML = reveal;
}

function reset() {
    score = 0;
    misses = 0;
    updatePlay();
}

document.getElementById('title').innerHTML = title;
document.getElementById('scoreboard').innerHTML = 'Take your best shot!';