//Chiedere all’utente di inserire una parola
let parolaUtente = prompt("Inserisci una parola").toLowerCase
//Creare una funzione per capire se la parola inserita è palindroma
function parola_palindroma(parolaUtente) {
    //ciclo for per analizzare la parola al contrario 
    let parolaInvertita = ""
    for (let i = parolaUtente.length - 1; i >= 0; i--) {
        parolaInvertita += parolaUtente[i]
    }
    //parolaInvertita += parola[i] → aggiunge un carattere alla volta alla nuova stringa.
    //condizione per confronto

    if (parolaInvertita === parolaUtente) {
        console.log("La tua parola E' palindroma")
        return true
    } else {
        console.log("La tua parola NON è palindroma")
        return false
    }

}
//richiam la funzione 
parola_palindroma(parolaUtente)