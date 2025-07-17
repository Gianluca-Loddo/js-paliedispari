// ===== PALINDROMA =====

// Chiediamo all'utente di inserire una parola
let parola = prompt("Inserisci una parola:").toLowerCase(); // con toLowerCase() convertiamo la parola in minuscolo per uniformità

// Funzione per controllare se la parola è palindroma
function Palindroma(str) {
  // Inizializziamo una variabile per contenere la parola al contrario
  let parolaInvertita = "";

  // Scorriamo la stringa al contrario e costruiamo la parola invertita
  for (let i = str.length - 1; i >= 0; i--) {
    parolaInvertita += str[i];
    //👉 parolaInvertita += str[i] → aggiunge un carattere alla volta alla nuova stringa
    // si può anche scrivere così: parolaInvertita = parolaInvertita + str[i]
    // 🔹 += È un operatore di assegnazione abbreviato. x += y è uguale a x = x + y
  }

  // Confrontiamo la parola originale con quella invertita
  return str === parolaInvertita;
  //👉 Confronta la parola originale con quella invertita
  //📌 Se sono uguali, restituisce true
  //📌 Se sono diverse, restituisce false
}

// Verifichiamo se la parola è palindroma e stampiamo il risultato
if (Palindroma(parola)) {
  console.log("✅ La parola è palindroma.");
} else {
  console.log("❌ La parola NON è palindroma.");
}



// Separatore visivo in console
console.log("-----------");









// ===== PARI O DISPARI =====

// Chiediamo all'utente se vuole pari o dispari
let sceltaUtente = prompt("Scegli: pari o dispari").toLowerCase(); // Con toLowerCase() convertiamo la scelta in minuscolo per uniformità

// Chiediamo all'utente un numero da 1 a 5
let numeroUtente = Number(prompt("Inserisci un numero da 1 a 5")); // Usiamo Number(...) per convertire il testo in numero (altrimenti sarebbe una stringa, tipo "3" invece di 3).

// Funzione che genera un numero random da 1 a 5
function generaNumeroPc() {
  return Math.floor(Math.random() * 5) + 1;
}

// Usiamo la funzione per ottenere il numero del computer
let numeroPc = generaNumeroPc();

// Stampiamo i valori scelti e generati
console.log("Hai scelto:", sceltaUtente);
console.log("Il tuo numero:", numeroUtente);
console.log("Numero del computer:", numeroPc);

// Sommiamo i due numeri
let somma = numeroUtente + numeroPc;
console.log("Somma:", somma);

// Funzione per controllare se un numero è pari
function èPari(num) {
  return num % 2 === 0;
  //👉 Restituisce true se il numero è pari (divisibile per 2 senza resto)
  //📌 Restituisce false se il numero è dispari (ha un resto quando diviso per 2)
  //🔹 % è l'operatore modulo, che restituisce il resto della divisione
  //📌 Ad esempio: 5 % 2 restituisce 1 (perché 5 diviso 2 fa 2 con resto 1)
  //📌 Mentre 4 % 2 restituisce 0 (perché 4 diviso 2 fa 2 senza resto
  //📌 Quindi, se il resto della divisione per 2 è 0, il numero è pari)
  //📌 Se il resto è 1, il numero è dispari
  //📌 Quindi, se il numero è pari, la funzione restituisce true, altrimenti false
}


/* si può anche scrivere così:
function èPari(num) { 
  if (num % 2 === 0) {
    return true; // Il numero è pari
  } else {
    return false; // Il numero è dispari
  }
}
*/ 



// Verifichiamo se la somma è pari o dispari
let risultatoPari = èPari(somma);
// Usa la funzione èPari() per capire se la somma è pari o dispari.
// Il risultato è un valore booleano (true o false), salvato nella variabile risultatoPari.





// Controlliamo chi ha vinto

/* 
NOTA SULL'UTILIZZO DEL PUNTO ESCLAMATIVO:

Il punto esclamativo ! in JavaScript è l'operatore logico di negazione.
Quando lo usiamo davanti a una condizione, inverte il suo valore booleano.
Ad esempio:
- Se x è true, !x sarà false.
- Se x è false, !x sarà true.

*/




if (
  (risultatoPari && sceltaUtente === "pari") || (!risultatoPari && sceltaUtente === "dispari")

/*
NOTA SULLA LOGICA DELLA CONDIZIONE:
👉 Controlliamo se l'utente ha vinto o perso
JavaScript ha già calcolato risultatoPari e sa se vale true oppure false.
Quando arriva all’if, controlla:
👉 Se risultatoPari === false, allora tutto l’if viene ignorato (perché false && qualsiasiCosa è sempre false).
👉 Se risultatoPari === true, allora va avanti a controllare se anche sceltaUtente === "pari".
⚠️ Basta che una delle due condizioni fallisca perché l’if non venga eseguito.
🔹 Se risultatoPari non è true, allora salta tutto e ti fa perdere. ✅
*/


//👉 Controlla se il risultato della somma è pari e l'utente ha scelto "pari"
// oppure se il risultato della somma è dispari e l'utente ha scelto "dispari"
//📌 Se una di queste condizioni è vera, l'utente ha vinto
// altrimenti ha perso
//📌 risultatoPari è true se la somma è pari, false se è dispari
//📌 Se l'utente ha scelto "pari" e risultatoPari è true, ha vinto
//📌 Se l'utente ha scelto "dispari" e risultatoPari è false, ha vinto
//📌 In entrambi i casi, l'utente ha vinto

) {
  console.log("🎉 Hai vinto!");
} else {
  console.log("😢 Hai perso!");
}


/* si può anche scrivere così:
if (risultatoPari === true && sceltaUtente === "pari") {
  // Somma è pari e utente ha scelto pari
  console.log("🎉 Hai vinto! (Somma pari, scelta pari)");
} else if (risultatoPari === false && sceltaUtente === "dispari") {
  // Somma è dispari e utente ha scelto dispari
  console.log("🎉 Hai vinto! (Somma dispari, scelta dispari)");
} else {
  // In tutti gli altri casi, l'utente ha perso
  console.log("😢 Hai perso!");
}
*/




