//Number
//Integer is a Whole Number
const myNumber = 42;

//Float is a Decimal Number
const myFloat = 42.01;

//String will show white in console
const myString = "42.1234abce";

console.log(myNumber);
console.log(myFloat);
console.log(myString);
console.log(myNumber === myString); //false
console.log(myNumber === myFloat); //false
console.log(myString + 2);//422

//Convert String to Number
console.log(Number(myString) + myNumber);//NaN
console.log(Number("Lance"));//NaN
console.log(Number(true));// 1  
console.log(Number(false));//0

//returns true if a value is an integer of the datatype Number. Otherwise it returns false.
console.log(Number.isInteger(myString));//false
console.log(Number.isInteger(myNumber));//true

//parses a value as a string and returns the first integer.
console.log(Number.parseFloat(myString));

//rounds the string to a specified number of decimals. Converts a number to a string.
console.log(Number.parseFloat(myString).toFixed(2));//42.12(string)

//parses a value as a string and returns the first number.
console.log(Number.parseInt(myFloat));
console.log(Number.parseInt(myString));

//run multiple methods on the same element within a single statement.
console.log(Number.parseFloat("42.1234abce").toFixed(2).toString());//42.12  function chaining example

//returns true if a value is NaN. converts the value to a number before testing it.
console.log(isNaN("STRING"));//true
console.log(Number.isNaN(myNumber));//false

