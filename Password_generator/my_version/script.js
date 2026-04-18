const howLong = document.getElementById("number")
const shouldIncludeLowercase = document.getElementById("includeLowercase");
const shouldIncludeUppercase = document.getElementById("includeUppercase");
const shouldIncludeNumbers = document.getElementById("includeNumbers");
const shouldIncludeSymbol = document.getElementById("includeSymbols");
const result = document.getElementById("result");

function generatePassword() {

    const length = Number(howLong.value)
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += shouldIncludeLowercase.checked ? lowercaseChars : "";
    allowedChars += shouldIncludeUppercase.checked ? uppercaseChars : "";
    allowedChars += shouldIncludeNumbers.checked ? numberChars : "";
    allowedChars += shouldIncludeSymbol.checked ? symbolChars : "";

    if(length <= 0){
        window.alert("password length must be at least 11");
        return;
    }
    if(allowedChars.length === 0){
        window.alert("At least 1 set of character needs to be selected`");
        return;
    }

    for(let i=0; i<length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    result.textContent = password;


}