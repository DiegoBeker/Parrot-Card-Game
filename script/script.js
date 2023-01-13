const list = document.querySelector('.deck');
const gifs = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot'];
let cards = prompt('Numero de cartas par Min = 4 Max = 14');
let deck = [];
let move = [];
let moves = 0;

cardsNumber();
buildDeck();
insertDeckOnHtml();

function cardsNumber() {
    const condition = cards % 2 !== 0 || cards < 4 || cards > 14;
    if (condition)
        alert('Número inválido');
    while (condition) {
        cards = prompt('Numero de cartas par Min = 4 Max = 14');
        if (condition)
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

let checking = false;
function select(card) {
    if (!card.classList.contains('found') && checking == false) {
        move.push(card);
        card.querySelector('.front-face').classList.add('open');
        card.querySelector('.back-face').classList.add('open');
        moves++;
        if (move.length === 2) {
            checking = true;
            const img0 = move[0].querySelector('.back-face img').getAttribute('src');
            const img1 = move[1].querySelector('.back-face img').getAttribute('src');
            if (img0 == img1) {
                move[0].classList.add('found');
                move[1].classList.add('found');
                move = [];
                checking = false;
            } else {
                setTimeout(() => {
                    move[0].querySelector('.front-face').classList.remove('open');
                    move[0].querySelector('.back-face').classList.remove('open');
                    move[1].querySelector('.front-face').classList.remove('open');
                    move[1].querySelector('.back-face').classList.remove('open');
                    move = [];
                }, 1000);
                setTimeout(() => { checking = false; }, 1000);
            }
            endGameCheck();
        }
    }
}

function endGameCheck() {
    if (document.querySelectorAll('.found').length === Number(cards)) {
        alert(`Você ganhou em ${moves} jogadas! A duração do jogo foi de Y segundos!`);
        let restart = prompt('Deseja reiniciar a partida("sim" ou "não"');
        while (restart !== 'não') {
            if (restart === 'sim') {
                resetGame();
                cardsNumber();
                buildDeck();
                insertDeckOnHtml();
                break;
            } else {
                restart = prompt('Deseja reiniciar a partida("sim" ou "não"');
            }
        }
    }
}

function resetGame() {
    deck = [];
    move = [];
    moves = 0;
    list.innerHTML = "";
    cards = prompt('Numero de cartas par Min = 4 Max = 14');
}