// Conditional Statements: Switch Statements

//Switch Statements

let choice = Math.floor(Math.random() * 3) + 1; //Math.random() generates a random number between 0 and 1

switch (choice) {
    case 1:
        console.log("You have selected 1");
        break;  //break is used to stop the execution of the code
    case 2:
        console.log("You have selected 2");
        break;

    default:
        console.log("You have selected default");
}

//Food and bannable status
let foods = ["apple", "banana"];
let food = foods[Math.floor(Math.random() * foods.length)];
let ban = [true, false];
let isCustomerBanned = ban[Math.floor(Math.random() * ban.length)];
let cracker = [true, false];
let crackers = cracker[Math.floor(Math.random() * cracker.length)];

if (!isCustomerBanned) {
    switch (food) {
        case "apple":
            if (crackers) {
                console.log("You have selected apple and crackers");
            } else {
                console.log("You have selected apple and no crackers");
            }
            break;
        case "banana":
            if (crackers) {
                console.log("You have selected banana and crackers");
            } else {
                console.log("You have selected banana and no crackers");
            }
            break;

        default:
            if (crackers) {
                console.log("You have selected crackers and no food");
            } else {
                console.log("You have not selected anything");
            }
    }
} else {
    console.log("You are banned");
}

//rock paper scissors 
let player1choice = ["rock", "paper", "scissor"];
let player1 = player1choice[Math.floor(Math.random() * 3)];
let player2choice = ["rock", "paper", "scissor"];
let player2 = player2choice[Math.floor(Math.random() * 3)];

console.log(player1);
console.log(player2);


switch (player1) {
    case player2:
        console.log("its a tie");
        break;
    case "rock":
        if (player2 === "paper") {
            console.log("Player 2 Won");
        } else {
            console.log("Player 1 Won");
        }
        break;
    case "paper":
        if (player2 === "scissor") {
            console.log("Player 2 Won");
        } else {
            console.log("Player 1 Won");
        }
        break;
    case "scissor":s
        if (player2 === "rock") {
            console.log("Player 2 Won");
        } else {
            console.log("Player 1 Won");
        }
        break;
}

//rock paper Scissors Advanced(WALANG KWENTA)
switch (player1) {
    case "rock":
    case "paper":
    case "scissor":
        decideWinner(player1, player2);
        break;
}

function decideWinner(player1, player2) {
    if (player1 === player2) {
        console.log("its a tie");
    } else if  ((player1 === "rock" &&  player2 ==="scissor") || (player1 === "scissor" && player2 === "paper") || (player1 === "paper" && player2 === "rock"))  {
        console.log("Player 1 Won");
    } else {
        console.log("player 2 Won");
    }
}