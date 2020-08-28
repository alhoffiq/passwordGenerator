// Constants
const generateBtn = document.querySelector("#generate");
const cns = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const Cns = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const cNs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const cnS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];
const CNs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const CnS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];
const cNS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];
const CNS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];
// cns stands for the user input variables "caps", "numbers", and "special" respectively. Uppercase means true was selected. There's definitely a better way to do this lol
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

  let password = getCode(length, caps, numbers, special);

  return password;
}

// Main Process
  function getCharacters(charSet, length) { // Makes the password 1 letter at a time from the given array of characters until specified length is reached
    let code = "";
    for (let i = 0; i < length ; i++) { 
      code = code + charSet[Math.floor(Math.random() * charSet.length)];
      console.log(code);    
    }
    return code;
  }

  function getCode(length, caps, numbers, special) { // User wants only lowercase letters
    if (!caps && !numbers && !special) {
      let code = getCharacters(cns, length);
      return code;
    }
    else if (caps && !numbers && !special) { // User wants uppercase letters as well as lowercase letters
      let code = getCharacters(Cns, length);
      return code;
    }
    else if (!caps && numbers && !special) { // User wants numbers as well
      let code = getCharacters(cNs, length);
      return code;
    }
    else if (!caps && !numbers && special) { // User wants special characters as well
      let code = getCharacters(cnS, length);
      return code;
    }
    else if (caps && numbers && !special) { // User wants uppercase letters and numbers as well
      let code = getCharacters(CNs, length);
      return code;
    }
    else if (!caps && numbers && special) { // User wants numbers and special characters as well
      let code = getCharacters(cNS, length);
      return code;
    }
    else if (caps && !numbers && special) { // User wants uppercase and special characters as well
      let code = getCharacters(CnS, length);
      return code;
    }
    else { // User wants all lowercase and uppercase letters, numbers, and special characters
      let code = getCharacters(CNS, length);
      return code;
    }
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);