// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/";
var everything = "!@#$%^&*()_-+={}[];:'`~<,>.?/0987654321abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
var passwordLength;
var haveLowercase;
var includeUppercase;
var includeNumbers;
var haveSpecial;

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
  alert("Choose what type of characters to include in your password.");
  }
  return passwordLength;
}

//this function determines if the user would like to include lowercase characters
function determineLowercase(){
  haveLowercase = prompt("Do you want to include lowercase letters in your password? \n(Yes or No)");
  haveLowercase = haveLowercase.toLowerCase();

  if (haveLowercase === null || haveLowercase === ""){
    alert("this field is required.");
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
    determineLowercase();
  }
  return haveLowercase;
}

function determineUppercase(){
  includeUppercase = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
  includeUppercase = includeUppercase.toLowerCase();

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
    alert("This field is required.")
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

function determineSpecial(){
  haveSpecial = prompt("Do you want to include special characters? \n(Yes or No)");
  haveSpecial = haveSpecial.toLowerCase();
  
  if (haveSpecial === null || haveSpecial === ""){
    alert("Please answer Yes or No");
    determineSpecial();

  }else if (haveSpecial === "yes" || haveSpecial ==="y"){
    haveSpecial = true;
    return haveSpecial;

  }else if (haveSpecial === "no" || haveSpecial ==="n"){
    haveSpecial = false;
    return haveSpecial;
  
  }else {
    alert("Please answer Yes or No");

    determineSpecial();
  }
  return haveSpecial;
}


function generatePassword(){
  determineLength();
  console.log(passwordLength);
  determineLowercase();
  console.log(haveLowercase);
  determineUppercase();
  console.log(includeUppercase);
  determineNumbers();
  console.log(includeNumbers);
  determineSpecial();
  console.log(haveSpecial);

  var characters;
  var password = "";
  if (haveLowercase && includeUppercase && includeNumbers && haveSpecial){
    characters = lowercase + uppercase + numbers + specialChar;
  }
  else if (haveLowercase && includeUppercase && includeNumbers){
    characters = lowercase + uppercase + numbers;
  }
  else if (haveLowercase && includeNumbers && haveSpecial){
    characters = lowercase + numbers + specialChar;
  }
  else if (haveLowercase && includeUppercase && haveSpecial){
    characters = lowercase + uppercase + specialChar;
  }
  else if (includeUppercase && includeNumbers && haveSpecial){
    characters = uppercase + numbers + specialChar;
  }
  else if (haveLowercase && includeNumbers){
    characters = lowercase + numbers;
  }
  else if (haveLowercase && haveSpecial){
  characters = lowercase + specialChar;
  }
  else if (includeUppercase && haveSpecial){
    characters = uppercase + specialChar;
  }
  else if (includeUppercase && includeNumbers){
    characters = uppercase + numbers;
  }
  else if (includeUppercase && haveLowercase){
    characters = uppercase + lowercase;
  }
  else if (includeNumbers && haveSpecial){
    characters = numbers + specialChar;
  }
  else if (includeUppercase){
    characters = uppercase;
  }
  else if (haveLowercase){
    characters = lowercase;
  }
  else if (includeNumbers){
    characters = numbers;
  }
  else if (haveSpecial){
    characters = specialChar;
  }

  else {
     alert("You must select at least one of the following: Lowercase letters, Uppercase letters, numbers, special characters.");
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

// Adds event listener to generate button
generateBtn.addEventListener("click", writePassword);
