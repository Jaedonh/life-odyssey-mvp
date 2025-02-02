// Game State Variables
let age = 18;
let health = 100;
let happiness = 100;
let money = 500;
let job = "Unemployed";

// Function to Progress Time
function nextWeek() {
    age += 0.019;  // Advances by 1 week (approx 1/52 of a year)
    updateUI();
    addEvent(generateEvent());
    saveGame();
}

// Function to Save Progress
function saveGame() {
    let gameState = { age, health, happiness, money, job };
    localStorage.setItem("lifeOdysseySave", JSON.stringify(gameState));
}

// Function to Load Saved Progress
function loadGame() {
    let savedData = JSON.parse(localStorage.getItem("lifeOdysseySave"));
    if (savedData) {
        age = savedData.age;
        health = savedData.health;
        happiness = savedData.happiness;
        money = savedData.money;
        job = savedData.job;
        updateUI();
    }
}

// Initialize Game
window.onload = loadGame;
