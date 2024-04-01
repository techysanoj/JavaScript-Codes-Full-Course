let userScore = 0;
let compScore = 0;

let msg = document.querySelector("#msg");
let userCount = document.querySelector("#user-score");
let compCount = document.querySelector("#comp-score")

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    //Math.random() // it generates 0 - 1 number randomly
    let ind = Math.floor( Math.random() * 3 ) // it will generates random whole number between 1 - 3
    return options[ind];
}

const userScoreInc = () => {
    userCount.innerText = `${userScore}`;
}
const compScoreInc = () => {
    compCount.innerText = `${compScore}`;
}

const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again !!";
    msg.style.color = "white";
    msg.style.backgroundColor = "#1C3041"
    msg.style.fontFamily = "Segoe UI"
}

const userWin = (userChoice, compChoice) => {
    msg.innerText = `You Win. Your ${userChoice} beats ${compChoice}`;
    msg.style.color = "white";
    msg.style.backgroundColor = "green";
    msg.style.fontFamily = "Segoe UI";
    userScoreInc();
}

const compWin = (userChoice, compChoice) => {
    msg.innerText = `Computer Won. Computer ${compChoice} beats your ${userChoice}`;
    msg.style.color = "white";
    msg.style.backgroundColor = "red";
    msg.style.fontFamily = "Segoe UI";
    compScoreInc();
}




const playGame  = (userChoice) => {
    // generate computer choice - for every micro thing we write a function - modular programming
    const compChoice = genCompChoice();
    //console.log("comp Choice = ", compChoice);
    if(userChoice === compChoice) {
        drawGame();
    }
    else if(userChoice == "rock" && compChoice == "scissors") {
        userScore++;
        userWin(userChoice, compChoice);
    }
    else if(userChoice == "paper" && compChoice == "rock") {
        userScore++;
        userWin(userChoice, compChoice);
    }
    else if(userChoice == "scissor" && compChoice == "paper") {
        userScore++;
        userWin(userChoice, compChoice);
    }
    else {
        compScore++;
        compWin(userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
