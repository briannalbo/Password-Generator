// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordLength;
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!@#\$%^&*()-_=+[]{};:'<>,./?`~|";
var haveLowercase;
var includeUppercase;
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
  return passwordLength;
  }
  return passwordLength
}

function determineLowercase(){
  haveLowercase = prompt("Do you want to include lowercase letters in your password? \n(Yes or No)");
  haveLowercase = haveLowercase.toLowerCase();

  if (haveLowercase === null || haveLowercase === ""){
    alert("this required.");
    determineLowercase();
  }
  else if (haveLowercase === "yes" || haveLowercase === "y"){
    haveLowercase = true;
    return haveLowercase;
  }
  else if (haveLowercase === "no" || haveLowercase === "n"){
    haveLowercase = false;
    return haveLowercase;
  }
  else {
    alert("This field is required.");
    return haveLowercase;
  }
  return haveLowercase;
}

function determineUppercase(){
  includeUppercase = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
  includeUppercase = lowercase.toUpperCase();

  if (includeUppercase === null || includeUppercase === ""){
    alert("This field is required.");
    determineUppercase();
  }
  else if (includeUppercase === "yes" || includeUppercase === "y"){
    includeUppercase = true;
    return includeUppercase;
  }
  else if (includeUppercase === "no" || includeUppercase ==="n"){
    includeUppercase = false;
    return includeUppercase;
  }
  else {
    return includeUppercase;
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
    }
    else if (includeNumbers === "yes" || includeNumbers ==="y"){
      includeNumbers = true;
      return includeNumbers;
    }
    else if (includeNumbers === "no" || includeNumbers ==="n"){
      includeNumbers = false;
      return includeNumbers;
    }
    else {
      alert("This field is required.");
      determineNumbers();
    }
    return includeNumbers;
}

function generatePassword(){
  determineLength();
  console.log(passwordLength);
  determineUppercase();
  console.log(includeUppercase);
  determineNumbers();
  console.log(includeNumbers);

  var characters;
  var password = "";
  if (haveLowercase && includeUppercase && includeNumbers){
    characters = lowercase += uppercase += numbers;
  }
  else if (includeUppercase && includeNumbers){
    characters = uppercase += numbers;
  }
  else if (includeUppercase){
    characters = uppercase;
  }
  else if (haveLowercase){
    characters = lowercase;
  }

  else {
     alert("error");
  }

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
