let suit = ['clubs', 'spades', 'diamonds', 'hearts'];
let highCards = ['jack', 'queen', 'king', 'ace'];
let cards = [];


for (let i = 2; i <= 10; i++) {
  for (let j = 0; j < suit.length; j++) {
    cardInfo = `<div class="card__info">${i}<img src="images/${suit[j]}.svg" alt="${suit[j]}"></div>`;

    cards.push(`<div class="card">
      ${cardInfo}
      ${cardInfo}
    </div>`);
  }
}


for (let a = 0; a < highCards.length; a++) {
  for (let b = 0; b < suit.length; b++) {

    if (highCards.includes(highCards[a])) {
      ranksLetter = highCards[a][0].toLocaleUpperCase();
    } else if (highCards[a] === 'ace') {
      ranksLetter = 'a';
    } else {
      ranksLetter = highCards[a];
    }

    // ranksLetter = (highCards.includes(highCards[a])) ? highCards[a][0].toUpperCase() : (highCards[a] === 'ace') ? 'A' : highCards[a];

    ranksInfo = `<div class="card__info">${ranksLetter}<img src="images/${suit[b]}.svg" alt="${suit[b]}"></div>`;


    if (highCards[a] === 'ace') {
      ranksMidPicture = suit[b];
    } else {
      ranksMidPicture = highCards[a];
    }

    // ranksMidPicture = (highCards[a] === 'ace') ? suit[b] : highCards[a]

    
    cards.push(`<div class="card high--card">
      ${ranksInfo}
        <img class="person" src="images/${ranksMidPicture}.svg" alt="${suit[b]}"> 
      ${ranksInfo}
    </div>`);
  }
}

document.write(`<div class="wraper">${cards.join('')}</div>`);