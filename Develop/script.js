// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordLength;
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var characters = "!@#\$%^&*()-_=+[]{};:'<>,./?`~|";
var includeUppercase;
var lowercaseNumber;
var numberNumber;
var charactersNumber;

//this function determines the length of the password. uses if statement to ensure user enters a number and that number is between 8-128.
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

function determineUppercase(){
  includeUppercase = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
  includeUppercase = includeUppercase.toLowerCase();

  if (includeUppercase === "yes" || includeUppercase === "y"){
    includeUppercase = true;
    return includeUppercase;
  }
  else if (includeUppercase === "no" || includeUppercase === "n"){
    includeUppercase = false;
    return includeUppercase;
}
  else if (includeUppercase === null || includeUppercase === ""){
    alert("This field is required.");
    determineUppercase();
  }
  else {
    alert("This field is required.");
    determineUppercase();
  }
}

function generatePassword(){
  determineLength();
  determineUppercase();

  var characters = lowercase;
  var password = "";

  if (includeUppercase){
    characters += uppercase;
  }

  else{
    characters === lowercase;
  }

  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.random() * characters.length);
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
