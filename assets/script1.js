var password;
var length;
var passwordCharacters = "";
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function(){ getPassword()}); 

function getPassword() {

    let parameters = {
        length: [],
        uPPErChars:"",
        lowerChars:"",
        sPecChars:"",
        nUmChars:"", 
    }

    parameters.length = prompt("Pick a number of characters between 8 and 128 for your password.")

    if (parameters.length<8) {
        window.alert("Must be more than 8 characters.")
    } else if (parameters.length>128) {
        window.alert("Cannot exceed 128 characters.")
    } else (parameters.lenth>=8 && parameters.length<=128);
    parameters.uPPErChars = confirm("Include CAPITAL letters in your password?")
    if (parameters.uPPErChars == true) {
        var uPPErChars = {
            
        }
        console.log(passwordCharacters = passwordCharacters += uPPErChars)
        window.alert("Included CAPITAL letters.")
    } else {
        window.alert("Password will not include CAPITAL letters.")
    }
    parameters.lowerChars = confirm("Include lower case letters?") 
    if (parameters.lowerChars == true) {
        console.log(passwordCharacters = passwordCharacters += lowerChars)
        window.alert("Included lower case letters.")
    } else {
        window.alert("Password will not include lower case letters.")
    }
    parameters.sPecChars = confirm("Include Special characters?")
    if (parameters.sPecChars == true) {
        console.log(passwordCharacters = passwordCharacters += sPecChars)
        window.alert("Included Special characters.")
    } else {
        window.alert("Excluded Special characters.")
    } 
    parameters.nUmChars = confirm("Include numbers?")
    if (parameters.nUmChars == true) {
        console.log(passwordCharacters = passwordCharacters += nUmChars)
        window.alert("Included numbers.")
    } else {
        window.alert("Excluded numbers.")
    }
    // +++++++++++++++++++++++++above works++++++++++++++holyshit++++++++++
    console.log(parameters);


    for (var i =0; i <= length.length; i++) {
        password = passwordCharacters[Math.floor(math.random() * passwordCharacters.length)]
    }
    console.log(password)
    return password;

    
}

function writePassword() {
    var password = getPassword();
    var passwordText = document.querySelector("#password")
    passwordText.value = password;
}

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