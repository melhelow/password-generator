// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  // the code runs here

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // generate password function stored here
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  // arrays
  var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCases = "abcdefghijklmnopqrstuvwxyz";
  var charachters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var numbers = "0123456789";
  var charBank = ""

  // attempts
  var CharTotal = prompt("how long do you like your password")
  if (CharTotal < 8 || CharTotal > 128) {
    alert("it should be between 8 and 128 characters.");
    return "";
  }
 
  var includeUpper = confirm("do your want your password contain upper case?");
  var includeLower = confirm(" do your want your password contains lower cases?");
  var includeCharachters = confirm("do you want your password to contains special character?");
  var IncludeNumbers = confirm(" do you want your password containes numbers?");

// check user inputs

if (!includeCharachters && !includeLower && !includeUpper && !IncludeNumbers) {
  // alert(" you must include one charachter type")
  alert("your password should include one charachter type or lowercase or upper case or number");
  return "";
}
 
if (includeUpper === true) {
  charBank = upperCases.concat (upperCases)

}
if (includeLower === true) {
  charBank = charBank.concat (lowerCases)

}
if (includeCharachters === true) {
  charBank = charBank.concat (charachters)
}

if (IncludeNumbers === true) {
  charBank = charBank.concat (numbers)
}

var password = "";
for (var i = 0; i < CharTotal; i++) {
  var randomIndex = Math.floor(Math.random() * charBank.length);
  password += charBank[randomIndex];

}

return password;
}








