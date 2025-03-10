//Coding Challenge

//Write Code that will Return a random Letter from your name

const Name = "Reeon Lance Tobia";
console.log(Name.length);

let indexNumber = Math.floor(Math.random() * Name.length);
console.log(indexNumber);

console.log(Name.charAt(indexNumber));

//Simple way to do it
console.log(Name.charAt(Math.floor(Math.random() * Name.length)));