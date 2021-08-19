
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//create an array for each value type
var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseLetters = ['A','B','C', 'D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numericCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '^'];
var characterSetType = '';
var characterSetIndex;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
var newChar ='';
var includeCharacterSet = false;
var includeLowerCase = false;
var includeUpperCase = false;
var includeNumeric = false;
var includeSpecialCharacters = false;

// debugger;
// Prompt for the length of the password and save length in a variable
var pwdLength = window.prompt('Please enter password length between 8 and 128 characters.');
var newPassword = '';

// Verify that length of at least 8 characters and no more than 128 characters.
// If not, then prompt user for password length again
  while (isNaN(pwdLength) ||pwdLength<8 || pwdLength>128 || pwdLength === "" || pwdLength === null){
    var pwdLength = window.prompt('Please enter password length between 8 and 128 characters.');  
  }

// Ask user whether or not to include lowercase, uppercase, numeric, and/or special characters
// Validate input to ensure that at least one character type was selected.
while (includeCharacterSet == false){
  includeLowerCase = window.confirm('Click OK to include lowercase.');
  includeUpperCase = window.confirm('Click OK to include uppercase.');
  includeNumeric = window.confirm('Click OK to include numeric.');
  includeSpecialCharacters = window.confirm('Click OK to include special characters.');
  
  if (includeLowerCase || includeUpperCase || includeNumeric || includeSpecialCharacters){
    includeCharacterSet = true;
  } else {
    window.alert('Please select at least one type of character.');
  }
}

// Generate a password that matches the selected criteria using variables storing responses.
// create for loop based on password length
while(newPassword.length < pwdLength ){

  //call characterSetPicker function to return a character set type (lower|upper|numeric|special)
  //use the type of character set returned to determine with type of character is added next
  switch(characterSetPicker(includeLowerCase, includeUpperCase, includeNumeric, includeSpecialCharacters)){
    case "lowercase":
      //add lowercase letter 
      newChar = lowerCaseLetters[Math.floor(Math.random()*(lowerCaseLetters.length))];
      newPassword += newChar;
      break;
    case "uppercase":
      //add an uppercase letter
      newChar =  upperCaseLetters[Math.floor(Math.random()*(upperCaseLetters.length))];
      newPassword += newChar;
      break;
    case "numeric":
      //add a numeric
      newChar = numericCharacters[Math.floor(Math.random()*(numericCharacters.length))];
      newPassword +=  newChar;
      break;
    case "special":
      //add a special character
      newChar = specialCharacters[Math.floor(Math.random()*(specialCharacters.length))];
      newPassword += newChar;
      break;
  }
  
} 

// return newly generated password
return newPassword;
}


function characterSetPicker (includeLowerCase, includeUpperCase, includeNumeric, includeSpecialCharacters) {
  //declare an array of all 4 types of character sets
  var characterSets = ["lowercase", "uppercase", "numeric", "special"];
  //randomly generate an index between 0-3
  var charSetsIndex = Math.floor(Math.random() * 4);
  
  if (charSetsIndex == 0 && includeLowerCase == true){
    return characterSets[0];
  } else if (charSetsIndex == 1 && includeUpperCase == true){
    return characterSets[1];
  } else if (charSetsIndex == 2 && includeNumeric == true){
    return characterSets[2];
  } else if (charSetsIndex == 3 && includeSpecialCharacters == true){
    return characterSets[3];
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
