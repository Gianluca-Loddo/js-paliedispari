//Chiedere all’utente di inserire una parola
let parolaUtente = prompt("Inserisci una parola").toLowerCase(); // con toLowerCase() convertiamo la parola in minuscolo per uniformità
//Creare una funzione per capire se la parola inserita è palindroma
function parola_palindroma(parola_Utente) {
    //ciclo for per analizzare la parola al contrario 
    let parolaInvertita = ""
    for (let i = parola_Utente.length - 1; i >= 0; i--) {
        parolaInvertita += parola_Utente[i]
    }
    //parolaInvertita += parola[i] → aggiunge un carattere alla volta alla nuova stringa.
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