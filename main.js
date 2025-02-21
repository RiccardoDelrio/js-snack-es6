/* Snack 1
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */


//dichiarazione elementi dalla DOM
const form = document.querySelector("#formRequest")
const text = document.querySelectorAll(".card-text")
const disponibili = document.querySelector(".list-group")
//Dichiarazione variabili 
let piuLeggera = 100
let bicicleta = {}
console.log(disponibili);
//dichiarazione Obj Array
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
        nome: "grazie al",
        peso: 11,
    }

]


//Form submit event
form.addEventListener("submit", function (e) {
    e.preventDefault()
    finder()
    addResult()
    addAllBike()
    console.log(piuLeggera);
    console.log(bicicleta);
})


//funzioni
//trovare la bici con il peso minore e restituirla a un nuovo oggetto
const finder = () => {
    for (let i = 0; i < negozio.length; i++) {
        if (negozio[i].peso < piuLeggera) {
            piuLeggera = negozio[i].peso
            bicicleta = negozio[i]
        }

    }
}
//aggiungi elementi di tipo <li></li>in base a quanti elementi sono presenti nell'array
const addAllBike = () => {
    for (let i = 0; i < negozio.length; i++) {
        disponibili.insertAdjacentHTML("beforeend", (`<li class="list-group-item">${negozio[i].nome}</li>`))
    }
}
//funzione per associare i risultati trovati agli elementi DOM
const addResult = () => {
    text[0].innerHTML = `Nome: ${bicicleta.nome}`
    text[1].innerHTML = `peso: ${bicicleta.peso}`
}

/* Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */


const squadra = [
    {
        nome: "inter",
        puntiFatti: "",
        falliSubiti: ""
    },
    {
        nome: "milan",
        puntiFatti: "",
        falliSubiti: ""
    },
    {
        nome: "juve",
        puntiFatti: "",
        falliSubiti: ""
    },
    {
        nome: "Roma",
        puntiFatti: "",
        falliSubiti: ""
    },
    {
        nome: "Como",
        puntiFatti: "",
        falliSubiti: ""
    }
]
const falli = []
let number
console.log(squadra);

for (let i = 0; i < squadra.length; i++) {
    randomNumber()
    squadra[i].falliSubiti = (number)
    falli.push({ nome: squadra[i].nome, falliSubiti: squadra[i].falliSubiti })
    randomNumber()
    squadra[i].puntiFatti = (number)
}


console.log(falli);







//Cratore di numeri casuali da 1 a 10
function randomNumber() {
    number = Math.floor((Math.random() * 20) + 1);
    return number
}