// Constants
const generateBtn = document.querySelector("#generate");

// Functions

/**
 * writes a generated password to the #password
 */
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

/**
 * generate a password based on certain criteria
 */
function generatePassword() {
  let length = prompt("What is your desired password length? (Between 8 and 128)");
  if (length < 8 || length > 128 || isNaN(length)) { // Make sure user entered a valid input before continuing
    alert("The value you entered is not a number between 8 and 128")
    return "Bad input!";
  }
    let caps = confirm("Should there be capital letters?");
    let numbers = confirm("Should there be numbers?");
    let special = confirm("Should there be special characters?");
  

  // Password is currently blank! We need to make a better one
  let password = length + " " + "caps: " + caps + " " + "numbers: " + numbers + " " + "special: " + special;





  return password;
}

// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
