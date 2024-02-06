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

function getLength () {
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
    var passwordLength = parseInt(prompt("Please enter the length of the password you like"))
    if (passwordLength < 8 || passwordLength > 128) {
        return "Please enter a valid length between 8-128"
    }
    var validUpperCase = confirm("Do you like uppercase letters in the password?")
    var validLowerCase = confirm("Do you like lowercase letters in the password?")
    var validSpecialCharacters = confirm("Do you like special characters in the password?")
    var validNumbers = confirm("Do you like numeric characters in the password?")
    var allCharacters = []
    if (validUpperCase) {
        allCharacters = allCharacters.concat(upperCasedCharacters)
    }
    if (validLowerCase) {
        allCharacters = allCharacters.concat(lowerCasedCharacters)
    }
    if (validSpecialCharacters) {
        allCharacters = allCharacters.concat(specialCharacters)
    }
    if (validNumbers) {
        allCharacters = allCharacters.concat(numericCharacters)
    }
    console.log(allCharacters)
    if(allCharacters.length === 0){
        return "Please choose at least one option"
    }
    var password = ""


    for(let i =0;i<passwordLength   ;i++){
        var index = Math.floor (Math.random() * allCharacters.length)   
        password += allCharacters[index] // password = password + allcharacters[index]
    }
    return password
    

    
}

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