// Sample Life Events
const events = [
    { text: "You got a part-time job at a café! (+$200)", effect: { money: 200 } },
    { text: "You exercised regularly. (+5 Health)", effect: { health: 5 } },
    { text: "A friend invited you to a party. (+10 Happiness)", effect: { happiness: 10 } },
    { text: "You got sick. (-10 Health)", effect: { health: -10 } },
];

// Function to Generate a Random Event
function generateEvent() {
    let event = events[Math.floor(Math.random() * events.length)];
    applyEventEffect(event.effect);
    return event.text;
}

// Function to Apply Event Effects
function applyEventEffect(effect) {
    if (effect.money) money += effect.money;
    if (effect.health) health += effect.health;
    if (effect.happiness) happiness += effect.happiness;
}
