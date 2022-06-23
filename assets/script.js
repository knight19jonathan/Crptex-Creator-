var length;
var availableCharactersl = "";

function generatePassword() {
  var password = ""


//1. prompt user for parameters
// length, special chars, numbers, uppercase, lowercase
getParameters();

//2. create random from poasswird from available characters
//for lioop run the numbers of times that user sets the length to 
// add rnadom chracter to password string
// Write password to the #password input
for (i=0;i<length;i++){
  // add 1 random character to password 
}

return password
}
// shorter functions 



// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

 
function getParameters() {
  // set langth via prompt

  var parameters = {
    length: 0,
    availableChars:""
  }
  parameters.length = prompt()
  if (length<8) {


  }
  // length = prompts
  // if length < 8 then alert user and rerun generate password function 
  //add chracter to availbleChracters via user input
  return parameters  
}
