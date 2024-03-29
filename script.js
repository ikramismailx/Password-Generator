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

// Function to prompt user for password options
var passwordOptions = [];

function getLength() {
    var length = prompt('How many characters would you like your password to have?');
    console.log(length);
    if (length < 8 || length > 123) {
        alert("Error! Password MUST be between 8 and 128 characerters. Please input a different number!");
        return getLength()
    }

    return length;

}


// Function to generate password with user input
function generatePassword() {
    var length = getLength();

    // upper-case characters choice
    var upperCasedCharactersChoice = confirm("Do you want to include upper-case characters in your password?");
    console.log(upperCasedCharactersChoice);
    if (upperCasedCharactersChoice === true) {
        passwordOptions = passwordOptions.concat(upperCasedCharacters);
        console.log(passwordOptions);
    }
    // lower-case characters choice
    var lowerCasedCharactersChoice = confirm("Do you want to include lower-case characters in your password?");
    console.log(lowerCasedCharactersChoice);
    if (lowerCasedCharactersChoice === true) {
        passwordOptions = passwordOptions.concat(lowerCasedCharacters);
        console.log(passwordOptions);
    }
    // numeric characters choice
    var numericCharactersChoice = confirm("Do you want to include numeric characters in your password?");
    console.log(numericCharactersChoice);
    if (numericCharactersChoice === true) {
        passwordOptions = passwordOptions.concat(numericCharacters);
        console.log(passwordOptions);
    }
    // special characters choice
    var specialCharactersChoice = confirm("Do you want to include special characters in your password?");
    console.log(specialCharactersChoice);
    if (specialCharactersChoice === true) {
        passwordOptions = passwordOptions.concat(specialCharacters);
        console.log(passwordOptions);
    }
    
    console.log(passwordOptions);
    var length = parseInt(length);
    var password = '';

    // randomising 

    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * passwordOptions.length)
        var randomCharacter = passwordOptions[randomIndex];
        console.log(randomCharacter);
        var password = password + randomCharacter;

    }

    return password;

}

// generating password ()

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {


    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);