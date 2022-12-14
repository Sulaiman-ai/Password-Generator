// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Object storing menu options
var menu_choices = {
  length: 10,
  lowercase: true,
  uppercase: true,
  numeric: true,
  special: true,
}

// Function to prompt user for password options
// length prompts keeps prompting user until they enter a valid value
function getPasswordOptions() {
  valid = false
  while(!valid){
    let length = prompt("Please enter a password length between 10 and 64", "10");
    if(length>=10 && length <= 64){
      valid = true;
      menu_choices.length = length;
    };
  }
  
  menu_choices.lowercase = confirm("Use lowercase letters?");
  menu_choices.uppercase = confirm("Use uppercase letters?");
  menu_choices.numeric = confirm("Use numbers?");
  menu_choices.special = confirm("Use special characters?");
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

// Function to generate password with user input
// Stores selected choices in an array to choose characters from randomly
function generatePassword() {
  selectedOptions = []
  password = '';

  if(menu_choices.lowercase){selectedOptions.push(lowerCasedCharacters)}
  if(menu_choices.uppercase){selectedOptions.push(upperCasedCharacters)}
  if(menu_choices.numeric){selectedOptions.push(numericCharacters)}
  if(menu_choices.special){selectedOptions.push(specialCharacters)}

  if(selectedOptions.length==0){
    valid = confirm("Please selected at least one character type");
    return ''
  }

  for(i=0; i<menu_choices.length; i++){
    character = getRandom(getRandom(selectedOptions))
    password += character;
  }
  return password
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
// Calls function to prompt user before generating the password
function writePassword() {
  getPasswordOptions();
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
