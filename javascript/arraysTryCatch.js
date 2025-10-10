//variables
var siteTopics = [
  "Tyler the Creator",
  "The Marias",
  "Frank Ocean",
  "The Beatles",
  "Queen",
];
var dayNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
var Fname = "Antonella";
var birthYr = 2010;
//changes first string in the array (Tyler the Creator)
siteTopics[0] = "Pink Floyd";
//adds string to the array
siteTopics.push("Red Hot Chili Peppers");
//shows array length

console.log("The length of the siteTopics array is " + siteTopics.length);

//pop removes first string from array
dayNames.pop();
//prints siteTopic variables in console
var i = 0;
while (i < siteTopics.length) {
  console.log(siteTopics[i]);
  i++;
}
//reverses items in dayNames array
dayNames.reverse();
for (var i = 0; i < dayNames.length; i++) {
  console.log(dayNames[i]);
}

//checks for error
try {
  if (dayNames[0] === "Sunday") {
    throw "Error: Sunday should be missing!";
  }
} catch (error) {
  console.log(error);
} finally {
  console.log(
    Fname +
      " was born in the year " +
      birthYr +
      "." +
      " I think the day was either a " +
      dayNames[1] +
      " or a " +
      dayNames[3] +
      "."
  );
}
