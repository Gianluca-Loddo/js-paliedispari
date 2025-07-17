//Chiedere all’utente di inserire una parola
let parolaUtente = prompt("Inserisci una parola").toLowerCase(); // con toLowerCase() convertiamo la parola in minuscolo per uniformità


//Creare una funzione per capire se la parola inserita è palindroma
function parola_palindroma(parola_Utente) {
    //ciclo for per analizzare la parola al contrario 
    let parolaInvertita = ""
    for (let i = parola_Utente.length - 1; i >= 0; i--) {
        parolaInvertita += parola_Utente[i]
        //👉 parolaInvertita += parola_Utente[i] → aggiunge un carattere alla volta alla nuova stringa
        // si può anche scrivere così: parolaInvertita = parolaInvertita + parola_Utente[i]
        // 🔹 += È un operatore di assegnazione abbreviato. x += y è uguale a x = x + y
    }

    //condizione per confronto
    if (parolaInvertita === parola_Utente) {
        console.log("La tua parola E' palindroma")
        return true
    } else {
        console.log("La tua parola NON è palindroma")
        return false
    }

}
//richiama la funzione 
parola_palindroma(parolaUtente)




// Separatore visivo in console
console.log("-----------");



// ===== PARI O DISPARI =====


// 1. Chiedi all'utente se vuole pari o dispari
let sceltaUtente = prompt("Scegli: pari o dispari");

// 2. Converto la scelta in minuscolo per evitare problemi se l'utente scrive "PARI" o "Pari"
sceltaUtente = sceltaUtente.toLowerCase();

// 3. Chiedi all'utente un numero da 1 a 5 (come stringa)
let numeroInserito = prompt("Inserisci un numero da 1 a 5");

// 4. Converto quel numero in numero vero (da stringa a numero)
let numeroUtente = Number(numeroInserito);

// 5. Creo una funzione per generare un numero casuale da 1 a 5
function generaNumeroPc() {
  let numeroCasuale = Math.random();      // numero casuale tra 0 e 0.999...
  numeroCasuale = numeroCasuale * 5;      // ora tra 0 e 4.999...
  numeroCasuale = Math.floor(numeroCasuale); // togliamo la parte decimale → 0 a 4
  numeroCasuale = numeroCasuale + 1;      // diventa da 1 a 5
  return numeroCasuale;
}

// 6. Uso la funzione per ottenere il numero del computer
let numeroPc = generaNumeroPc();

// 7. Stampo i valori scelti
console.log("Hai scelto:", sceltaUtente);
console.log("Il tuo numero:", numeroUtente);
console.log("Numero del computer:", numeroPc);

// 8. Sommo i due numeri
let somma = numeroUtente + numeroPc;
console.log("Somma dei numeri:", somma);

// 9. Funzione per controllare se un numero è pari
function èPari(numero) {
  let resto = numero % 2; // calcolo il resto della divisione per 2
  if (resto === 0) {
    return true; // è pari
  } else {
    return false; // è dispari
  }
}

// 10. Usiamo la funzione per sapere se la somma è pari o dispari
let sommaÈPari = èPari(somma); // true se pari, false se dispari

// 11. Verifica se l'utente ha vinto
let utenteHaVinto = false;  // cioè: per ora, di default, l'utente ha perso, Poi, se le condizioni lo permettono 
                            // (cioè: se la somma è pari e l’utente ha scelto "pari", oppure somma dispari e ha scelto "dispari"), 
                            // la variabile viene aggiornata:

if (sommaÈPari === true) {
  if (sceltaUtente === "pari") {
    utenteHaVinto = true;
  }
}

if (sommaÈPari === false) {
  if (sceltaUtente === "dispari") {
    utenteHaVinto = true;
  }
}

/*
SI PUÒ ANCHE SCRIVERE COSÌ:

if (sommaÈPari === true && sceltaUtente === "pari") {
  utenteHaVinto = true;
}

if (sommaÈPari === false && sceltaUtente === "dispari") {
  utenteHaVinto = true;
}

*/ 

// 12. Stampiamo il risultato finale
if (utenteHaVinto === true) {
  console.log("🎉 Complimenti, hai vinto!");
} else {
  console.log("😢 Mi dispiace, hai perso!");
}
