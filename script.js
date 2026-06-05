// XP and level
let xp = 0;
let level = 1;

// UI Elements
const levelText = document.getElementById("level");
const xpText = document.getElementById("xp");
const progressFill = document.getElementById("progress-fill");

// Buttons
const readBtn = document.getElementById("read-btn");
const workoutBtn = document.getElementById("workout-btn");
const codeBtn = document.getElementById("code-btn");

// Function to add XP
function gainXP(amount) {

    xp += amount;

    // Level Up Check
    if (xp >= 100) {

        level++;

        xp = 0;

        alert("Level UP! You reached Level " + level);
    }

    // Update UI
    levelText.textContent =
    "Level: " + level;

    xpText.textContent = 
    "XP: " + xp + " / 100";

    progressFill.style.width =
    xp + "%";
}

// Habit Buttons 
readBtn.addEventListener("click", function() {
    gainXP(10);
});

workoutBtn.addEventListener("click", function() {
    gainXP(20);
});

codeBtn.addEventListener("click", function() {
    gainXP(25);
});
