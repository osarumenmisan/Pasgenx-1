// Assignment Code
var numberArray = [1,2,3,4,5,6,7,8,9,0] 
var specialcharacterArray = [ '!','@','#','$','%','^','&','*','(',')','-','+','=','~','/','?','>','<',':',';','`','']
var uppercaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]
var lowercaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', ]
var characterlengthArray = 8
var characterchoiceArray = []

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //make conditions if prompts are entered correctly/incorrectly.
  // variable to define a correctly enteered prompt would be aPrompts

  var aPrompts =prompts();
  var passwordText = document.querySelector("#password");

  if(aPrompts) {
   var password = generatePassword();

  passwordText.value = password;
  }
  else{
    passwordText.value =" try again";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
// The password would be generated following series of prompts to allow it met the criteria
var password ="";
for(i = 0; i < characterlength; i++ ) {
  var randomIndex =Math.floor(Math.random()* characterchoiceArray);
  password =password + characterchoiceArray[randomIndex];
}
return password;


}
function prompts() {
  characterchoiceArray =[];
  
  characterlength = parseInt(prompt("how long to you want your password character to be? (8-128)characters"));
  
  if(isNaN(characterlength) || characterlength < 8 || characterlength > 128 ); {
    alert("characterlength has to be a number, 8 - 128 .Please try again.");
    return false;
  }

  

    // confirm the types of characters the user would want generated.

    
    if(confirm("do you want lowercase letter generated in your password?")) {
      characterchoiceArray=characterchoiceArray.concat(lowercaseArray);
    }

    if(confirm("do you want Uppercase letter generated in your password?")) {
      characterchoiceArray=characterchoiceArray.concat(uppercaseArray);
    }


    if(confirm("do you want Special characters generated in your password?")) {
      characterchoiceArray=characterchoiceArray.concat(specialcharacterArray);
    }

    if(confirm("do you want numbers generated in your password?")) {
      characterchoiceArray=characterchoiceArray.concat(numberArray);
    }
    return true;
}