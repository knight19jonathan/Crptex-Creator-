// JONATHA KNIGHT CRPTEX CREATOR
// SELECT HTLML ELEMENT 
var generateBtn = document.querySelector("#generate");

//ON CLICK RUNS getPassword RETURNS OUT PUT AS ELEMENT INPUT INTO writePassword CALLS FUNCTION ONCE FOR EACH
generateBtn.addEventListener("click", function(){ writePassword(getPassword())}); 

// FUNCTION DEFINED 
function getPassword() {
    
    //ALL VARAIBLES LIVES INSIDE getPassword SO DO NOT NEED TO DECLARED GLOBALLY
    var realPassword = [];
    var password;
    var length;
    var passwordCharacters = "";
    var password_characters = "";
    var upper_case = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lower_case = 'abcdefghijklmnopqrstuvwxyz';
    var special_set = '~!@#$%^&*()_+<>?,./{}][|';
    var num_set = '124567890'
  
    //ESTABLISHES A VARIABLE TO CONTROL LENGTH OF PASSWORD AS AN ARRAY
    let parameters = {
        pwlength: Number(),
        
    }

    // CONCATS THE SELECTED CRYPTO KEYS TOGETHER INTO ONE STRING 
    var temporaryPassword = '';

    //PROMPTS THE USER TO INPUT A NUMBER BETWEEN 8 AND 128 RETURNING THEM TO PAGE IF INPUT ERRORS
    parameters.pwlength = +prompt("Pick a number of characters between 8 and 128 for your password.") // prompt to ask password length


    // IF THE INPUT IS THE ACCEPTED 8-128 NUMERICAL INPUT PASSES THE USER ON TO NEXT QUERRY OR INITIATES THEM TO START AGAIN
    if (parameters.pwlength<8 || 0) {
        location.reload();
        window.alert("Must be more than 8 characters.")
    } else if (parameters.pwlength>128) {
        location.reload(); 
        window.alert("Cannot exceed 128 characters.")
    } else (parameters.pwlenth>=8 && parameters.pwlength<=128);
    
    // const characterTypesInPassword = parameters.pwlength;

    // ASKS USER TO SELECT THE USER OF CAPITAL LETTERS IN THE PASSWORD 
    parameters.uPPErChars = confirm("Include CAPITAL letters in your password?");
    if (parameters.uPPErChars == true) {

        console.log(passwordCharacters = passwordCharacters += upper_case)
         
       // console.log(passwordCharacters = passwordCharacters += upper_case);

        temporaryPassword = temporaryPassword.concat(upper_case);
        //  
    } else {
        
        // window.alert("Password will not include CAPITAL letters.")
    }

    // confirm to ask for lower case letters
    parameters.lowerChars = confirm("Include lower case letters?") 

    if (parameters.lowerChars == true) {
        console.log(passwordCharacters = passwordCharacters.concat(lower_case))
       
        temporaryPassword = temporaryPassword.concat(lower_case);
        // window.alert("Included lower case letters.")
    } else {
        
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
    // var pullcharacters = "";
    
    // for (let i = 0; i < realPassword.length;i++) {
    //     console.log(pullcharacters);
    //     pullcharacters = pullcharacters + JSON.stringify(realPassword[i]);
    // }
    // JSON.stringify(realPassword);

    passwordText = document.querySelector("#password")
    passwordText.value = realPassword.join(''); //console.log(realPassword);
    //onsole.log(realPassword);
}; 



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
// // function to maker Lower Case Characters
// // radom letter generator working    
// const alpha = Array.from(Array(26)).map((e, i) => i + 65);
// const alphabet = alpha.map((x) => String.fromCharCode(x));
// // Random Letter Generator lines 76 & 77 from Handhika Yanuar Pratama from article https://javascript.plainenglish.io/create-an-array-of-alphabet-characters-in-javascript-with-this-simple-trick-930033079dd3  
// let uPPErChars = getUPPERcase(alphabet);
// let notyetlowerChars = getlowercase(alphabet);
// let lowerChars = notyetlowerChars.toLowerCase();
// console.log(uPPErChars)
// console.log(lowerChars)

// // generateBtn.addEventListener("click", function(){ writePassword()}); 






































// // GLOBAL VARIABLES 

// const realPassword = [ ];
// var password = 
// console.log(password);
// var length;
// var password_characters = "";
// var upper_case = `ABCDEFGHIJKLMNOPQRSTUYVWXYZ`    
// var lower_case = `abcdefghijklmnopqrstuvwxyz`
// var special_set = `~!@#$%^&*()_+<>?,./{}][|`
// var num_set = `11234567890`

// var generateBtn = document.querySelector("#generate");

// generateBtn.addEventListener("click", function(){writePassword()});

// function getPassword() {

//     let parameters = {
//         pwlength: Number(),
//     }

//     var temporaryPassword = ``;

//     parameters.pwlength = +prompt("Pick a number of characters between 8 and 128 for your password.") 

//     if (parameters.pwlength<8 || 0) {
//         window.alert("Must be more than 8 characters.")
//         return;
//     } else if (parameters.pwlength>128) {
//         window.alert("Cannot exceed 128 characters.")
//         return;
//     } else (parameters.pwlength>=8 && parameters.pwlength<=128)

//     const characterTypesInPassword = parameters.pwlength;
//     console.log(parameters.pwlength)

//     parameters.uPPErChars = confirm("Include CAPITAL letters in your password?");
//     if (parameters.uPPErChars == true) {

//         temporaryPassword = temporaryPassword.concat(upper_case);
//         console.log(temporaryPassword) 
//     } else {
//     }

//     parameters.lowerChars = confirm("Include lower case letters?") 
//     if (parameters.lowerChars == true) {

//         temporaryPassword = temporaryPassword.concat(lower_case);
//         console.log(temporaryPassword)
//     } else {
//     }

//     parameters.sPecChars = confirm("Include Special characters?")
//     if (parameters.sPecChars == true) {

//         temporaryPassword = temporaryPassword.concat(special_set);
//         console.log(temporaryPassword)
//     } else {   
//     } 

//     parameters.nUmChars = confirm("Include numbers?")
//     if (parameters.nUmChars == true) {

//         temporaryPassword = temporaryPassword.concat(num_set);
//         console.log(temporaryPassword)
//     } else {    
//     }
    
//     for (let i = 0; i < parameters.pwlength; i++) {
//         console.log(temporaryPassword)

//         lucky_num = Math.floor(Math.random() * ((temporaryPassword.length+1)));

//         realPassword[i]= temporaryPassword[lucky_num];
//         realPassword[i]=password;  
//         typeof(password)
//         console.log(password)

//         return password;
//     }
// };

// function writePassword() {
//     password = getPassword();
//     passwordText = document.querySelector("#password")
//     passwordText.value = password
//     console.log(password)
// }; 
