const cards = document.querySelectorAll(".card");  //  we are trying to select the "class card"  
console.log(cards);                                // from the "div" in the "HTML Document"

//variables
var isFlipped = false;
var firstCard;
var secondCard;

cards.forEach((card) => card.addEventListener("click", flip)); // to add a "function" of flipping the card clicked
//                                                             // "forEach loop" is used to store all "div elements"
//                                                             // that contain the "class card" and store it in the
//                                                             // "object" called "cards" from the "HTML document"

function flip() {
  //   console.log("Card flipped");
  // console.log(this);
  this.classList.add("flip");                   // this will add the "class flip" to the "querySelected variable"
  if (!isFlipped) {                             // the "flipping action" is being shown by the "CSS" display for 
    isFlipped = true;                           // the "card" selected as it changes the appearance of that "card"
    firstCard = this;                           // in the browser as a new "class flip" with different properties 
  } else {                                      // gets added to it and then the appearance of that "card" changes 
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);

    checkIt();
  }
}

function checkIt() {
  //   console.log("Checking...");
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    fail();
  }
}

function success() {
  //   console.log("Success");
  firstCard.removeEventListener("click", flip);            // "removeEventListener" is added to remove an added  
  secondCard.removeEventListener("click", flip);           // event or to delete a certian information from the  
  reset();                                                 // JavaScript file
}

function fail() {
  //   console.log("Failed");
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 500);
}

function reset() {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

//TODO: shuffle

(function shuffle() {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
})();
 