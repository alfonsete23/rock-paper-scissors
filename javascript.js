const results = [
    [0, -1, 1],
    [1, 0, -1],
    [-1, 1, 0]
]

const options = ["rock", "paper", "scissors"];

function playRound(playerSelection) {

    const sign = document.querySelector(".sign");
    const computerSelection = Math.floor(Math.random() * 3);
    switch (results[playerSelection][computerSelection]) {
        case -1:
            sign.textContent = `You lose. ${options[computerSelection]} beats ${options[playerSelection]}`;
            break;
        case 0:
            sign.textContent = "Tied round.";
            break;
        case 1:
            sign.textContent = `You win! ${options[playerSelection]} beats ${options[computerSelection]}!`
    }
    console.log(results[playerSelection][computerSelection]);
}

const btns = document.querySelectorAll("button");
btns.forEach(item => {
    item.addEventListener("click", function() {playRound(options.indexOf(item.classList.value))})
});