var availbleChracters 
// UPPERCASE
var availbleChracters1
// lower case
var availbleChracters2
// !@#*()&)! special characters
var availbleChracters3 
// 12378243 numbers 
var length1
// length of password 1-253
var password

var generateBtn = document.querySelector("#generate");
// function to get parameters

generateBtn.addEventListener("click", getParameters,);
getParameters.addEventListener(getParameters1);
function getParameters() {
    let availbleChracters = confirm("There are 4 categories of characters you can use for your password you must pick at least one category to make a password choose from UPPERCASE, lower case, numbers, or special characters. Would you like to use UPPERCASE characters in your password?");
    if (availbleChracters == false) {
        window.alert("Okay no UPPERCASE characters.");
        return availbleChracters = false;
    } else {
        window.alert("Added UPPERCASE characters to your password!");
        return availbleChracters = true;
    } 
    // availbleChracters();
    }
    function getParameters1() {
        let availbleChracters1 = confirm("Would you like to include lower_case characters in your password?");
        if (availbleChracters1 == false) {
            window.alert("Okay we won't use lower_case characters.");
            return availbleChracters1 = false;
        } else {
            window.alert("Added lower_case characaters!");
            return availbleChracters1 = true;}
        }    






// getParameters();

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));
console.log(alphabet);