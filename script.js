
function main() {
    let playAgain = 1;

    while (playAgain) {
        rockPaperScissorsGame();
        playAgain = parseInt(prompt('Play Again?\n1 - Yes\n0 - No'));
    }
}

main();