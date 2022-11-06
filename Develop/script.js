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
  //this prompts the user to choose the length of their password will be
  passwordLength = prompt("How many characters would you like your password to have? (must be between 8-128 characters):");

  //if user enters a password length less than 8 an alert will let them know it must be between 8-128
  if (passwordLength<8){
    alert("Password must be 8-128 characters.");
    determineLength();
  }

  //if user enters a password length more than 128 an alert will let them know it must be between 8-128
  else if (passwordLength>128){
    alert("Password must be 8-128 characters.");
    determineLength();
  }

  //if user makes entry other than a number an alert will tell them the password must be between 8-128
  else if (isNaN(passwordLength)){
    alert("Password must be 8-128 characters.");
    determineLength();
  }
  //begins password character preferences of the user
  else{
  alert("Choose what type of characters to include in your password.");
  }
  return passwordLength;
}

//this function determines if the user would like to include lowercase characters
function determineLowercase(){
  haveLowercase = prompt("Do you want to include lowercase letters in your password? \n(Yes or No)");
  haveLowercase = haveLowercase.toLowerCase();

  //if user enters nothing alert tells them this field is required
  if (haveLowercase === null || haveLowercase === ""){
    alert("this field is required.");
    determineLowercase();
  }

//user chooses to include lowercase letters;function runs true
  else if (haveLowercase === "yes" || haveLowercase === "y"){
    haveLowercase = true;
    return haveLowercase;
  }

  //user chooses not to include lowercase letters;funtion runs false
  else if (haveLowercase === "no" || haveLowercase === "n"){
    haveLowercase = false;
    return haveLowercase;
  }

  //user enters something other than yes or no; alert notifies that this field is required
  else {
    alert("This field is required.");
    determineLowercase();
  }
  return haveLowercase;
}

//this function determines if user wants uppercase letters included in password
function determineUppercase(){
  includeUppercase = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
  includeUppercase = includeUppercase.toLowerCase();

  //if user enters nothing; alert tells them this is required
  if (includeUppercase === null || includeUppercase === ""){
    alert("This field is required.");
    determineUppercase();
  }

  //user chooses to include uppercase letters; function runs true
  else if (includeUppercase === "yes" || includeUppercase === "y"){
    includeUppercase = true;
    return includeUppercase;
  }

  //user chooses not to include uppercase letters; function runs false
  else if (includeUppercase === "no" || includeUppercase ==="n"){
    includeUppercase = false;
    return includeUppercase;
  }

  //user enters something other than yes or no; alert notifies this field is required
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

//user enters nothing; alert notifies this is required
    if (includeNumbers === null || includeNumbers === ""){
      alert("This field is required.");
      determineNumbers();
    }

//user chooses to include numbers in password; function runs true
    else if (includeNumbers === "yes" || includeNumbers ==="y"){
      includeNumbers = true;
      return includeNumbers;
    }

//user chooses not to include numbers in password; function runs false
    else if (includeNumbers === "no" || includeNumbers ==="n"){
      includeNumbers = false;
      return includeNumbers;
    }

//user enters something other than yes or no; alert notifies this is required
    else {
      alert("This field is required.");
      determineNumbers();
    }
    return includeNumbers;
}

//this function determines if user wishes to include special characters
function determineSpecial(){
  haveSpecial = prompt("Do you want to include special characters? \n(Yes or No)");
  haveSpecial = haveSpecial.toLowerCase();
  
//user enters nothing; alert notifies this is required
  if (haveSpecial === null || haveSpecial === ""){
    alert("Please answer Yes or No");
    determineSpecial();

//user chooses to include special characters; function runs true
  }else if (haveSpecial === "yes" || haveSpecial ==="y"){
    haveSpecial = true;
    return haveSpecial;

//user chooses not to include special characters; function runs false
  }else if (haveSpecial === "no" || haveSpecial ==="n"){
    haveSpecial = false;
    return haveSpecial;
  
//user enters something other than yes or no; alert notifies this is required
  }else {
    alert("Please answer Yes or No");

    determineSpecial();
  }
  return haveSpecial;
}

//this function combines the functions that were used to gather the users character preferences into a password
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

  //the variable characters represents the specific array of characters chosen to randomly generate the password
  var characters;
  var password = "";

  //user chooses to include lowercase, uppercase, numbers, special characters
  if (haveLowercase && includeUppercase && includeNumbers && haveSpecial){
    characters = lowercase + uppercase + numbers + specialChar;
  }

  //user chooses to include lowercase, uppercase, numbers, special characters
  else if (haveLowercase && includeUppercase && includeNumbers){
    characters = lowercase + uppercase + numbers;
  }

  //user chooses to include lowercase, numbers, special characters
  else if (haveLowercase && includeNumbers && haveSpecial){
    characters = lowercase + numbers + specialChar;
  }

  //user chooses to include lowercase, uppercase, special characters
  else if (haveLowercase && includeUppercase && haveSpecial){
    characters = lowercase + uppercase + specialChar;
  }

  //user chooses to include uppercase, numbers, special characters
  else if (includeUppercase && includeNumbers && haveSpecial){
    characters = uppercase + numbers + specialChar;
  }

  //user chooses to include lowercase and numbers
  else if (haveLowercase && includeNumbers){
    characters = lowercase + numbers;
  }

  //user chooses to include lowercase and special characters
  else if (haveLowercase && haveSpecial){
  characters = lowercase + specialChar;
  }

  //user chooses to include uppercase and special characters
  else if (includeUppercase && haveSpecial){
    characters = uppercase + specialChar;
  }

  //user chooses to include uppercase and numbers
  else if (includeUppercase && includeNumbers){
    characters = uppercase + numbers;
  }

  //user chooses to include uppercase and lowercase
  else if (includeUppercase && haveLowercase){
    characters = uppercase + lowercase;
  }

  //user chooses to include numbers and special characters
  else if (includeNumbers && haveSpecial){
    characters = numbers + specialChar;
  }

  //user chooses to use only uppercase
  else if (includeUppercase){
    characters = uppercase;
  }

  //user chooses to use only lowercase
  else if (haveLowercase){
    characters = lowercase;
  }

  //user chooses to only use numbers
  else if (includeNumbers){
    characters = numbers;
  }

  //user chooses to only use special characters
  else if (haveSpecial){
    characters = specialChar;
  }

  //user chose nothing; alert notifies at least one must be chosen
  else {
     alert("You must select at least one of the following: Lowercase letters, Uppercase letters, numbers, special characters.");
  }

  //this loops through the functions used to gather user preferences and determine the arrays to combines to randomly select characters from
  //math.floor and math.random combine to randomly generate the password based on the users chosen length and the array of combined character preferences
  for(var i = 0; i < passwordLength; i++){
     password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password;
}


// Writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Adds event listener to generate button
generateBtn.addEventListener("click", writePassword);
