//Conditionals: If Statements

//If Statements

//food and banned status
var customerIsBanned = false;
var soup = "tomato";
var crackers = true;
var reply;

if (!customerIsBanned) {
    if (soup && crackers) {
        reply = `We have ${soup} soup and crackers!`;
        if (soup && !crackers) {
            reply = "We have soup!!";
        } else if (!soup && crackers) {
            reply = "We have crackers!";
        }
        else {
            reply = "we don't have soup and crackers";
        }
    }
} else {
    reply = "Sorry, you are banned!";
}
console.log(reply);

//grade and college student
let testscore = Math.floor(Math.random() * 100);
let grade;
let collegestudent = false;

if (testscore >= 90) {
    grade = "A";
} else if (testscore >= 80) {
    grade = "B";
}else if (testscore >= 70) {
    grade = "C";
} else {
    if (collegestudent) {
        grade = "Unsatisfied";
    } else {    
        grade = "D";
    }
}
console.log(grade);

//rock paper scissors
let choices = ["rock", "paper", "scissors"];
let player1 = choices[Math.floor(Math.random() * 3)];
let player2 = choices[Math.floor(Math.random() * 3)];

console.log(`player1 choice: ${player1}`);
console.log(`player2 choice: ${player2}`);

if (player1 === player2) {
    console.log("It's a tie!");
} else if (player1 === "rock" && player2 === "paper" || player1 === "paper" && player2 === "scissors" || player1 === "scissors" && player2 === "rock") {  //multiple conditions
    console.log("Player 2 wins!");
} else {
    console.log("Player 1 wins!");
}
