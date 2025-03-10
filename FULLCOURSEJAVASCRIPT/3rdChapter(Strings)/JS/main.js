// String
const myVariable = "Mathematics";

// specified index (position) in a string. (0 -..)
console.log(myVariable.charAt(1)); 

// Length of the Property
console.log(myVariable.length); 

// position of the first occurrence of a value in a string (A-Z, a-z)
console.log(myVariable.indexOf("th"));
console.log(myVariable.lastIndexOf("th"));

//selected elements in an array, as a new array.
console.log(myVariable.slice(0, 6)); // start, end

// extracts characters, between two indices (positions), from a string, and returns the substring
console.log(myVariable.substring(0, 6)); // start, end

//converts a string to uppercase letters
console.log(myVariable.toUpperCase())

//converts a string to lowercase letters
console.log(myVariable.toLowerCase())

//returns true if a string contains a specified string. Otherwise it returns false
console.log(myVariable.includes("Math")); // true
console.log(myVariable.includes("Science")); // false

//splits a string into an array of substrings
console.log(myVariable.split("")); // ["M", "a", "t", "h", "e", "m", "a", "t", "i", "c", "s"]

