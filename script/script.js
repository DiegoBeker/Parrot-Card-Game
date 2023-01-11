const lista = document.querySelector('.deck');
let gifs = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot'];
let qtdCartas = prompt('cartas');
let baralho = [];

numeroCartas();
alert(qtdCartas);
console.log(gifs);
montarDeck();
console.log(baralho);
baralho.sort(comparador);
console.log(baralho);
inserirDeckHtml();

function numeroCartas() {
    if(qtdCartas % 2 !== 0 || qtdCartas < 4 || qtdCartas > 14)
        alert('numero invalido');
    while (qtdCartas % 2 !== 0 || qtdCartas < 4 || qtdCartas > 14) {
        qtdCartas = prompt('cartas');
        if(qtdCartas % 2 !== 0 || qtdCartas < 4 || qtdCartas > 14)
        alert('numero invalido');
    }
}
function montarDeck() {
    for (let i = 0; i < qtdCartas / 2; i++) {
        baralho.push(gifs[i]);
        baralho.push(gifs[i]);
    }
}

function inserirDeckHtml() {
    for (let i = 0; i < baralho.length; i++) {
        lista.innerHTML += `<div class="card">
                            <div class="front-face face">
                                <img src="./images/back.png" alt="Parrot">
                            </div>
                            <div class="back-face face">
                                <img src="./images/${baralho[i]}.gif" alt="${baralho[i]}">
                            </div>
                        </div>`;
    }
}

function comparador() {
    return Math.random() - 0.5;
}
