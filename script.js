const myAge = 12;
const isFemale = false;
const driverStatus = "Nope";
const firstName = "Abraham";
const totalAmount = 99;


if (myAge >= 18) {
  console.log("je mag naar binnen, veel plezier");
} else {
  console.log("Je bent nog geen 18, je mag helaas niet naar binnen");
}

if (isFemale) {
  console.log("Welkom op Ladiesnight!");
} else {
  console.log("Helaas, vanavond geen feestje voor de mannen!");
}

if (driverStatus === "Bob") {
  console.log("Top Bob, veilig naar huis");
} else {
  console.log("Zoek een Bob om je naar huis te brengen!");
}

if (myAge >= 18 && myAge <= 25) {
  console.log("Yeah, je krijgt 50% korting op het bier");
} else {
  console.log("Helaas, voor jou vandaag geen korting");
}

if (firstName === "Sarah" || firstName === "Bram" || firstName === "Abraham") {
  console.log("U krijgt een gratis biertje");
} else {
  console.log("Helaas, geen gratis bier, fijne avond!");
}

if (totalAmount > 25 && totalAmount <= 50) {
  console.log("Je krijgt een gratis portie bitterballen");
} else if (totalAmount > 50 && totalAmount < 100) {
  console.log("Je krijgt een gratis portie nachos");
} else if (totalAmount >= 100) {
  console.log("Je krijgt een gratis fles champagne");
} else {
  console.log("Nog even doorsparen voor gratis eten of drinken")
}
