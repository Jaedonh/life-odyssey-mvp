// Function to Update UI
function updateUI() {
    document.getElementById("age").innerText = `Age: ${Math.floor(age)}`;
    document.getElementById("health").innerText = `Health: ${health}%`;
    document.getElementById("happiness").innerText = `Happiness: ${happiness}%`;
    document.getElementById("money").innerText = `Wealth: $${money}`;
    document.getElementById("job").innerText = job;
}

// Function to Add an Event to the Text Feed
function addEvent(eventText) {
    let eventFeed = document.getElementById("event-feed");
    let newEvent = document.createElement("p");
    newEvent.textContent = eventText;
    eventFeed.appendChild(newEvent);
    eventFeed.scrollTop = eventFeed.scrollHeight;
}

// Function to Show Different Menus
function showMenu(menu) {
    alert(`Opening ${menu} menu (not implemented yet).`);
}
