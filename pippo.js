console.log('Pippo-Pluto-Paperino')


//A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
//Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']


//ARRAY dei nomi
const nomi = ['pippo', 'PLUTO', 'Paperino']
console.log(nomi)

const nomiEsatti = []; // OGGETTO VUOTO


// uso il ciclo for per trasformare inizialmente tutto in minuscolo  e dopo dirgli di metterre la prima lettera in maiuscolo e il resto in minuscolo 

for (let i = 0; i < nomi.length; i++) {
    const nome = nomi[i].toLowerCase();  // trasforma tutti i nomi in minuscolo 
    const correctionName = nome.charAt(0).toUpperCase() + nome.slice(1);   //trasformo prima lettera del nome in maiuscolo e indico con slice il resto delle lettere della parola 
    nomiEsatti.push(correctionName);  // push dell'oggetto inizialmente vuoto di nomi esatti con la correzzione
}

console.log (nomiEsatti)  //evoco nomi esatti corretti
