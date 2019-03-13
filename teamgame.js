//Array of colors
var colors = ["green", "blue", "orange", "turqoise", "yellow"];

//random color
var randColor = colors[Math.floor(Math.random() * colors.length)];
console.log(randColor);
//user chooses color
var chooseColor = colors[randColor];

//wrong letter
var guesses_incorrect = [];

//user guess
var letters_used = [];

//how many guesses user gets;
var user_guesses_left = 10;

//underscores for letters
var blankSpaces = [];

//Functions
//================================================================

//computer generates a random color


//each color needs blankspaces
//user guesses letters replace blanks
