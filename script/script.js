const list = document.querySelector('.deck');
let gifs = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot'];
let cards = prompt('Numero de cartas par Min = 4 Max = 14');
let deck = [];

cardsNumbers();
buildDeck();
insertDeckOnHtml();

function cardsNumbers() {
    if(cards % 2 !== 0 || cards < 4 || cards > 14)
        alert('Número inválido');
    while (cards % 2 !== 0 || cards < 4 || cards > 14) {
        cards = prompt('cartas');
        if(cards % 2 !== 0 || cards < 4 || cards > 14)
        alert('Número inválido');
    }
}
function buildDeck() {
    for (let i = 0; i < cards / 2; i++) {
        deck.push(gifs[i]);
        deck.push(gifs[i]);
    }
    deck.sort(comparator);
    deck.sort(comparator);
    deck.sort(comparator);
    deck.sort(comparator);
}

function insertDeckOnHtml() {
    for (let i = 0; i < deck.length; i++) {
        list.innerHTML += `<div class="card" onclick="select(this)">
                            <div class="front-face face">
                                <img src="./images/back.png" alt="Parrot">
                            </div>
                            <div class="back-face face">
                                <img src="./images/${deck[i]}.gif" alt="${deck[i]}">
                            </div>
                        </div>`;
    }
}

function comparator() {
    return Math.random() - 0.5;
}

function select(card){
    card.querySelector('.front-face').classList.toggle('open');
    card.querySelector('.back-face').classList.toggle('open');
}
