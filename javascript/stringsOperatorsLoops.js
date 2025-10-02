//sentences
var sentence1 = "Oscar has 5 kids and  a beautiful wife named Stella. 4 of the children are identical twins and the other child is the oldest by 1 year.";
var sentence2 = "The family has 6 relatives living in the San Antonio area, and 2 more relatives who live within 100 miles of the area.";
var sentence3 = "This summer they plan on traveling to El Paso to visit as many family members as possible.";

//variables-slices
var num1 = sentence1.slice(10,11);
var num2 = sentence1.slice(53,54);
var num3 = sentence1.slice(128,129);
// var length1 = sentence1.length;
var num4 = sentence2.slice(15,16);
var num5 = sentence2.slice(63,64);
var num6 = sentence2.slice(96,99);
//two seperate variables for 10/0
var num7 = sentence2.slice(96,98);
var num8 = sentence2.slice(98,99);
// var length2 = sentence2.length;

num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);
num4 = parseInt(num4);
num5 = parseInt(num5);
// num6 = parseInt(num6);
num7 = parseInt(num7);

var sumTotal = num1 + num2 + num3 + num4 + num5 + num7;
console.log("The variable sumTotal is storing " + sumTotal);
// console.log(sumTotal)

//replace el paso sentence variable
var sentenceNum2 = sentence2.slice(41,52);
var sentence3str = sentence3.replace("El Paso","San Antonio");
console.log(sentence3str);


//while loop to show how amny cars i saw on my trip
var i = 0;
while( i <= 10) {
    console.log("I saw saw " + i + " car(s) on my trip");
    i++;


}
// console.log(sentenceNum2);
// console.log(num1);
// console.log(num2);
// console.log(num3);

// console.log(num4);
// console.log(num5);
// console.log(num6);
// console.log(num7);
// console.log(num8);
