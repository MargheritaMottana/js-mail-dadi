/*
Mail
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo.

step
1. creare una lista di utenti che possono accedere
2. chiedere all'utente la sua mail con un prompt o con un form
3. verificare che le credenziali dell'utente siano tra quelle della lista
    se sì -->
      allora mostrare messaggio di avvenuto accesso
    se no -->
       negare l'accesso
*/



// VERSIONE PROMPT

// prompt per chiedere all'utente la sua mail
const mailUtente = prompt('Inserisci la tua mail')
console.log('mailUtente', mailUtente, typeof mailUtente)

// creare lista utenti
const utenti = [
    'margherita@gmail.com',
    'maria@gmail.com',
    'raffaella@gmail.com'
];
console.log('utenti', utenti, typeof utenti)
console.log('utenti.length', utenti.length, typeof utenti.length)

// do per scontato che l'utente non possa entrare, creo un flag di verifica
let found = false;

// devo iniziare un ciclo definito che controlli dentro l'array

// inizializzazione del contatore (inizio ad estrarre dal primo elemento dell'indice);
// condizione di permanenza;
// modalità di avanzamento

for (let i = 0; i < utenti.length; i++) {
    console.log('utenti[i]', utenti[i], typeof utenti[i]);

    // se l'array è uguale all'input dell'utente
    if (utenti[i] == mailUtente) {
        console.log('BentornatƏ ' + mailUtente);
        // fai accedere all'account
        // flag di verifica, l'ho trovato e può entrare
        found = true;
    }
};

// stampo il risultato di found (fuori dal ciclo in modo tale da avere un solo messaggio)
console.log(found);

// aler per comunicare il risultato all'utente
if (found) {
    alert('BentornatƏ ' + mailUtente);
}
else {
    alert('Registrati per accedere');
};

/*

// VERSIONE INPUT

// creare lista utenti
const utentiRegistrati = ['margherita@gmail.com', 'maria@gmail.com', 'raffaella@gmail.com']
console.log('utentiRegistrati', utentiRegistrati, typeof utentiRegistrati)

// Dichiarare il form
const myForm = document.querySelector('form')

//ricevere informazioni dal submit del form
myForm.addEventListener('submit', function (event) {

    // prevengo il comportamento
    event.preventDefault();

    // dichiaro il contenuto dell'input
    const mailInput = document.getElementById('mailInput')

    // prendo e dichiaro il valore dell'input
    const mail = mailInput.value;
    console.log('mail', mail, typeof mail);

    /*

    // VERSIONE INCLUDES()

    // Se il contenuto dell'input è presente tra le mail registrate
    if (utentiRegistrati.includes(mail)) {

        // fai accedere all'account
        alert('BentornatƏ ' + mail)
        console.log('BentornatƏ ' + mail)
    }

    // altrimenti
    else {

        // chiedi all'utente di registrarsi
        alert('Per poter accedere devi creare un account')
        console.log('Per poter accedere devi creare un account')
    };


});

*/