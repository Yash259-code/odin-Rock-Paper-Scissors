let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let num = Math.floor(Math.random()*4);
    if(num == 0) return "rock"; else if(num == 1) return "paper"; else return "scissor";
}

function getHumanChoice(){
    let myWord = prompt("Enter word: ");
    return myWord.toLowerCase();
}

function playRound(){
    let word = getComputerChoice();
    let myWord = getHumanChoice();

    if(word == "rock"){
        if(myWord == "rock")
            console.log("Tie");
        else if(myWord == "paper " + word + " " + myWord){
            console.log("You Lose " + word + " " + myWord);
            computerScore++;
        }
        else{
            console.log("You Win " + word + " " + myWord);
            humanScore++;
        }
    }
    else if(word == "paper"){
        if(myWord == "paper")
            console.log("Tie " + word + " " + myWord);
        else if(myWord == "rock"){
            console.log("You Lose " + word + " " + myWord);
            computerScore++;
        }
        else{
            console.log("You Win " + word + " " + myWord);
            humanScore++;
        }
    }
    else{
        if(myWord == "scissor")
            console.log("Tie");
        else if(myWord == "paper " + word + " " + myWord){
            console.log("You Lose " + word + " " + myWord);
            computerScore++;
        }
        else{
            console.log("You Win " + word + " " + myWord);
            humanScore++;
        }
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        playRound();
    }
}

playGame();