// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordLength;
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var characters = "!@#\$%^&*()-_=+[]{};:'<>,./?`~|";
var uppercaseNumber;
var lowercaseNumber;
var numberNumber;
var charactersNumber;

function determineLength(){
  passwordLength = prompt("How many characters would you like your password to have? (must be between 8-128 characters):");

  if (passwordLength<8){
    alert("Password must be 8-128 characters.");
    determineLength();
  }
  else if (passwordLength>128){
    alert("Password must be 8-128 characters.");
    determineLength();
  }
  else if (isNaN(passwordLength)){
    alert("Password must be 8-128 characters.");
    determineLength();
  }
  else{
    alert("Answer prompts to determine which characters will be included in your password.");
  }
  return passwordLength;
}

function generatePassword(){
  determineLength();


  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
