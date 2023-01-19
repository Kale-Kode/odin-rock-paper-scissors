//initialise variables
const moves = ["rock", "paper", "scissors"];
const combinations = [
    ["paper", "rock"],
    ["rock", "scissors"],
    ["scissors", "paper"]
];
let scores = [0, 0];
const results = document.querySelector(".results");

//get random computer choice
function get_computer_choice(){
    let choice = moves[Math.floor(Math.random()*3)];
    return choice;
}

//make player move and check if they win or lose
function playerMove(move){
    let c = get_computer_choice();
    results.textContent = `${move} vs ${c}`;
    for (let combo of combinations) {
        if (combo[0] == move && combo[1] == c) {
            scores[0] += 1;
            return `You win!\n${move} beats ${c}`;
        }
        else if (move == c){
        return "Tie!";
        }
    };
    scores[1] += 1;
    return `you lose!\n${c} beats ${move}`;
}

//play rounds
function play(){
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.addEventListener("click", ()=>{
        let p = document.createElement("p");
        p.textContent = playerMove(button.classList.value);
        results.appendChild(p);
        let score = document.createElement("p");
        score.textContent = `You: ${scores[0]}\nComputer: ${scores[1]}`;
        results.appendChild(score)

        const win = document.createElement("p");
        if (scores[0] == 5){
            win.textContent = "You Win!";
            results.append(win);
            button.removeEventListener("click", this);
            throw new Error();
        }else if (scores[1] == 5){
            win.textContent = "You Lose!";
            results.append(win);
            button.removeEventListener("click", this);
            throw new Error();
        }
    }));
}

play();

