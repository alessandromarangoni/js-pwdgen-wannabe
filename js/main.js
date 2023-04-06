
let yourName = prompt("inserisci il tuo nome");
let yourSurname = prompt("inserisci il tuo cognome");
let favouriteColor = prompt("inserisci il tuo colore perferito");
let currentYear = "2023";

let yourPassword = `la tua password è ${yourName}${yourSurname}${favouriteColor}${currentYear}`;

document.getElementById("selezione").innerText = yourPassword ;