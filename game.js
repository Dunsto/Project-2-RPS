
//Helper function to generate random number between 1 and 3
// 1 - Rock
// 2 - Paper
// 3 - Scissors
function generateRPS() {
    let min = 1, max = 3;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getUserGuess(){
    let answer = prompt('Pick rock paper or scissors').toLowerCase();;
    while (answer !== 'rock' && answer !== 'paper' && answer !== 'scissors' ){
        answer = prompt('Please enter \'rock\' \'paper\' or \'scissors\'').toLowerCase();
        
    }
    return answer;
}

//Plays the rocker paper scissors game
function rockPaperScissorsGame() {
    let rps = generateRPS();
    let guess = getUserGuess();

    switch (guess) {
        case 'rock':
            switch (rps) {
                case 1:
                    alert('Draw');
                    break;
                case 2:
                    alert('You\'ve lost.');
                    break;
                case 3:
                    alert('You\'ve won!');
                    break;
            }
            break;
        case 'paper':
            switch (rps) {
                case 1:
                    alert('You\'ve won!');
                    break;
                case 2:
                    alert('Draw');
                    break;
                case 3:
                    alert('You\'ve lost');
                    break;
            }
            break
        case 'scissors':
            switch (rps) {
                case 1:
                    alert('You\'ve lost');
                    break;
                case 2:
                    alert('You\'ve won!');
                    break;
                case 3:
                    alert('Draw');
                    break;
            }
            break;

    }
}
