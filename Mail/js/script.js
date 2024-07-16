/*
Mail
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo. 

step
1. creare una lista di utenti che possono accedere 
2. chiedere all'utente la sua mail con un prompt o con un form (ho scelto form)
3. verificare che le credenziali dell'utente siano tra quelle della lista
    se sì -->
      allora mostrare messaggio di avvenuto accesso
    se no -->
       negare l'accesso
*/

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

