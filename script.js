// PART 1: Variable Declarations & Conditionals
let user = "Karl";
const age = 20;

if (age >= 18) {
console.log(user + " is an adult.");
} else {
console.log(user + " is a minor.");
}

// PART 2: Custom Functions
function greetUser(userName) {
return "Hello, " + userName + "!";
}

function squareNumber(num) {
return num * num;
}

console.log(greetUser("Karl"));
console.log("5 squared is:", squareNumber(5));

// PART 3: Loops
// Example 1: for loop
for (let i = 1; i <= 5; i++) {
console.log("Number:", i);
}

// Example 2: while loop
let count = 3;
while (count > 0) {
console.log("Countdown:", count);
count--;
}

// PART 4: DOM Interactions
// 1. Change text when button is clicked
document.getElementById("btn1").addEventListener("click", function() {
document.getElementById("message").textContent = greetUser(user);
});

// 2. Show numbers using loop
document.getElementById("btn2").addEventListener("click", function() {
let output = "";
for (let i = 1; i <= 5; i++) {
output += i + " ";
}
alert("Numbers: " + output);
});

// 3. Check age and show message
document.getElementById("btn3").addEventListener("click", function() {
if (age >= 18) {
alert("You are an adult ✅");
} else {
alert("You are a minor ❌");
}
});

