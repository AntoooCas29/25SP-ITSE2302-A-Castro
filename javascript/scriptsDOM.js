//query selectoer for quote
document.querySelector(".intro").textContent = "Youth is something I never wanna take for granted. I just want to smile and live life. -Tyler The Creator";

//variables for changing images using arrays 
let changeImages = ["./images/theMarias4.jpg", "./images/piano1.jpg", "./images/music3.jpg" ];
let changeHeaders = [
    "The Marias: Maria Zardoya, Josh Conway, Edward James, and Jesse Perlman", 
    "A Picture Showing a Piano", 
    "A Picture Showing Music "
];

//variables for changing paragraphs also using arrays and get element by id 
let changeParagraphs = [
    "The Marias is an Indie band known for their dreamy, jazzy, bilingual influences they bring to life. The main vocalist, Maria Zardoya is from Puerto Rico. The band got formed in Los Angeles in 2016 after Maria met Josh Conway and their romantic partnership blossomed into a band.", 
    "Piano is a very beautiful instrument because it can express nearly every emotion from soft and gentle to joyous and melancholy. The piano also has a huge range of notes with the depth of a bass to a high soprano. It is accessible to beginners and you can learn simple songs quickly. The piano sound inspires limitless creativity for everyone of any expertise.", 
    "There is a very wide range of music ranging from heavy metal to soft jazz. Music uses pitch, rhythm, and silence to create patterns. Music is like an emotion you can hear. If you listen to music while getting ready in the morning it can affect how you feel the whole day. Music exists in every culture it tells a story through its melody, and provides comfort to those who hold meaning to it. Although it doesn't seem like it, music involves math and science. For example, math is used during timing and division because a song without math would just sound like a mess. Science is used when you study how those sound waves behave, and how it would sound to the average person."
];

let searchImg = document.querySelectorAll("img");
let searchHdr = document.querySelectorAll(".content-title"); 
let searchP = [document.getElementById("firstText"), document.getElementById("secondText"), document.getElementById("thirdText")];

//fro loop to using variables to change paragraph
for (let i = 0; i < changeImages.length; i++) {
    searchImg[i].src = changeImages[i];
    searchHdr[i].textContent = changeHeaders[i];
    searchP[i].textContent = changeParagraphs[i];
}

//buttons and event listener to check if button was clicked to change color background.
let buttons = [document.getElementById("ColorChanging"), document.getElementById("ColorChanged"), document.getElementById("ColorChange")];
let header = document.querySelector(".headings");

//function fro when button is clicked.
function button (backgroundColor, textColor) {
    header.style.backgroundColor = backgroundColor;
    header.style.color = textColor;
}

buttons[0].addEventListener("click", function () {
    button("Orange", "Green");
});

buttons[1].addEventListener("click", function () {
    button("yellow", "Purple");
});

buttons[2].addEventListener("click", function () {
    button("#F74357", "#43F783");
});