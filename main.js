/* Snack 1
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */
const negozio = [
    {
        nome: "terminator",
        peso: 9,
    },
    {
        nome: "lilly",
        peso: 15,
    },
    {
        nome: "grazia",
        peso: 10,
    },
    {
        nome: "graziella",
        peso: 12,
    },
    {
        nome: "grazieal",
        peso: 11,
    }

]
let piuPesante = 100
let bicicleta = {}
for (i = 0; i < negozio.length; i++) {
    if (negozio[i].peso < piuPesante) {
        piuPesante = negozio[i].peso
        bicicleta = negozio[i]
    }

}
console.log(piuPesante);
console.log(bicicleta);


