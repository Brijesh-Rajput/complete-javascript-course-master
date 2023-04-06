'use strict';

//Make a flowchart for big project. break it into sub-problems. then solve sub-problems and merge it. 
// El means Element

// Selecting Elements:-
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); //NOTE:- we're passing the name of the id, That's why we have not written # before the id-name.
// getElementById() is supposed to be little bit faster than querySelector(). Working of both is same.
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing; //imp: Like in C,C++ 

// starting conditions:-
const init = function(){
    scores = [0, 0];
    currentScore = 0; 
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0; 
    score1El.textContent = 0; //NOTE:- here we're (textContent value)specifying Numbers NOT strings. BUT, Js will then automatically converted them into string to actually display them on the page.
    current0El.textContent = 0;
    current1El.textContent = 0;
    
    diceEl.classList.add('hidden');
    // As we don't know who was the winner in the previous game. That's why we remove the player--winner class from both the player. That's not problem at all. We already know that only one of the below two elements will have the "player--winner" class but we can still js to remove the class even if it's not there. Js will do that.
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active'); //even if classes is already there, ===> //imp: check this. is again class will add or only one time class will add.
    player1El.classList.remove('player--active');    
};
init();

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0; 
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    // imp: toggle method will add the class if not there, &  if it is there then it will remove the class from there.
};

// Rolling dice functionality
btnRoll.addEventListener('click', function(){ //we're writing handler function inside this b'coz we will not reuse this  function.
    if(playing){
        // 1. Generating a random dice roll
        const dice = Math.trunc(Math.random()*6)+1;
        // console.log(dice);

        // 2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`; //imp:

        // 3. Check for rolled 1: if true, switch to next player else add diceNumber to the current score.
        if(dice !== 1){
            // Add dice to the current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore; //imp: Nice trick.
            // current0El.textContent = currentScore; //change later
        }else{
            // Switch to the next player
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function(){
    if(playing){
        // 1. Add curent score to the active player's score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // 2. Check if player's score is >= 100
        if(scores[activePlayer] >= 100){
            // if yes then Finish the game
            console.log(activePlayer);
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }else{
            // else, Switch to the next player
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click', init); //NOTE:- Don't call the init function!!!!!
/* or
btnNew.addEventListener('click', function(){
    init();
});
*/

console.log("Hello checking How the script works. ig, script runs 1 time and then only eventlistner will run mulitiple times whenever evnt happens!!  \n  I guess i'm right..................");
