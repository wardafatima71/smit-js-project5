// 1. Declare an empty array using JS literal notation to store student names in future.
let studentNamesLiteral = [];

// 2. Declare an empty array using JS object notation to store student names in future.
let studentNamesObject = new Array();

// 3. Declare and initialize a strings array.
let stringArray = ["apple", "banana", "cherry"];

// 4. Declare and initialize a numbers array.
let numbersArray = [1, 2, 3, 4, 5];

// 5. Declare and initialize a boolean array.
let booleanArray = [true, false, true, false];

// 6. Declare and initialize a mixed array.
let mixedArray = ["apple", 5, true, null];

// 7. Declare and Initialize an array of available education qualifications in Pakistan.
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.getElementById("qualifications").innerHTML = qualifications.join(", ");

// 8. Store student names and scores, then display their percentages.
let students = ["Ali", "Sara", "John"];
let scores = [400, 350, 450];
let totalMarks = 500;
let studentScoreHTML = "";

for (let i = 0; i < students.length; i++) {
    let percentage = (scores[i] / totalMarks) * 100;
    studentScoreHTML += `${students[i]} scored ${scores[i]} marks and percentage is ${percentage}% <br>`;
}

document.getElementById("studentScores").innerHTML = studentScoreHTML;

// 9. Colors Array Manipulation
let colorsArray = ["Red", "Blue", "Green"];
document.getElementById("colorsArray").innerHTML = colorsArray.join(", ");

// a. Add color to beginning
function addColorBeginning() {
    let color = document.getElementById("colorInput").value;
    colorsArray.unshift(color);
    document.getElementById("colorsArray").innerHTML = colorsArray.join(", ");
}

// b. Add color to end
function addColorEnd() {
    let color = document.getElementById("colorInput").value;
    colorsArray.push(color);
    document.getElementById("colorsArray").innerHTML = colorsArray.join(", ");
}

// c. Delete first color
function deleteFirstColor() {
    colorsArray.shift();
    document.getElementById("colorsArray").innerHTML = colorsArray.join(", ");
}

// d. Delete last color
function deleteLastColor() {
    colorsArray.pop();
    document.getElementById("colorsArray").innerHTML = colorsArray.join(", ");
}

// f. Add color at specific index
function addColorAtIndex() {
    let index = prompt("Enter the index to add color:");
    let color = document.getElementById("colorInput").value;
    colorsArray.splice(index, 0, color);
    document.getElementById("colorsArray").innerHTML = colorsArray.join(", ");
}

// g. Delete color at specific index
function deleteColorAtIndex() {
    let index = prompt("Enter the index to delete color:");
    let count = prompt("How many colors to delete?");
    colorsArray.splice(index, count);
    document.getElementById("colorsArray").innerHTML = colorsArray.join(", ");
}

// 10. Sort student scores in ascending order.
let sortedScores = scores.slice().sort(function(a, b) {
    return a - b;
});
document.getElementById("sortedScores").innerHTML = sortedScores.join(", ");

// 11. Initialize an array with city names and copy 3 elements to selectedCities.
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
let selectedCities = cities.slice(0, 3);
document.getElementById("selectedCities").innerHTML = selectedCities.join(", ");

// 12. Create a single string from array using join method.
let arr = ["This", "is", "my", "cat"];
let joinedString = arr.join(" ");
document.getElementById("joinedString").innerHTML = joinedString;

// 13. FIFO (First In, First Out)
let fifoArray = [];
fifoArray.push("Item 1");
fifoArray.push("Item 2");
fifoArray.push("Item 3");
document.getElementById("fifoArray").innerHTML = fifoArray.join(", ");
fifoArray.shift(); // Remove first item (FIFO)
document.getElementById("fifoArray").innerHTML += "<br>After removing first: " + fifoArray.join(", ");

// 14. LIFO (Last In, First Out)
let lifoArray = [];
lifoArray.push("Item A");
lifoArray.push("Item B");
lifoArray.push("Item C");
document.getElementById("lifoArray").innerHTML = lifoArray.join(", ");
lifoArray.pop(); // Remove last item (LIFO)
document.getElementById("lifoArray").innerHTML += "<br>After removing last: " + lifoArray.join(", ");

// 15. Store phone manufacturers and create a dropdown menu.
let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
let dropdownHTML = "<select>";

for (let i = 0; i < phoneManufacturers.length; i++) {
    dropdownHTML += `<option value="${phoneManufacturers[i]}">${phoneManufacturers[i]}</option>`;
}

dropdownHTML += "</select>";
document.getElementById("phoneManufacturers").innerHTML = dropdownHTML;
