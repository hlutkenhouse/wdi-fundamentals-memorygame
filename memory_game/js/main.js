/*
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);
*/

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);
//if statement that checks to see if the length of the cardsInPlay array is 2
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]){
    alert("You found a match!");
  }
  else {
    alert("Sorry, try again.");
  }
