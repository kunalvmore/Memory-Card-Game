const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard =false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard(){
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip');

    if(!hasFlippedCard){
        //First CLick
        hasFlippedCard = true;
        firstCard = this;

        return;
    }
//Second Click
secondCard =this;
lockBoard =true;

checkForMatch();        
    
}

function checkForMatch(){
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
 //do cards match?
    isMatch ? disableCards() : unflipCards();
       
        
}

function disableCards(){
    //it's match!!
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
            resetBoard();
}

function unflipCards(){
    //not a match!!
    setTimeout(() =>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    },1500);

    
}
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

cards.forEach(card => card.addEventListener('click', flipCard));