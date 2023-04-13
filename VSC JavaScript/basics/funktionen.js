let input = prompt("Bitte gebe Grad Celsius an, um es in Fahrenheit umzurechnen!");
let ergebnis = fahrenheit(input);

console.log(`${input} Grad Celsius sind ${ergebnis} Fahrenheit.`);

function fahrenheit(x) {
  return x * (9 / 5) + 32;
}
