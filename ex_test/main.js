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
let sceltaUtente = prompt("Scegli: pari o dispari").toLowerCase();

// Chiediamo all'utente un numero da 1 a 5
let numeroUtente = Number(prompt("Inserisci un numero da 1 a 5"));

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
}

// Verifichiamo se la somma è pari o dispari
let risultatoPari = èPari(somma);

// Controlliamo chi ha vinto
if (
  (risultatoPari && sceltaUtente === "pari") ||
  (!risultatoPari && sceltaUtente === "dispari")
) {
  console.log("🎉 Hai vinto!");
} else {
  console.log("😢 Hai perso!");
}
