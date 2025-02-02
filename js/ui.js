// Function to Update UI
function updateUI() {
    document.getElementById("age").innerText = `Age: ${Math.floor(age)}`;
    document.getElementById("health").innerText = `Health: ${health}%`;
    document.getElementById("happiness").innerText = `Happiness: ${happiness}%`;
    document.getElementById("money").innerText = `Wealth: $${money}`;
    document.getElementById("job").innerText = job;

    // Check for critical conditions
    if (health <= 0) {
        addEvent("⚠️ You have died due to poor health!");
        alert("Game Over: Your health reached 0.");
        resetGame();
    }
    if (money < 0) {
        addEvent("⚠️ You're in debt! Be careful.");
    }
}

// Reset game on death
function resetGame() {
    localStorage.clear();
    location.reload();
}

// Function to Show Job Selection
function showJobMenu() {
    let jobOptions = jobs.map(job => 
        `<button onclick="applyForJob('${job.title}')">${job.title} ($${job.salary}/week)</button><br>`
    ).join("");

    document.getElementById("event-feed").innerHTML += `<p><strong>Available Jobs:</strong></p>${jobOptions}`;
}

// Function to Show Relationships
function showRelationships() {
    let options = relationships.map(person =>
        `<button onclick="interact('${person.name}', 'Call')">Call ${person.name}</button>
         <button onclick="interact('${person.name}', 'Gift')">Gift ${person.name}</button>
         <button onclick="interact('${person.name}', 'Ignore')">Ignore ${person.name}</button><br>`
    ).join("");

    document.getElementById("event-feed").innerHTML += `<p><strong>Relationships:</strong></p>${options}`;
}

// Function to Show Available Properties for Purchase
function showRealEstateMenu() {
    let options = properties.map(property => 
        `<button onclick="buyProperty('${property.name}')">${property.name} - $${property.price}</button><br>`
    ).join("");
    
    document.getElementById("event-feed").innerHTML += `<p><strong>Properties for Sale:</strong></p>${options}`;
}

// Function to Show Owned Properties
function showOwnedProperties() {
    if (ownedProperties.length === 0) {
        addEvent("🏡 You do not own any properties.");
        return;
    }

    let options = ownedProperties.map(property => 
        `<button onclick="sellProperty('${property.name}')">${property.name} (Sell for $${property.price})</button><br>`
    ).join("");

    document.getElementById("event-feed").innerHTML += `<p><strong>Your Properties:</strong></p>${options}`;
}

// Function to Add an Event to the Text Feed
function addEvent(eventText) {
    let eventFeed = document.getElementById("event-feed");
    let newEvent = document.createElement("p");
    newEvent.textContent = eventText;
    eventFeed.appendChild(newEvent);
    eventFeed.scrollTop = eventFeed.scrollHeight;
}
