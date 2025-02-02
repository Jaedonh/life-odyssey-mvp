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
