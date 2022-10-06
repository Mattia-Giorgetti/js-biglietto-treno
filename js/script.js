
let nomeUtente = prompt('Ciao! Inserisci il tuo Nome');
let myTitolo = document.getElementById('titolo');
myTitolo.innerHTML = `Benvenuto ${nomeUtente}!`;

let kmDaPercorrere = parseFloat(prompt('Quanti Km hai intenzione di percorrere?')).toFixed(2);
let kmDaPercorrereNumb = parseFloat(kmDaPercorrere);

if(isNaN(kmDaPercorrere)){
    alert('Puoi inserire solo numeri! Ricarica la pagina e riprova')
}

let etaPasseggero = parseInt(prompt('Quanti anni hai?'));

let tariffaKm = 0.21;

let prezzoKmTot = parseFloat(kmDaPercorrereNumb * tariffaKm).toFixed(2);
let prezzoKmTotNumb = parseFloat(prezzoKmTot);


if(etaPasseggero < 18){
    let prezzoFinale = parseFloat(prezzoKmTotNumb * 80 / 100).toFixed(2); 
    document.getElementById('my_paragraph').innerHTML = `Importo Precedente: ${prezzoKmTotNumb}€`;
    document.getElementById('my_secretparagraph').innerHTML = `Importo bonus Under18: <span class="mySpan">${prezzoFinale}€</span>`;
} else if(etaPasseggero > 65){
    let prezzoFinale = parseFloat(prezzoKmTotNumb * 60 / 100).toFixed(2);
    document.getElementById('my_paragraph').innerHTML = `Importo Precedente: ${prezzoKmTotNumb}€`;
    document.getElementById('my_secretparagraph').innerHTML = `Importo bonus Over 65: <span class="mySpan">${prezzoFinale}€</span>`;
} else {
    let prezzoFinale = parseFloat(prezzoKmTotNumb).toFixed(2);
    document.getElementById('my_secretparagraph').innerHTML = `Importo Totale: <span class="mySpan">${prezzoFinale}€</span>`;
}


