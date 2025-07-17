/* 

Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

*/

// Cosa va nella funzione?

// Ambito di visibilita


/* 

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Solution:
- string.split(').reverse().join('')

Tools:
- for
- function
- if
- ===


*/

// chiedo parola all'utente (definisco variabile per parola utente)
const word = 'fabio' //prompt('Type a word')

/* Reverse the word */
// ciclo sulla stringa della parola al contrario 

/* let reversed_word = ''
for(let i = word.length - 1; i >= 0; i--){
  // - seleziono il singolo carattere
  const thisChar = word[i]

  //reversed_word =  reversed_word + thisChar
  // - e lo aggiungo ad una variabile d'appoggio
  reversed_word += thisChar
}
document.writeln(reversed_word); */



// Verifico se
// se la parola rovesciata e' identica alla parola dell'utente
/* if(word === reversed_word){
  // - se si e' un palindromo
  document.writeln('true')
} else {
  // ALTRIMENTI no.
  document.writeln('false')
}
 */

function reverse_word(word) {

  let reversed_word = ''

  for (let i = word.length - 1; i >= 0; i--) {
    // - seleziono il singolo carattere
    const thisChar = word[i]

    //reversed_word =  reversed_word + thisChar
    // - e lo aggiungo ad una variabile d'appoggio
    reversed_word += thisChar
  }
  //document.writeln(reversed_word);
  console.log(reversed_word);
  return reversed_word
}


function is_palindrom(word) {

  /* Reverse the word */
  // ciclo sulla stringa della parola al contrario 

  /*  const reversed_word = word.split('').reverse().join('') */
  const reversed_word = reverse_word(word)
  console.log(reversed_word);


  // Verifico se
  // se la parola rovesciata e' identica alla parola dell'utente
  if (word === reversed_word) {
    // - se si e' un palindromo
    //document.writeln('true')
    return true
  }

  //document.writeln('false')
  return false

}


if (is_palindrom(word)) {
  document.writeln(`${word} is a palindrom`)
} else {
  document.writeln(`${word} is not a palindrom`)
}



/* 
Pari e Dispari
- L’utente sceglie pari o dispari e 
- inserisce un numero da 1 a 5.
- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

- Sommiamo i due numeri

- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

- Dichiariamo chi ha vinto.





*/


// L’utente sceglie pari o dispari
const userChoice = 'pari' // prompt('type pari o dispari')
// inserisce un numero da 1 a 5.
const userNumber = 4 // Number(prompt('type a number')) // '4'
// Generiamo un numero random
const pcNumber = getRandomInteger(1, 5)

// Sommiamo i due numeri
const sum = userNumber + pcNumber

// Verifico se la somma % 2 non lascia rimanenza 
/* if(sum % 2 === 0){
  console.log('pari');
  
} else {
  'dispari'
} */
// - numero pari
// Altrimenti
// - il numero e' dispari



/* # Output */
// Se in numero e' pari e l'utente ha scelto pari (o se il numero e' dispari e l'usnte sceglie dispari)
if(is_even(sum) === userChoice){
  console.log('You Win');
  
} else {
  console.log('Pc wins');
  
}
// Se il numero e' pari e' l'utente sceglie pari
// - vince 
// Altrimenti 
// - perde








function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function is_even(numb) {
  if (numb % 2 === 0) {
    return 'pari';

  } 
  return 'dispari'
  
}