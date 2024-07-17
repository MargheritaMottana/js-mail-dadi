/* 

Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?

*/

// step 1
// dichiaro il numero random per giocatore
const numeroRandom1 = Math.floor(Math.random() * 6) + 1;
console.log('numeroRandom1', numeroRandom1, typeof numeroRandom1)

// step 2
// dichiaro il numero random per giocatore
const numeroRandom2 = Math.floor(Math.random() * 6) + 1;
console.log('numeroRandom2', numeroRandom2, typeof numeroRandom2)

// step 3
// stabilisco il vincitore
// se giocatore > pc = vincitore

if (numeroRandom1 > numeroRandom2) {
    alert('Hai vinto');
}
// se giocatore < pc = perdente
else if (numeroRandom1 < numeroRandom2) {
    alert('Hai perso, ritenta');
}
// se numeri uguali = pari
else {
    alert('Pareggio');
}