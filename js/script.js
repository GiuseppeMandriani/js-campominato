/**
 * Descrizione
- Il computer deve generare 16 numeri casuali da 1 a 100 (bombe).
- In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, se il numero è presente nella lista dei numeri generati la partita termina altrimenti continua chiedendo all’utente un altro numero.
- La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
- Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
 * 
 */

// FASE 1 Setup e creazione bombe

var numeroMax = 100;                            // Numeri giocabili

var numeroBombe = 16;                           // Numero bombe da generare

var possibilità = numeroMax - numeroBombe;      // Possibilità corrette (max - min)

var listaBombe = [];                            // Numeri vietati

var numeriConsentiti = [];                      // Numeri corretti inseriti dall'utente

var utente = 0;                                 // Scelta utente      


// FASE 2 Generazione bombe ( 16 numeri random univoci)
