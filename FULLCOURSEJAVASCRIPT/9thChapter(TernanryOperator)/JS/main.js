// Conditionals: Ternary Operator

// If Statement

// Condition ? ifTrue : ifFalse;

//Food and Banned Status
let soups = ["Chicken soup", "Banana", "Tomato"];
let ban = [true, false];
let crackers = [true, false];
let soup = soups[Math.floor(Math.random() * soups.length)];
let isCustomerBanned = ban[Math.floor(Math.random() * ban.length)];
let cracker = crackers[Math.floor(Math.random() * crackers.length)];

let respone = isCustomerBanned ? "sorry you are banned"
    : soup && cracker ? `we have ${soup} and Crackers`
        : soup && !cracker ? `we have ${soup} but no Crackers`
            : !soup && cracker ? `we have no ${soup} but have Crackers`
                : `we have no ${soup} and we have no crackers`
    ;
console.log(respone);

//Grade and College Student
let collegeStudent = [true, false];
let testscore = Math.floor(Math.random() * 100) + 1;
let isCollegeStudent = collegeStudent[Math.floor(Math.random() * collegeStudent.length)];

let grade = testscore > 89 ? "Grade A"
    : testscore > 79 ? "Grade B"
        : testscore > 69 ? "Grade C"
            : isCollegeStudent ? "Grade D"
                : "BAGSAK"
    ;

console.log(grade);

//Rock Paper Scissors
let player1 = ["rock", "paper", "scissors"];
let player2 = ["rock", "paper", "scissors"];
let player1Choice = player1[Math.floor(Math.random() * player1.length)];
let player2Choice = player1[Math.floor(Math.random() * player2.length)];

let decideWinner = player1Choice === player2Choice ? "It's a Tie"
    : player1Choice === "rock" && player2Choice === "scissors" ? "Player 1 Won"
        : player1Choice === "scissors" && player2Choice === "paper" ? "Player 1 Won"
            : player1Choice === "paper" && player2Choice === "rock" ? "Player 1 Won"
            : "player 2 Won"
;

console.log(decideWinner);