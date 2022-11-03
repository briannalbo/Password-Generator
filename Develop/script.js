// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordLength;
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!@#\$%^&*()-_=+[]{};:'<>,./?`~|";
var includeUppercase;
var includeLowercase;
var includeNumbers;
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

function determineLowercase(){
  includeLowercase = prompt("Do you want to include lowercase letters in your password? \n(Yes or No)");
  includeLowercase = includeLowercase.toLowerCase();

  if (includeLowercase === "yes" || includeLowercase === "y"){
    includeLowercase = true;
    return includeLowercase;
  }
  else if (includeLowercase === "no" || includeLowercase === "n"){
    includeLowercase = false;
    return includeLowercase;
}
  else if (includeLowercase === null || includeLowercase === ""){
    alert("This field is required.");
    determineLowercase();
  }
  else {
    alert("This field is required.");
    determineLowercase();
  }
}

function determineUppercase(){
  includeUppercase = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
  includeUppercase = includeUppercase.toLowerCase();

  if (includeUppercase === null || includeUppercase === ""){
    alert("Please answer Yes or No");
    determineUppercase();

  }else if (includeUppercase === "yes" || includeUppercase ==="y"){
    includeUppercase = true;
    return includeUppercase;

  }else if (includeUppercase === "no" || includeUppercase ==="n"){
    includeUppercase = false;
    return includeUppercase;
  
  }else {
    alert("Please answer Yes or No");
    determineUppercase();
  }
  return includeUppercase;
}

//Function used to determine whether the user wants to include numbers in the password
function determineNumbers(){
  includeNumbers = prompt("Do you want to include numbers in your password? \n(Yes or No)");
    includeNumbers = includeNumbers.toLowerCase();

    if (includeNumbers === null || includeNumbers === ""){
      alert("This field is required.");
      determineNumbers();

    }else if (includeNumbers === "yes" || includeNumbers ==="y"){
      includeNumbers = true;
      return includeNumbers;

    }else if (includeNumbers === "no" || includeNumbers ==="n"){
      includeNumbers = false;
      return includeNumbers;
    
    }else {
      alert("This field is required.");
      determineNumbers();
    }
    return includeNumbers;
}

function generatePassword(){
  determineLength();
  determineUppercase();
  determineNumbers();

  characters = lowercase
  var password = "";
  if (includeLowercase && includeUppercase && includeNumbers){
    lowercase + uppercase + numbers;
  }
  if (includeUppercase){
    includeUppercase;
  }

  else{
    characters === lowercase;
  }

  for(var i = 0; i < passwordLength; i++){
    password += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
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
