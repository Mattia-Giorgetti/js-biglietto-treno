
let nomeUtente = prompt('Ciao! Inserisci il tuo Nome');
let myTitolo = document.getElementById('titolo');
myTitolo.innerHTML = `Benvenuto ${nomeUtente}!`;

let kmDaPercorrere = parseFloat(prompt('Quanti Km hai intenzione di percorrere?')).toFixed(2);

if(isNaN(kmDaPercorrere)){
    alert('Puoi inserire solo numeri! Ricarica la pagina e riprova')
}
let etaPasseggero = parseInt(prompt('Quanti anni hai?'));
// console.log(kmDaPercorrere);
// console.log(etaPasseggero);

let kmDaPercorrereNumb = parseFloat(kmDaPercorrere);
// console.log(kmDaPercorrereNumb);

let tariffaKm = 0.21;
// console.log(tariffaKm);

let prezzoKmTot = parseFloat(kmDaPercorrereNumb * tariffaKm).toFixed(2);

let prezzoKmTotNumb = parseFloat(prezzoKmTot);
console.log(prezzoKmTotNumb);

if(etaPasseggero < 18){
    let prezzoFinale = parseFloat(prezzoKmTotNumb * 80 / 100).toFixed(2);
    // console.log(prezzoFinale);
    document.getElementById('my_paragraph').innerHTML = `Importo Effettivo: ${prezzoKmTotNumb}€`;
    document.getElementById('my_secretparagraph').innerHTML = `Importo bonus minori: ${prezzoFinale}€`;
} else if(etaPasseggero > 65){
    let prezzoFinale = parseFloat(prezzoKmTotNumb * 60 / 100).toFixed(2);
    // console.log(prezzoFinale);
    document.getElementById('my_paragraph').innerHTML = `Importo Effettivo: ${prezzoKmTotNumb}€`;
    document.getElementById('my_secretparagraph').innerHTML = `Importo bonus Over 65: ${prezzoFinale}€`;
} else {
    let prezzoFinale = parseFloat(prezzoKmTotNumb).toFixed(2);
    document.getElementById('my_paragraph').innerHTML = `Importo Totale: ${prezzoFinale}€`;
    // console.log(parseFloat(prezzoKmTotNumb).toFixed(2));
}


