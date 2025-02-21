/* Snack 1
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */
const form = document.querySelector("#formRequest")
const text = document.querySelectorAll(".card-text")
const negozio = [
    {
        nome: "Terminator",
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




form.addEventListener("submit", function (e) {
    e.preventDefault()
    for (i = 0; i < negozio.length; i++) {
        if (negozio[i].peso < piuPesante) {
            piuPesante = negozio[i].peso
            bicicleta = negozio[i]
        }

    }

    text[0].innerHTML = `Nome: ${bicicleta.nome}`
    text[1].innerHTML = (`peso: ${bicicleta.peso}`)
    console.log(piuPesante);
    console.log(bicicleta);
})
console.log(text[1]);
console.log(text[2]);

