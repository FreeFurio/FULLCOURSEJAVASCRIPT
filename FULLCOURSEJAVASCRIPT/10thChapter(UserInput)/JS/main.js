//User Input

//website pop up
alert("WOW")

//user can input
let boolean = confirm("hello === true\nCancle === false");
console.log(boolean)

//website pop up but has return boolean value
let inputName = prompt("please enter your name");

console.log(inputName ?? "you didnt put your name"); //nullish coalescing operator.  outputs right-hand if its undefined/null, othersiwe left-hand 

if (inputName) {
    console.log(inputName);
} else {
    console.log("you didnt put your name")
}
