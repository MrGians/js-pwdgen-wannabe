// #1 Prendere l'elemento in cui stamperemo [bad-password]
// #2 Inserire Variabile Number da aggiungere a fine password [21]
// #3 Chiedere il Nome all'utente
// #4 Chiedere il Cognome all'utente
// #5 Chiedere il Colore preferito all'utente
// #6 Sommare variabili string + variabile number
// #7 Stampare a schermo in Grassetto la Password risultante


/*****************************************/
//            Primo metodo
/*****************************************/

// #1
let badPassword = document.getElementById('bad-password');

// #2
let randomNumber = 21;
console.log (randomNumber);

// #3
const firstName = prompt('Inserisci il tuo Nome', "Gianluca");
console.log (firstName);

// #4
const lastName = prompt('Inserisci il tuo Cognome', "Mura");
console.log (lastName);

// #5
const favouriteColor = prompt('Inserisci il tuo Colore Preferito', "Verde");
console.log (favouriteColor);

// #6
let resultPassword = firstName + lastName + favouriteColor + randomNumber;
console.log(resultPassword)

// #7
badPassword.innerHTML = `[#1] - La tua Nuova Password è: <strong>${resultPassword}</strong>`



/*****************************************/
//            Secondo metodo
/*****************************************/

// #1
let badPassword2 = document.getElementById('bad-password-2');

// Dal #2 al #6 stesse variabili di sopra

// #7
badPassword2.innerText = resultPassword;



/*****************************************/
//            Terzo metodo
/*****************************************/

// #1
let badPassword3 = document.getElementById('bad-password-3')

// #2 verrà inserito direttamente come [Number] senza legarlo ad una variabile

// Dal #3 al #5 stesse variabili di sopra

// #6 + #7
badPassword3.innerText = firstName + lastName + favouriteColor + 21;
