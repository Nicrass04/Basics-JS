//komplexe Datentypen
let contact = {
  vorname: "Max",
  nachname: "Mustermann",
  alter: 25,
  email: "Max@Mustermann.de",
  istSchüler: false,
};

console.log(
  contact.vorname + " " + contact.nachname + " ist " + contact.alter + " Jahre alt."
);
console.log(`Seine Email ist: ${contact.email}`);
console.log(`Ist er noch ein Schüler? ${contact.istSchüler}`);
