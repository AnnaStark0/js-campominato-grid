// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, 
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


const container = document.querySelector('.container');

let items ='';

for (let i = 0; i < 100; i++){
    items += `<div class="easy"></div>`;
    
}

console.log(items);

container.innerHTML = items;



//PROVA
// const gioca = document.getElementById('gioca');

// gioca.addEventListener("click", function ()) {
//     let livello = document.getElementById('livello').value;

//     let items = '';


//     if (livello == 'easy') {
//         for (let i = 1; i <= 100; i++) {
//             items += `<div class="easy"></div>`;
//         }
//         container.innerHTML = items;

//         // const easy = document.querySelectorAll('.easy');
//         }
//     }
// }