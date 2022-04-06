// ============================== QUESTION 1
// Declare a string variable and return true or false based on the condition that a sub-string exists.
console.log("\n" + "QUESTION 1");
let alpha = "Hello World";
console.log(`sting alpha contains 'Hello' = ${alpha.includes("Hello")}`);

// ============================== QUESTION 2
// Declare a string variable that contains white-space characters: Tabs and Spaces. Trim that variable so that those white-space characters are not used.
console.log("\n" + "QUESTION 2");
let beta = "      -Hello World-       "
console.log(`trimmed output of string beta is = ${beta.trim()}`);

// ============================== QUESTION 3
// Replace a sub-string inside a string with another sub-string
console.log("\n" + "QUESTION 3");
console.log(`string alpha after replacement = ${alpha.replace("World", "Earth")}`);

// ============================== QUESTION 4
console.log("\n" + "QUESTION 4");
let test1;
let test2 = null;

console.log(`test1, value: ${test1}, type: ${typeof test1}`);
console.log(`test2, value: ${test2}, type: ${typeof test2}`);

if(!test1 && !test2 ){
   console.log("IF block executed because both are falsey");
}
if(test1 === test2 ){
   console.log("IF block executed because both are equal");
}
else{ console.log("IF block NOT executed because both are not strictly equal");}


// ============================== QUESTION 5
// Take a phone number inside a string variable, lets say +92-321-0000000 and make three separate variables.
console.log("\n" + "QUESTION 5");

let phone = "+92-321-1234567";
let country = phone.substring(0, 3);
let network = phone.substring(4, 7);
let number = phone.substring(8);

console.log(`country code = ${country} `);
console.log(`network code = ${network} `);
console.log(`number = ${number} `);
console.log(`complete phone no. = ${phone} `);

// ============================== QUESTION 6
// Write code that prints the length of a string.
console.log("\n" + "QUESTION 6");
console.log(`length of string alpha = ${alpha.length}`);

// ============================== QUESTION 7
// Write code that returns the Index of a character inside a string.
console.log("\n" + "QUESTION 7");
console.log(`index of "o" in string alpha = ${alpha.indexOf("o")}`);

// ============================== QUESTION 8
// Write code that converts a string of all lowercase letters into all UPPERCASE.
console.log("\n" + "QUESTION 8");
console.log(`string alpha in uppercase = ${alpha.toUpperCase()}`);

// ============================== QUESTION 9
console.log("\n" + "QUESTION 9");
let test3 = 0;
// let test3 = "";
// let test3 = false;
// let test3 = undefined;

if(!test3){
   console.log("IF block executed");
}
else{ console.log("IF block NOT executed");}


// ============================== QUESTION 10
// Write code that converts a string into Sentence case. 
console.log("\n" + "QUESTION 10");

let sentence = "ThE QuIcK BrOWn FoX JUmPed OveR tHe laZy DoG. ThE LaZy dog Was Not Happy.";
sentence = sentence.toLowerCase();
let split = sentence.split(".");
// console.log(split);

for (i = 0; i < split.length; i++) {
   split[i] = split[i].trim();
   split[i] = split[i].substring(0, 1).toUpperCase() + split[i].substring(1);
}

sentence = split.join('. ').trim();
console.log(sentence);
