// Part 2: Functions - Parameters, Return Values, Scope

// Global variable
let clickCount = 0;

// Function with parameter & return value
function addNumbers(a, b) {
  return a + b;
}

console.log("5 + 3 =", addNumbers(5, 3)); // Example usage

// Function demonstrating local vs global scope
function incrementClick() {
  let localMessage = "You clicked the button!";
  clickCount++;
  console.log(localMessage, "Total clicks:", clickCount);
}

// Part 3: Using JS to trigger CSS animations

// Animate box on button click
document.getElementById("animateBtn").addEventListener("click", function() {
  incrementClick();
  let box = document.getElementById("jsBox");
  box.classList.toggle("animate");
});

// Modal open/close
const modal = document.getElementById("modal");
document.getElementById("toggleModalBtn").addEventListener("click", () => {
  modal.style.display = "flex";
});
document.getElementById("closeModalBtn").addEventListener("click", () => {
  modal.style.display = "none";
});
