/**
 * Descrizione
- Il computer deve generare 16 numeri casuali da 1 a 100 (bombe).
- In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, se il numero è presente nella lista dei numeri generati la partita termina altrimenti continua chiedendo all’utente un altro numero.
- La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
- Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

* BONUS

    All’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
    con difficoltà 0 => tra 1 e 100
    con difficoltà 1 => tra 1 e 80
    con difficoltà 2 => tra 1 e 50 

 */

// FASE 1 Setup e creazione bombe

var numeroMax;                                  // Numeri giocabili

var numeroBombe = 16;                            // Numero bombe da generare

var possibilità;                                // Possibilità corrette (max - min)

var listaBombe = [];                            // Numeri vietati

var numeriConsentiti = [];                      // Numeri corretti inseriti dall'utente

var utente = 0;                                 // Scelta utente      



// BONUS SCELTA LIVELLO DI DIFFICOLTA'

var livello = parseInt(prompt('Scegli il livello di difficolta da 0 a 2: \n0: Facile \n1: Medio \n2: Difficile ').trim());
//Validazione
while((isNaN(livello)) || livello < 0 || livello > 2){
    livello = parseInt(prompt('Scegli livello: \n0 \n1 \n2').trim());
}

switch (livello){
    case 0:
        numeroMax = 100;
        break;
    case 1:
        numeroMax = 80;
        break;
    case 2:
        numeroMax = 50
}

possibilità = numeroMax - numeroBombe;

// FASE 2 Generazione bombe ( 16 numeri random univoci)

while(listaBombe.length < numeroBombe) {
    var bomba = numeroRandom(numeroMax);

    if(! listaBombe.includes(bomba)){
        listaBombe.push(bomba);
    }
}

console.log('Lista Bombe: ', listaBombe);



// FASE 3 GAME MAIN LOOP


while((numeriConsentiti.length < possibilità)&& (! listaBombe.includes(utente))){
    // Scelta Utente 
    utente = parseInt(prompt('Inserisci un numero da 1 a ' + numeroMax + '\nTentativi: ' + numeriConsentiti.length + ' di ' + possibilità));

    // Validazione
    while (isNaN(utente) || utente < 1 || utente > numeroMax){
    utente = parseInt(prompt('Valore non valido, inserisci un numero da 1 a ' + numeroMax));
    }
    console.log(utente);

    /**Verifiche
     * 1 Controllo se numero è nella lista bombe
     * 2 Controllo se numero già presente in lista
     */

    if( listaBombe.includes(utente)){
        alert('Hai perso, hai provato con successo ' + numeriConsentiti.length + ' volte prima di trovare la Bomba');
    } else if(numeriConsentiti.includes(utente)){
        alert('Numero già inserito, inserire un altro numero')
    } else if(!numeriConsentiti.includes(utente)){
        numeriConsentiti.push(utente);
    }

    // Controllo raggiungimento delle Possibilità
    if(numeriConsentiti.length === possibilità){
        alert('Hai vinto');
    }
}


// FASE 4 END DISPLAY
console.log('-- GAME OVER --');
console.log('Lista numeri validi inseriti: ', numeriConsentiti);
console.log('Tentativi riusciti: ',numeriConsentiti.length);























/**
 * UTILITIES/FUNCTIONS
 **/

/**
 * 
 * @param {number} max // Numero massimo
 * @returns // Numero random
 */
function numeroRandom(max) {
    return (Math.floor(Math.random() * max )+ 1);

}