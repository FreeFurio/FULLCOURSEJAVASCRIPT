//Your First Game // Rock Paper Scissors
let playGame = confirm("Do you want to play a Game?");

if (playGame) {
    alert("Lets play")
    let RPS = ["rock", "paper", "scissor"];
    let player1 = prompt("Player 1 What is your choice?");
    let player2 = RPS[Math.floor(Math.random() * RPS.length)];

    player1
        ? player1 = player1.trim().toLowerCase : alert("you didn't put a choice") 

        RPS.includes(player1) && RPS.includes(player2)
            ? player1 === player2
                ? alert("It's a Tie")
                : (player1 === "rock" && player2 === "scissor")
                    || (player1 === "scissor" && player2 === "paper")
                    || (player1 === "paper" && player2 === "rock")
                    ? alert("player 1 Won")
                    : alert("player 2 Won")
            : alert("you didn't put a choice")


    let playagain = confirm("do you want to play again?");
    playagain ? location.reload() : "edi dont"

} else {
    alert("edi dont");
} 