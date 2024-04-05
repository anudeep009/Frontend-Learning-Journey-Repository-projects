//instalization of dom elements

const password = document.getElementById("box");
const btn = document.getElementById("btn");

//functions
const generateNumbers = () => {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let sum = "";
  for (let i = 0; i < 2; i++) {
    const randomForNumbers = Math.floor(Math.random() * 9);
    sum += numbers[randomForNumbers];
  }
  return sum;
};

const generateSpecialCharacters = () => {
  const specialCharacters = [
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "\\",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
  ];
  let sum = "";
  for (let i = 0; i < 2; i++) {
    const randomForSpecialCharacters = Math.floor(Math.random() * 31);
    sum += specialCharacters[randomForSpecialCharacters];
  }
  return sum;
};

const generateSmallAlphabets = () => {
  const smallAlphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let sum = "";
  for (let i = 0; i < 3; i++) {
    const randomForSmallLettes = Math.floor(Math.random() * 26);
    sum += smallAlphabets[randomForSmallLettes];
  }
  return sum;
};

const generateCapitalAlphabets = () => {
  const capitalAlphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let sum = "";
  for (let i = 0; i < 3; i++) {
    const randomForCapitalLetters = Math.floor(Math.random() * 26);
    sum += capitalAlphabets[randomForCapitalLetters];
  }
  return sum;
};

//concatenation of string

btn.addEventListener("click", () => {
  const finalPassword =
    generateSmallAlphabets() +
    generateSpecialCharacters() +
    generateCapitalAlphabets() +
    generateNumbers();
  password.innerText = finalPassword;
});
