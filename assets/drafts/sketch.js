// GOOD CODE IT FUCKING WORKS 

var realPassword = [];
var password;
var length;
var passwordCharacters = "";
var password_characters = "";
var upper_case = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lower_case = 'abcdefghijklmnopqrstuvwxyz';
var special_set = '~!@#$%^&*()_+<>?,./{}][|';
var num_set = '124567890'

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function(){ writePassword(getPassword())}); 

function getPassword() {

    let parameters = {
        pwlength: Number(),
        
    }

    var temporaryPassword = '';

    parameters.pwlength = +prompt("Pick a number of characters between 8 and 128 for your password.") // prompt to ask password length

    if (parameters.pwlength<8 || 0) {
        window.alert("Must be more than 8 characters.")
    } else if (parameters.pwlength>128) {
        location.reload(); 
        window.alert("Cannot exceed 128 characters.")
    } else (parameters.pwlenth>=8 && parameters.pwlength<=128);

    const characterTypesInPassword = parameters.pwlength;

    // confirm to ask for Capital Letters
    parameters.uPPErChars = confirm("Include CAPITAL letters in your password?");
    if (parameters.uPPErChars == true) {

        console.log(passwordCharacters = passwordCharacters += upper_case)
         
       // console.log(passwordCharacters = passwordCharacters += upper_case);

        temporaryPassword = temporaryPassword.concat(upper_case);
        //  
    } else {
        window.alert("Password will not include CAPITAL letters.")
        return;
        // window.alert("Password will not include CAPITAL letters.")
    }

    // confirm to ask for lower case letters
    parameters.lowerChars = confirm("Include lower case letters?") 

    if (parameters.lowerChars == true) {
        console.log(passwordCharacters = passwordCharacters.concat(lower_case))
       
        temporaryPassword = temporaryPassword.concat(lower_case);
        // window.alert("Included lower case letters.")
    } else {
        return;
        // window.alert("Password will not include lower case letters.")
    }



    // confirm to ask for Special characters

    parameters.sPecChars = confirm("Include Special characters?")
    if (parameters.sPecChars == true) {
        console.log(passwordCharacters = passwordCharacters += special_set)
       
       // console.log(passwordCharacters = passwordCharacters += sPecChars);
        temporaryPassword = temporaryPassword.concat(special_set);
        // window.alert("Included Special characters.")
    } else {
        return;
        // window.alert("Excluded Special characters.")
    } 

    // confirm to ask for Numbers
    parameters.nUmChars = confirm("Include numbers?")
    if (parameters.nUmChars == true) {
        console.log(passwordCharacters = passwordCharacters += num_set)
        
      //  console.log(passwordCharacters = passwordCharacters += nUmChars);
        temporaryPassword = temporaryPassword.concat(num_set);
        
    } else {
    
    }
    // +++++++++++++++++++++++++above works++++++++++++++holyshit++++++++++
    console.log(parameters);

    console.log(temporaryPassword);

    // for (var i =0; i <= length.length; i++) {
    //     password = passwordCharacters[Math.floor(math.random() * passwordCharacters.length)]


    for (let i = 0; i < parameters.pwlength; i++) {
        lucky_num = Math.floor(Math.random() * ((temporaryPassword.length-1)));
        //console.log(lucky_num);
        //console.log("luckypull")
        //console.log(temporaryPassword[lucky_num]);
        realPassword.push(temporaryPassword[lucky_num]);
        //realPassword[i]= temporaryPassword[lucky_num];
        //realPassword[i] = password
        console.log(realPassword);
    }
    return realPassword;
};



function writePassword(realPassword) {
    // output of getPassword returned as input element for writePassword 
    passwordText = document.querySelector("#password")
    passwordText.value = realPassword; //console.log(realPassword);
    console.log(realPassword); //onsole.log(realPassword);
}; 






//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// GLOBAL VARIABLES 

const realPassword = [ ];
var password = 
console.log(password);
var length;
var password_characters = "";
var upper_case = `ABCDEFGHIJKLMNOPQRSTUYVWXYZ`    
var lower_case = `abcdefghijklmnopqrstuvwxyz`
var special_set = `~!@#$%^&*()_+<>?,./{}][|`
var num_set = `11234567890`

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function(){writePassword()});

function getPassword() {

    let parameters = {
        pwlength: Number(),
    }

    var temporaryPassword = ``;

    parameters.pwlength = +prompt("Pick a number of characters between 8 and 128 for your password.") 

    if (parameters.pwlength<8 || 0) {
        window.alert("Must be more than 8 characters.")
        return;
    } else if (parameters.pwlength>128) {
        window.alert("Cannot exceed 128 characters.")
        return;
    } else (parameters.pwlength>=8 && parameters.pwlength<=128)

    const characterTypesInPassword = parameters.pwlength;
    console.log(parameters.pwlength)

    parameters.uPPErChars = confirm("Include CAPITAL letters in your password?");
    if (parameters.uPPErChars == true) {

        temporaryPassword = temporaryPassword.concat(upper_case);
        console.log(temporaryPassword) 
    } else {
    }

    parameters.lowerChars = confirm("Include lower case letters?") 
    if (parameters.lowerChars == true) {

        temporaryPassword = temporaryPassword.concat(lower_case);
        console.log(temporaryPassword)
    } else {
    }

    parameters.sPecChars = confirm("Include Special characters?")
    if (parameters.sPecChars == true) {

        temporaryPassword = temporaryPassword.concat(special_set);
        console.log(temporaryPassword)
    } else {   
    } 

    parameters.nUmChars = confirm("Include numbers?")
    if (parameters.nUmChars == true) {

        temporaryPassword = temporaryPassword.concat(num_set);
        console.log(temporaryPassword)
    } else {    
    }
    
    for (let i = 0; i < parameters.pwlength; i++) {
        console.log(temporaryPassword)

        lucky_num = Math.floor(Math.random() * ((temporaryPassword.length+1)));

        realPassword[i]= temporaryPassword[lucky_num];
        realPassword[i]=password;  
        typeof(password)
        console.log(password)

        return password;
    }
};

function writePassword() {
    password = getPassword();
    passwordText = document.querySelector("#password")
    passwordText.value = password
    console.log(password)
}; 


const realPassword = [];
var password;
var length;
var passwordCharacters = "";
var password_characters = "";
var upper_case = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lower_case = 'abcdefghijklmnopqrstuvwxyz';
var special_set = '~!@#$%^&*()_+<>?,./{}][|';
var num_set = '124567890'



var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function(){ getPassword()}); 

// generateBtn.addEventListener("click", function(){ getPassword(writePassword)}); 


function getPassword() {


    let parameters = {
        pwlength: Number(),
        
    }
    var temporaryPassword = '';

   
    parameters.pwlength = +prompt("Pick a number of characters between 8 and 128 for your password.") // prompt to ask password length

    if (parameters.pwlength<8 || 0) {
        window.alert("Must be more than 8 characters.")
    } else if (parameters.pwlength>128) {
        location.reload(); 
        window.alert("Cannot exceed 128 characters.")
    } else (parameters.pwlenth>=8 && parameters.pwlength<=128);

    const characterTypesInPassword = parameters.pwlength;


    // confirm to ask for Capital Letters
    parameters.uPPErChars = confirm("Include CAPITAL letters in your password?");
    if (parameters.uPPErChars == true) {

        console.log(passwordCharacters = passwordCharacters += upper_case)
         
       // console.log(passwordCharacters = passwordCharacters += upper_case);

        temporaryPassword = temporaryPassword.concat(upper_case);
        //  
    } else {
        window.alert("Password will not include CAPITAL letters.")
        return;
        // window.alert("Password will not include CAPITAL letters.")
    }

    // confirm to ask for lower case letters
    parameters.lowerChars = confirm("Include lower case letters?") 

    if (parameters.lowerChars == true) {
        console.log(passwordCharacters = passwordCharacters.concat(lower_case))
       
        temporaryPassword = temporaryPassword.concat(lower_case);
        // window.alert("Included lower case letters.")
    } else {
        return;
        // window.alert("Password will not include lower case letters.")
    }



    // confirm to ask for Special characters

    parameters.sPecChars = confirm("Include Special characters?")
    if (parameters.sPecChars == true) {
        console.log(passwordCharacters = passwordCharacters += special_set)
       
       // console.log(passwordCharacters = passwordCharacters += sPecChars);
        temporaryPassword = temporaryPassword.concat(special_set);
        // window.alert("Included Special characters.")
    } else {
        return;
        // window.alert("Excluded Special characters.")
    } 

    // confirm to ask for Numbers
    parameters.nUmChars = confirm("Include numbers?")
    if (parameters.nUmChars == true) {
        console.log(passwordCharacters = passwordCharacters += num_set)
        
      //  console.log(passwordCharacters = passwordCharacters += nUmChars);
        temporaryPassword = temporaryPassword.concat(num_set);
        
    } else {
    
    }
    // +++++++++++++++++++++++++above works++++++++++++++holyshit++++++++++
    console.log(parameters);

    console.log(temporaryPassword);

    // for (var i =0; i <= length.length; i++) {
    //     password = passwordCharacters[Math.floor(math.random() * passwordCharacters.length)]


    for (let i = 0; i < parameters.pwlength; i++) {
        lucky_num = Math.floor(Math.random() * ((temporaryPassword.length-1)));
        console.log(lucky_num);
        
        //realPassword[i]= temporaryPassword[lucky_num];
        //realPassword[i] = password
        console.log(realPassword);
    }
    return realPassword;
};

function writePassword() {
    realPassword = getPassword();
    passwordText = document.querySelector("#password")
    passwordText.value = realPassword
    console.log(realPassword)
}; 


















































































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

//'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// 'abcdefghijklmnopqrstuvwxyz';



// function writePassword() {
//     var password = getPassword();
//     var passwordText = document.querySelector("#password")
//     passwordText.value = password;
// }













// generateBtn.addEventListener("click", function(){ writePassword()}); 



//======================================DRAFTING===================================
// function getPassword() {
//     var password = ""

// getParameters();

// for (i=0;i<length;i++){

// }

// return password

// }

// const alpha = Array.from(Array(26)).map((e, i) => i + 65);
// const alphabet = alpha.map((x) => String.fromCharCode(x));
// console.log(alphabet);
// console.log()

// function getUPPERcase(alphabet) {
//     const randomLetter = Math.floor(Math.random() * alphabet.length);
//     const luckyLetter = alphabet[randomLetter];
//     return luckyLetter
// }

// //function to make Upper Case Characters
// function getlowercase(alphabet) {
//     const randomlowerLetter = Math.floor(Math.random() * alphabet.length);
//     const luckylowerLetter = alphabet[randomlowerLetter];
//     return luckylowerLetter
// }

// let specialCharacterarray = "~!@#$%^&*()_+<>?,./{}][|";
// // 24 special characters
// function getSPECIALchar(specialCharacterarray) {
//     const randomSpecialcharater = Math.floor(Math.random() * specialCharacterarray.length);
//     const luckySpecialChar = specialCharacterarray[randomSpecialcharater];
//     return luckySpecialChar
// }
// // array that randomly generates a special character
// console.log(specialCharacterarray[0]);

// let sPecChars = getSPECIALchar(specialCharacterarray);
// console.log(sPecChars);

// let nUmCharsarray = "1234567890"
// // number array
// function getNUMbers(nUmCharsarray) {
//     const randomNumber = Math.floor(Math.random() * nUmCharsarray.length);
//     const luckyNumber = nUmCharsarray[randomNumber];
//     return luckyNumber
// }

// console.log(nUmCharsarray[2]);
// let nUmChars = getNUMbers(nUmCharsarray);
// console.log(nUmChars);

// 24 special characters
// ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '.', ',', '?']; 
// 18 special characters

    //     const characterTypesInPassword =
    //         parameters[Math.floor(Math.random()*parameters.length)];
        


    
    // +++++++++++++++++++++++++above works++++++++++++++holyshit++++++++++
    //console.log(parameters);
    // let passwordtypes = placeholder
    // if (uPPErChars == true) passwordtypes = passwordtypes.concat(uPPErChars);
    // if (lowerChars == true) passwordtypes = passwordtypes.concat(lowerChars);
    // if (sPecChars == true) passwordtypes = passwordtypes.concat(sPecChars);
    // if (nUmChars == true) passwordtypes = passwordtypes.concat(nUmChars);


    // for (let index = 0; index < parameters.pwlength; index++) {
    //     const element = array[index];
    //     element[index] = 1;
    // }

    // const alpha = Array.from(Array(26)).map((e, i) => i + 65);
// const alphabet = alpha.map((x) => String.fromCharCode(x));
// console.log(alphabet);
// // Random Letter Generator lines 76 & 77 from Handhika Yanuar Pratama from article https://javascript.plainenglish.io/create-an-array-of-alphabet-characters-in-javascript-with-this-simple-trick-930033079dd3  

// let uPPErChars = getUPPERcase(alphabet);
// let notyetlowerChars = getlowercase(alphabet);
// let lowerChars = notyetlowerChars.toLowerCase();
// console.log(uPPErChars)
// console.log(lowerChars)
// `abcdefghijklmnopqrstuvwxyz`
// `ABCDEFGHIJKLMNOPQRSTUYVWXYZ`
//// let specialCharacterarray = "~!@#$%^&*()_+<>?,./{}][|";
// num '1234567890'
// ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] 
// ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] 
// ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '.', ',', '?'];
// ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
//