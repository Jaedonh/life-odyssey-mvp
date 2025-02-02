const properties = [
    { name: "Studio Apartment", price: 50000, rentalIncome: 300, upkeep: 50, growthRate: 1.02 },
    { name: "Suburban House", price: 150000, rentalIncome: 1000, upkeep: 150, growthRate: 1.03 },
    { name: "Luxury Villa", price: 500000, rentalIncome: 4000, upkeep: 500, growthRate: 1.04 },
    { name: "Downtown Penthouse", price: 750000, rentalIncome: 7000, upkeep: 750, growthRate: 1.05 },
    { name: "Mega Mansion", price: 2000000, rentalIncome: 20000, upkeep: 2000, growthRate: 1.06 }
];

let ownedProperties = [];

// Function to Buy Property
function buyProperty(propertyName) {
    let property = properties.find(p => p.name === propertyName);

    if (!property) return;
    if (money < property.price) {
        addEvent(`❌ You cannot afford the ${property.name}.`);
        return;
    }

    money -= property.price;
    ownedProperties.push({ ...property, yearsOwned: 0 });
    addEvent(`✅ You bought a ${property.name} for $${property.price}.`);
    updateUI();
}

// Function to Sell Property
function sellProperty(propertyName) {
    let index = ownedProperties.findIndex(p => p.name === propertyName);

    if (index === -1) {
        addEvent(`❌ You do not own a ${propertyName}.`);
        return;
    }

    let property = ownedProperties[index];
    let salePrice = Math.floor(property.price * property.growthRate ** property.yearsOwned);

    money += salePrice;
    ownedProperties.splice(index, 1);
    addEvent(`✅ You sold your ${property.name} for $${salePrice}.`);
    updateUI();
}

// Function to Update Property Values (Market Growth)
function updatePropertyValues() {
    ownedProperties.forEach(property => {
        property.price = Math.floor(property.price * property.growthRate);
        property.yearsOwned++;
    });
}

// Function to Collect Rent
function collectRent() {
    let totalIncome = ownedProperties.reduce((sum, property) => sum + property.rentalIncome, 0);
    money += totalIncome;
    addEvent(`💰 You collected $${totalIncome} in rent from your properties.`);
    updateUI();
}
