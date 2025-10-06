// Prompt the user for two numbers
var userInput = prompt("please enter a number between 1 and 40");
//converts the strings to int
userInput = parseInt(userInput);
//error for invalid inputs
while (isNaN(userInput) || userInput < 1 || userInput > 40) {
  alert("Invalid input! Please enter a number between 1 and 40.");
  userInput = parseInt(prompt("Please enter a number between 1 and 40"));
}
//same thing listed above, variable, string convert, and alert for wrong numbers
var userInput1 = prompt("pleae enter a number between 1 and 20");
userInput1 = parseInt(userInput1);
while (isNaN(userInput1) || userInput1 < 1 || userInput1 > 20) {
  alert("Invalid input! Please enter a number between 1 and 20.");
  userInput1 = parseInt(prompt("Please enter a number between 1 and 20"));
}
//prints in the console log`1m,m,
console.log("Input number here:", userInput);
console.log("Input number here:", userInput1);

//even or odd if else statement
var num = userInput * userInput1;

if (num % 2 == 0) {
  console.log(num + " is even.");
} else {
  console.log(num + "  is odd.");
}
