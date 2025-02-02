// Game State Variables
let age = 18;
let health = 100;
let happiness = 100;
let money = 500;
let job = "Unemployed";
let hasCollegeDegree = false;

// Function to Progress Time
function nextWeek() {
    let nextWeekButton = document.querySelector("nav button:first-child");

    // Prevent spam-clicking
    nextWeekButton.disabled = true;
    setTimeout(() => {
        nextWeekButton.disabled = false;
    }, 1000);

    // Progress time
    age += 0.019;  // Advances by 1 week
    updateUI();
    addEvent(generateEvent());
    saveGame();
}

// Function to Save Progress
function saveGame() {
    let gameState = { age, health, happiness, money, job, hasCollegeDegree };
    localStorage.setItem("lifeOdysseySave", JSON.stringify(gameState));
}

// Function to Load Saved Progress
function loadGame() {
    let savedData = localStorage.getItem("lifeOdysseySave");
    if (savedData) {
        let gameState = JSON.parse(savedData);
        age = gameState.age || 18;
        health = gameState.health || 100;
        happiness = gameState.happiness || 100;
        money = gameState.money || 500;
        job = gameState.job || "Unemployed";
        hasCollegeDegree = gameState.hasCollegeDegree || false;
        updateUI();
    }
}

// Ensure Game Loads on Startup
window.onload = () => {
    loadGame();
    addEvent("Game Loaded: Your journey continues...");
};
