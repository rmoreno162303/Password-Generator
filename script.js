// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


let capital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(', ')", "+", "-", ".", "~", "|", "<", ">", "=", "-", "_", "/", ":", ";", "?", "[', ']", "{', '}", "~"];

let allChars = []

let password = []

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  let pwdLength = prompt("How many characters do you want in your password? Password must be between 8 and 128 characters.");
  if (pwdLength <= 7 || pwdLength >= 129) {
    window.alert(pwdLength + "  is not between 8 and 128. Try again.");
    return;
  } else if (pwdLength >= 8 && pwdLength <= 128) {
    confirm("Your password will contain " + pwdLength + " characters.");
    console.log(pwdLength);

    let capitalCon = confirm("Do you want your password to contain capital letters?");
    let lowerCon = confirm("Do you want your password to contain lower case letters?");
    let digitsCon = confirm("Do you want your password to contain digits?");
    let specialsCon = confirm("Do you want your password to contain special characters?");

    if (!capitalCon && !lowerCon && !digitsCon && !specialsCon) {
      alert("Your password must contain character sets.")
      return;
    }

    if (capitalCon) {
      allChars = allChars.concat(capital);

      // var capital = Math.floor(Math.random(capital));
    }

    if (lowerCon) {
      allChars = allChars.concat(lower);
    }

    if (digitsCon) {
      allChars = allChars.concat(digits);
    }

    if (specialsCon) {
      allChars = allChars.concat(specials);
    }

    for(let i=0; i<pwdLength; i++) {
      let randomIndex = Math.floor(Math.random() * allChars.length)
      let selectedChar = allChars[randomIndex];
      password.push(selectedChar);
    }

    // if(comfirm === )
  };
  return password.join('');
}




// prompt = length

//let pwdLength = prompt("how many characters")

// Console.log(pwdLength)

// confirm (lower,upper,numeric, special characters)

// let numbers = confirm("Do you want numbers?")

// console.log(numeric)

// create var to hold anser to prompt/confirm

// function to validate user answers

// if and equality operators 

// if(numbers)



// List of numbers, special chars, uppercase and lowercase
    // array
    // combine all arrays in 1 array
    // Randomly choose characters
    // create a string set equal to password var
    // array method to check if something is in array
  // generate random password
  // return password

//   return password;
// }
