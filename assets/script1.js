const realPassword = [];
var password;
var length;
var password_characters = "";
var upper_case = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lower_case = 'abcdefghijklmnopqrstuvwxyz';
var special_set = '~!@#$%^&*()_+<>?,./{}][|';
var num_set = '124567890'
var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener("click", function(){writePassword()});

function getPassword() {

    let parameters = {
        pwlength: Number(),
        uPPErCharsOutput: "",
        lowerCharsOutput: "",
        sPecCharsOutput: "",
        nUmCharsOutput: "", 
    }

    var temporaryPassword = '';

    parameters.pwlength = +prompt("Pick a number of characters between 8 and 128 for your password.") 

    if (parameters.pwlength<8 || 0) {
        window.alert("Must be more than 8 characters.")
        return;
    } else if (parameters.pwlength>128) {
        window.alert("Cannot exceed 128 characters.")
        return;
    } else (parameters.pwlength>=8 && parameters.pwlength<=128)

    const characterTypesInPassword = parameters.pwlength;


    parameters.uPPErChars = confirm("Include CAPITAL letters in your password?");
    if (parameters.uPPErChars == true) {

        temporaryPassword = temporaryPassword.concat(upper_case);

    } else {
        
    }


    parameters.lowerChars = confirm("Include lower case letters?") 
    if (parameters.lowerChars == true) {
 
        temporaryPassword = temporaryPassword.concat(lower_case);
       
    } else {
        
    }

    parameters.sPecChars = confirm("Include Special characters?")
    if (parameters.sPecChars == true) {

        temporaryPassword = temporaryPassword.concat(special_set);

    } else {
        
    } 

    parameters.nUmChars = confirm("Include numbers?")
    if (parameters.nUmChars == true) {

        temporaryPassword = temporaryPassword.concat(num_set);
    
    } else {
         
    }
    
    


    for (let i = 0; i < parameters.pwlength; i++) {
        lucky_num = Math.floor(Math.random() * ((temporaryPassword.length-1 - 0)+0));
        realPassword[i]= temporaryPassword[lucky_num];
        realPassword[i]=password;  
        console.log(password)

        // return password;


        
    }
    

}

function writePassword() {
    password = getPassword();
    passwordText = document.querySelector("#password")
    passwordText.value = password
} 
console.log.typeof(password)




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