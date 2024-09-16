// 1. Character Check (Number, Uppercase, Lowercase)
function checkCharacter() {
    var char = document.getElementById("charInput").value;
    var result = "";

    if (char >= '0' && char <= '9') {
        result = "It's a number.";
    } else if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
        result = "It's an uppercase letter.";
    } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
        result = "It's a lowercase letter.";
    } else {
        result = "Invalid input.";
    }

    document.getElementById("charResult").innerText = result;
}

// 2. Larger Number or Equality Check
function checkLargerNumber() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result = "";

    if (num1 > num2) {
        result = num1 + " is larger.";
    } else if (num1 < num2) {
        result = num2 + " is larger.";
    } else {
        result = "Both numbers are equal.";
    }

    document.getElementById("numResult").innerText = result;
}

// 3. Positive, Negative, or Zero Check
function checkNumber() {
    var number = parseInt(document.getElementById("checkNum").value);
    var result = "";

    if (number > 0) {
        result = "The number is positive.";
    } else if (number < 0) {
        result = "The number is negative.";
    } else {
        result = "The number is zero.";
    }

    document.getElementById("numCheckResult").innerText = result;
}

// 4. Vowel Check
function isVowel() {
    var char = document.getElementById("vowelInput").value.toLowerCase();
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var result = vowels.includes(char) ? "True, it's a vowel." : "False, it's not a vowel.";

    document.getElementById("vowelResult").innerText = result;
}

// 5. Password Validation
var correctPassword = "12345";

function validatePassword() {
    var inputPassword = document.getElementById("password").value;

    if (!inputPassword) {
        document.getElementById("passwordResult").innerText = "Please enter your password.";
    } else if (inputPassword === correctPassword) {
        document.getElementById("passwordResult").innerText = "Correct! The password you entered matches the original password.";
    } else {
        document.getElementById("passwordResult").innerText = "Incorrect password.";
    }
}

// 6. Fixing Greeting based on Hour
var hour = 13;
var greeting;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

document.getElementById("greeting").innerText = greeting;

// 7. Convert 24-hour to 12-hour format
function convertTime() {
    var time = parseInt(document.getElementById("timeInput").value);
    var result;

    if (time >= 0 && time < 1200) {
        result = "AM";
    } else if (time >= 1200 && time <= 2359) {
        result = "PM";
    } else {
        result = "Invalid time format.";
    }

    document.getElementById("timeResult").innerText = time + " = " + result;
}
