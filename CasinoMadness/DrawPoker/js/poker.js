"use strict";

/*

   Author: Nick Jocius
   Date:  8/27/2020
   Revision:
   
   Filename: poker.js

*/

window.addEventListener("load", playDrawPoker);

function playDrawPoker() {
  //The Deal button deals five cards from the poker deck into the player’s hand.
  let dealButton = document.getElementById("dealB");
  //The Draw button replaces all selected cards in the player’s hand with new cards from the deck.
  let drawButton = document.getElementById("drawB");
  //The Stand button signals to the dealer that the player wants to keep all the cards in the dealt hand.
  let standButton = document.getElementById("standB");
  //The Reset button restarts the game with a fresh pot, resetting the bank value to $500.
  let resetButton = document.getElementById("resetB");
  //The Save button saves current bank in localeStorage.
  let saveButton = document.getElementById("saveBtn");
  //The Save button saves current bank in localeStorage.
  let loadButton = document.getElementById("loadBtn");
  //Displays value of current hand
  let handValueText = document.getElementById("handValue");
  //The Bet selection list places the bet before the next hand is dealt.
  let betSelection = document.getElementById("bet");
  //Displays value of players bank
  let bankBox = document.getElementById("bank");
  //reference to all images belonging to the cardimg class
  let cardImages = document.querySelectorAll("img.cardImg");

  //Set initial values of the pokerGame object
  pokerGame.currentBank = pokerGame.defaultBank;
  pokerGame.currentBet = 25;

  //Create a new deck of cards and shuffle it
  var myDeck = new pokerDeck();
  myDeck.shuffle();

  //Create a new deck of cards and shuffle it
  let myHand = new pokerHand(5);

  //Display currentBank property in bankBox element
  bankBox.value = pokerGame.currentBank;

  //Update currentBet every time the user changes option in bet selection list
  betSelection.onchange = function (e) {
    pokerGame.currentBet = parseInt(
      e.target.options[e.target.selectedIndex].value
    );
  };

  //Save current bank in local storage
  saveButton.addEventListener("click", function () {
    let userBank = bankBox.value;
    console.log(userBank);
    localStorage.setItem("bank", userBank);
  });

  //Load current bank in local storage
  loadButton.addEventListener("click", function () {
    //Check localeStorage for save bank
    let userStart = localStorage.getItem("bank");
    pokerGame.loadUser(userStart);
    bankBox.value = pokerGame.currentBank;
    enableObj(dealButton);
    enableObj(betSelection);
    disableObj(drawButton);
    disableObj(standButton);

    resetCards();
  });

  //Restart the game when the REset button is clicked
  resetButton.addEventListener("click", function () {
    pokerGame.currentBank = 1000;
    localStorage.setItem("bank", pokerGame.defaultBank);
    bankBox.value = pokerGame.currentBank;
    enableObj(dealButton);
    enableObj(betSelection);
    disableObj(drawButton);
    disableObj(standButton);
    handValueText.textContent = "";

    resetCards();
  });

  //Enable the Draw and Stand buttons ofter the deal
  dealButton.addEventListener("click", function () {
    if (pokerGame.currentBank >= pokerGame.currentBet) {
      handValueText.textContent = "";
      disableObj(dealButton);
      disableObj(betSelection);
      enableObj(drawButton);
      enableObj(standButton);
      bankBox.value = pokerGame.placeBet();

      //Deal cards into the poker hand after confirming
      //there are at least 10 cards in the deck
      if (myDeck.cards.length < 10) {
        myDeck = new pokerDeck();
        myDeck.shuffle();
      } //end if

      myDeck.dealTo(myHand);

      //Display the card images on the table
      for (var i = 0; i < cardImages.length; i++) {
        cardImages[i].src = myHand.cards[i].cardImage();

        //Event handler for each card image
        cardImages[i].index = i;
        cardImages[i].onclick = function (e) {
          if (e.target.discard !== true) {
            e.target.discard = true;
            e.target.src = "images/cardback.png";
          } else {
            e.target.discard = false;
            e.target.src = myHand.cards[e.target.index].cardImage();
          } //end if
        };
      } //end for
    } else {
      alert("Reduce the size of your bet");
    } //end else

    //Check for bankrupt
    if (bankBox.value == 0) {
      jokerLaugh();
      disableObj(dealButton);
      disableObj(betSelection);
      disableObj(drawButton);
      disableObj(standButton);
    }

  }); //end eventListener

  //Enable the Deal and Bet options when the current hand ends
  drawButton.addEventListener("click", function () {
    enableObj(dealButton);
    enableObj(betSelection);
    disableObj(drawButton);
    disableObj(standButton);

    //Replace the cards selected for discarding
    for (var i = 0; i < cardImages.length; i++) {
      if (cardImages[i].discard) {
        myHand.cards[i].replaceFromDeck(myDeck);
        cardImages[i].src = myHand.cards[i].cardImage();
        cardImages[i].discard = false;
      } //end if

      cardImages[i].onclick = null;
    } //end for

    //Evaluate the hand drawn by user
    handValueText.textContent = myHand.handType();

    //Check what hand for audio
    harleyAudio(handValueText.textContent);

    //Pay of the final hand
    bankBox.value = pokerGame.payout(myHand.handOdds());

    //Check for bankrupt
    if (bankBox.value == 0) {
      jokerLaugh();
      disableObj(dealButton);
      disableObj(betSelection);
      disableObj(drawButton);
      disableObj(standButton);
    }

  }); //end eventListener

  standButton.addEventListener("click", function () {
    enableObj(dealButton);
    enableObj(betSelection);
    disableObj(drawButton);
    disableObj(standButton);

    //Evaluate the hand delt to the user
    handValueText.textContent = myHand.handType();
    //Check what hand for audio
    harleyAudio(handValueText.textContent);

    //Pay off the final hand
    bankBox.value = pokerGame.payout(myHand.handOdds());
    //Check for bankrupt
    if (bankBox.value == 0) {
      jokerLaugh();
      disableObj(dealButton);
      disableObj(betSelection);
      disableObj(drawButton);
      disableObj(standButton);
    }
  }); //end eventListener

  //The Deal, Draw, and Stand buttons and the Bet selection list will be turned on and off
  //depending on the state of the game. Both the Draw and Stand buttons are disabled before the deal
  //so that a player can only draw new cards or stand pat after a hand has been dealt.
  //The Deal button and Bet selection list are disabled while the current hand is in play so that a
  //new hand cannot be dealt and a bet cannot be placed until play on the current hand is completed.
  //Disable Poker Button
  function disableObj(obj) {
    obj.disabled = true;
    obj.style.opacity = 0.25;
  } //end disableObj function

  //Enable Poker Button
  function enableObj(obj) {
    obj.disabled = false;
    obj.style.opacity = 1;
  } //end enableObj function

  function resetCards() {
    //Replace the cards selected for discarding
    cardImages.forEach(function (image) {
      if (image.src != "images/trans.gif") {
        image.src = "images/trans.gif";
      } //end if
      image.onclick = null;
    }); //end for
  }

  //Plays audio of joker laughing when bankrupt
  function jokerLaugh() {
    let audio = new Audio("audio/jokerLaugh.mp3");
    audio.play();
  }

  //Takes in handvalue and plays different harley audio
  function harleyAudio(winningHand) {

    let thankyou = new Audio("audio/thankYou.mp3");
    let sure = new Audio("audio/sureokay.mp3");
    let what = new Audio("audio/whatdid.mp3");
    let yours = new Audio("audio/allyours.mp3");
    let welcome = new Audio("audio/welcome.mp3");
    let ownit = new Audio("audio/ownthat.mp3");

    switch (winningHand) {
      case "No Winner":
        what.play();
        break;
      case "Jacks or Better":
        sure.play();
        break;
      case "Two Pair":
        sure.play();
        break;
      case "Three of a Kind":
        thankyou.play();
        break;
      case "Straight":
        thankyou.play();
        break;
      case "Flush":
        welcome.play();
        break;
      case "Full House":
        yours.play();
        break;
      case "Four of a Kind":
        yours.play();
        break;
      case "Straight Flush":
        ownit.play();
        break;
      case "Royal Flush":
        ownit.play();
        break;
    }
  }

} //end playDrawPoker function
