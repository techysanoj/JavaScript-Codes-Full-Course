// TIC-TAC-TOE-GAME

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-button");
let newGameBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // playerX, playerO
const winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

let count = 0;

const resetBoxes = () => {
    turnO = true;    
    enabledBoxes();
    msgContainer.classList.add("hide");
   // msg.innerText = "Winner";
}

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enabledBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText  = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const checkWinner = () => {
    for(pattern of winningPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != "") {
            if(pos1 === pos2 && pos2 === pos3) {
                //console.log("Winner !!");
                showWinner(pos1);
            }
        }
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        //console.log("box was clicked !!");
        if(turnO === true) {
            box.innerText = 'O';
            turnO = !turnO;
        }
        else {
            box.innerText = 'X';
            turnO = !turnO;
        }
        box.disabled = true;
        checkWinner();
        count++;
        if(count === 9) {
            msg.innerText = "Draw";
        }
    })
})



resetBtn.addEventListener("click", resetBoxes);
newGameBtn.addEventListener("click", resetBoxes);