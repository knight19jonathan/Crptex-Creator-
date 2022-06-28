// JONATHA KNIGHT CRPTEX CREATOR
// SELECT HTLML ELEMENT 
var generateBtn = document.querySelector("#generate");

//ON CLICK RUNS getPassword RETURNS OUT PUT AS ELEMENT INPUT INTO writePassword CALLS FUNCTION ONCE FOR EACH
generateBtn.addEventListener("click", function(){ writePassword(getPassword())}); 

// FUNCTION DEFINED 
function getPassword() {
    
    //ALL VARAIBLES LIVES INSIDE getPassword SO DO NOT NEED TO DECLARED GLOBALLY
    var realPassword = [];
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
    

    // ASKS USER TO SELECT THE USER OF CAPITAL LETTERS IN THE PASSWORD 
    parameters.uPPErChars = confirm("Include CAPITAL letters in your password?");
    if (parameters.uPPErChars == true) {
        temporaryPassword = temporaryPassword.concat(upper_case);
    } else {
    }

    // ASKS USER TO SELECT USE OF LOWER CASE LETTERS 
    parameters.lowerChars = confirm("Include lower case letters?") 

    if (parameters.lowerChars == true) {
        temporaryPassword = temporaryPassword.concat(lower_case);
    } else {
    }

    // ASKES USERS TO SELECT FOR SPECIAL CHARACTERS 
    parameters.sPecChars = confirm("Include Special characters?")
    if (parameters.sPecChars == true) {
        temporaryPassword = temporaryPassword.concat(special_set);
    } else {
    } 

    // ASKS USERS TO SELECT FOR NUMBER TYPE CHARACTERS 
    parameters.nUmChars = confirm("Include numbers?")
    if (parameters.nUmChars == true) {
        temporaryPassword = temporaryPassword.concat(num_set);
    } else {
    }
    console.log(parameters);
    console.log(temporaryPassword);

    // FOR LOOP: TEMPORY PASSWORD RANGE OF TOTAL OPTED IN CHARACTERS CONCATTING INTO AN ARRAY RANDOMIZED WITH mATH.fLOOR AND mATH.rANDOM INTO lucky_num WAS GETTING RESULT UNDEFINED UNTIL USED PUSH TO APPEND RANDOMIZED VALUES INTO realPassword FROM temporaryPassword OUT realPassword.
    for (let i = 0; i < parameters.pwlength; i++) {
        lucky_num = Math.floor(Math.random() * ((temporaryPassword.length-1)));
        realPassword.push(temporaryPassword[lucky_num]);
        console.log(realPassword);
    }
    return realPassword;
};


// CALLS realPassword RETURN AS INPUT ELEMENT THEN IS PROCESSED WITH JOIN() TO REMOVE COMMAS FROM TEXT; THE COMMAS ARE UGLY THEN SEND TO HTML #PASSWORD BOX.
function writePassword(realPassword) {
    passwordText = document.querySelector("#password")
    passwordText.value = realPassword.join(''); //console.log(realPassword);
    //onsole.log(realPassword); CONSOLE LOGS FOR DEBUGGING, LOTS OF DEBUGGING
}; 

//it works thats amazing 