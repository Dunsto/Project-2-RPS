
function main() {
    let playAgain = 1;

    while (playAgain) {
        rockPaperScissorsGame();
        playAgain = parseInt(prompt('Play Again?\n1 - Yes\n0 - No'));
    }
}

let playerSelection;

function beginGame() {
    document.querySelector('#game-start')
    .addEventListener("click", () => {
        document.querySelector("#game-start").style.display = "none";
        document.querySelector("#shoot").style.display = "block";
        listenForChoice();
    })
}

function listenForChoice(){
    const choices = document.querySelectorAll('.choice')
    choices.forEach((choice, i, arr) => {
        choice.addEventListener('click', (e) => {
            resetChoiceColor();
            playerSelection = arr[i].id;
            console.log(`${playerSelection}`);
            e.target.style.color = "#DAA520";
            e.target.style.opacity = "1";
            console.log(`${e.target}`);


        })
    });
}

function resetChoiceColor(){
    const choices = document.querySelectorAll('.choice')
    choices.forEach(choice => {
        for (const attr of choice.attributes) {
            console.log(attr)
        }

       // console.log(choice.firstChild.nodeName)
      //  choice.firstChild.style.color =  'rgb(59, 62, 62)';
    })

}

beginGame();