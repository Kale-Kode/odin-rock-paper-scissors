const moves = ["rock", "paper", "scissors"];
const combinations = [
    ["paper", "rock"],
    ["rock", "scissors"],
    ["scissors", "paper"]
];
let scores = [0, 0];

function get_computer_choice(){
    let choice = moves[Math.floor(Math.random()*3)];
    return choice;
}

function get_player_choice(){
    let choice = prompt("Your move: ");
    choice = choice.toLowerCase();
    return choice;
}

function playRound(p, c){
    for (let combo of combinations){
        if (p == combo[0] && c == combo[1]){
            scores[0] += 1;
            return `You Win! ${p} beats ${c}`;
        }
        else if (p == c){
            return `Tie!`;
        }
    }
    scores[1] += 1;
    return `You Lose! ${c} beats ${p}`;
}

function game(){
    for (let i = 0; i<5; i++){
        let player = get_player_choice();
        let computer = get_computer_choice();
        console.log(`${player} vs ${computer}`);
        console.log(playRound(player, computer));
    }

    console.log(`Scores:\nYou:${scores[0]}\nComputer:${scores[1]}`);
    if (scores[0] > scores[1]){
        console.log("You Win!");
    }else{
        console.log("You Lose!");
    }

    scores = [0,0];
}

game();
