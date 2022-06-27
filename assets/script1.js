var password;
var length;
var password_characters = "";
var upper_case = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lower_case = 'abcdefghijklmnopqrstuvwxyz';
var special_set = '~!@#$%^&*()_+<>?,./{}][|';
var num_set = '124567890'



var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function(){ getPassword(writePassword)}); 


function getPassword(callback) {

    let parameters = {
        pwlength: Number(),
        uPPErCharsOutput: "",
        lowerCharsOutput: "",
        sPecCharsOutput: "",
        nUmCharsOutput: "", 
    }

    var temporaryPassword = '';

    parameters.pwlength = +prompt("Pick a number of characters between 8 and 128 for your password.") // prompt to ask password length

    if (parameters.pwlength<8 || 0) {
        window.alert("Must be more than 8 characters.")
        location.reload();
    } else if (parameters.pwlength>128) {
        window.alert("Cannot exceed 128 characters.")
        window.reload();
    } else (parameters.pwlength>=8 && parameters.pwlength<=128)
    // save varaiale of password length 
    const characterTypesInPassword = parameters.pwlength;

    // confirm to ask for Capital Letters
    parameters.uPPErChars = confirm("Include CAPITAL letters in your password?");
    if (parameters.uPPErChars == true) {
       // console.log(passwordCharacters = passwordCharacters += upper_case);
        temporaryPassword = temporaryPassword.concat(upper_case);
        // window.alert("Included CAPITAL letters.") 
    } else {
        // window.alert("Password will not include CAPITAL letters.")
    }

    // confirm to ask for lower case letters
    parameters.lowerChars = confirm("Include lower case letters?") 
    if (parameters.lowerChars == true) {
       // console.log(passwordCharacters = passwordCharacters += lowerChars);
        temporaryPassword = temporaryPassword.concat(lower_case);
        // window.alert("Included lower case letters.")
    } else {
        // window.alert("Password will not include lower case letters.")
    }

    // confirm to ask for Special characters
    parameters.sPecChars = confirm("Include Special characters?")
    if (parameters.sPecChars == true) {
       // console.log(passwordCharacters = passwordCharacters += sPecChars);
        temporaryPassword = temporaryPassword.concat(special_set);
        // window.alert("Included Special characters.")
    } else {
        // window.alert("Excluded Special characters.")
    } 

    // confirm to ask for Numbers
    parameters.nUmChars = confirm("Include numbers?")
    if (parameters.nUmChars == true) {
      //  console.log(passwordCharacters = passwordCharacters += nUmChars);
        temporaryPassword = temporaryPassword.concat(num_set);
        // window.alert("Included numbers.")
    } else {
        // window.alert("Excluded numbers.")
    }
    
    console.log(temporaryPassword);

   
   
    
    const realPassword = [];
    for (let i = 0; i < parameters.pwlength; i++) {
        lucky_num = Math.floor(Math.random() * ((temporaryPassword.length-1 - 0)+0));
        realPassword[i]= temporaryPassword[lucky_num];
        console.log(realPassword);
    }
    callback();
    
    
}


// generateBtn.addEventListener("click", function(){ writePassword()}); 

function writePassword() {
    var password = getPassword();
    var passwordText = document.querySelector("#password")
    passwordText.value = password;
}




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