/*
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);
*/
//var cards = ["queen", "queen", "king", "king"];
var cards = [
{
  rank: 'queen',
  suit: 'hearts',
  cardImage: "images/queen-of-hearts.png"
},
{
  rank: 'queen',
  suit: 'diamonds',
  cardImage: "images/queen-of-diamonds.png"
},
{
  rank: 'king',
  suit: 'hearts',
  cardImage: "images/king-of-hearts.png"
},
{
  rank: 'king',
  suit: 'diamonds',
  cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

var checkForMatch = function (){
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
    alert("You found a match!");
} else {
    console.log("Sorry, try again!");
    alert("Sorry, try again.");
}
};

//checkForMatch (0,2);
/*  if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]){
      alert("You found a match!");
    }
    else {
      alert("Sorry, try again.");
    }
}*/

var flipCard = function (cardId){
  /*var cardOne = cards[0];
  cardsInPlay.push(cardOne);
  console.log("User flipped " + cardOne);
  var cardTwo = cards[2];
  cardsInPlay.push(cardTwo);
  console.log("User flipped " + cardTwo);
  */
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
};

flipCard (0);
flipCard (2);
checkForMatch ();
