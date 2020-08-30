"use strict";

/*
   Author: Nick Jocius
   Date:  8/27/2020
   Revision:

   Filename: cards.js


   Custom Object Classes
   
   pokerGame
      The pokerGame object contains properties and methods for the game
      of draw poker

   pokerDeck
      The pokerDeck object contains an array of poker cards and methods
      for shuffling and drawing cards from the deck.

   pokerHand
      The pokerHand object contains an array of poker cards drawn from a
      poker deck. The methods associated with the object include the ability 
      to calculate the value of the hand and to mark cards to be discarded,
      replaced with new cards from a poker deck.

   pokerCard
      The pokerCard object contains properties and methods associated with
      individual poker cards including the card rank, suit, and value.
   
	
*/

//Create PokerGame object
let pokerGame = {
  currentBank: null,
  currentBet: null,
  defaultBank: 1000,

  placeBet: function () {
    this.currentBank -= this.currentBet;
    return this.currentBank;
  },

  payout: function (odds) {
    this.currentBank += this.currentBet * odds;
    return this.currentBank;
  },

  loadUser: function (bank) {
    if (bank != null || bank != "0") {
      this.currentBank = Number(bank);
    } else {
      this.currentBank = this.defaultBank;
    }
    return this.currentBank;
  },
};

//Create constructor function for pokerCard object
function pokerCard(cardSuit, cardRank) {
  this.suit = cardSuit;
  this.ranks = cardRank;
  this.rankValue = null;
} //end pokerCard constructor

pokerCard.prototype.cardImage = function () {
  let suitAbbr = this.suit.substring(0, 1).toLowerCase();
  return `images/${suitAbbr}${this.rankValue}.png`;
};

//Method to replace a card with a one from the deck
pokerCard.prototype.replaceFromDeck = function (pokerDeck) {
  this.suit = pokerDeck.cards[0].suit;
  this.rank = pokerDeck.cards[0].rank;
  this.rankValue = pokerDeck.cards[0].rankValue;
  pokerDeck.cards.shift();
};

function pokerDeck() {
  this.cards = new Array(52);

  let suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
  let ranks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
    "Ace",
  ];

  let cardCount = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 13; j++) {
      this.cards[cardCount] = new pokerCard(suits[i], ranks[j]);
      this.cards[cardCount].rankValue = j + 2;
      cardCount++;
    }
  }

  //Method to randomly sort the deck
  this.shuffle = function () {
    this.cards.sort(function () {
      return 0.5 - Math.random();
    });
  };

  //Method to deal cards from the deck into a poker hand
  this.dealTo = function (pokerHand) {
    for (let i = 0; i < pokerHand.cards.length; i++) {
      pokerHand.cards[i] = this.cards.shift();
    }
  };
} //end pokerDeck constructor

//Constructor for pokerHand
function pokerHand(handLength) {
  this.cards = new Array(handLength);
} //end pokerHand Constructor

//Return the highest ranked card in the hand
pokerHand.prototype.highCard = function () {
  return Math.max.call(
    pokerHand,
    this.cards[0].rankValue,
    this.cards[1].rankValue,
    this.cards[2].rankValue,
    this.cards[3].rankValue,
    this.cards[4].rankValue
  );
};

//Test for the prescence of a flush
pokerHand.prototype.hasFlush = function () {
  let firstSuit = this.cards[0].suit;
  return this.cards.every(function (card) {
    return card.suit === firstSuit;
  });
};

//Test for presence of a straight
pokerHand.prototype.hasStraight = function () {
  this.cards.sort(function (a, b) {
    return a.rankValue - b.rankValue;
  });
  return this.cards.every(function (card, i, cards) {
    if (i > 0) {
      return cards[i].rankValue - cards[i - 1].rankValue === 1;
    } else {
      return true;
    }
  });
};

//Test for presence of straight flush
pokerHand.prototype.hasStraightFlush = function () {
  return this.hasFlush() && this.hasStraight();
};

//Test for presence of royal flush
pokerHand.prototype.hasRoyalFlush = function () {
  return this.hasStraightFlush() && this.highCard() === 14;
};

//Tests for duplicates in the hand
pokerHand.prototype.hasSets = function () {
  //handSets summarizes the duplicates in the hand
  let handSets = {};
  this.cards.forEach(function (card) {
    if (handSets.hasOwnProperty(card.rankValue)) {
      handSets[card.rankValue]++;
    } else {
      handSets[card.rankValue] = 1;
    }
  });

  //stores the sets found in the hand
  let sets = "none";
  //stores the rank value of the first pair found in the hand
  let pairRank;

  //goes through each of the properties in the handSets object
  for (let cardRank in handSets) {
    if (handSets[cardRank] === 4) {
      sets = "Four of a kind";
    }
    if (handSets[cardRank] === 3) {
      if (sets === "Pair") {
        sets = "Full House";
      } else {
        sets = "Three of a Kind";
      }
    }
    if (handSets[cardRank] === 2) {
      if (sets === "Three of a Kind") {
        sets = "Full House";
      } else if (sets === "Pair") {
        sets = "Two Pair";
      } else {
        sets = "Pair";
        pairRank = cardRank;
      }
    }
  }

  if (sets === "Pair" && pairRank >= 11) {
    sets = "Jacks or Better";
  }
  return sets;
};

//Returns the type of poker hand
pokerHand.prototype.handType = function () {
  if (this.hasRoyalFlush()) {
    return "Royal Flush";
  } else if (this.hasStraightFlush()) {
    return "Straight Flush";
  } else if (this.hasFlush()) {
    return "Flush";
  } else if (this.hasStraight()) {
    return "Straight";
  } else {
    let sets = this.hasSets();
    if (sets === "Pair" || sets === "none") {
      sets = "No Winner";
    }
    return sets;
  }
};

//Returns the payout multiplier for each hand
pokerHand.prototype.handOdds = function () {
  switch (this.handType()) {
    case "Royal Flush":
      return 250;
    case "Straight Flush":
      return 50;
    case "Four of a Kind":
      return 25;
    case "Full House":
      return 9;
    case "Flush":
      return 6;
    case "Straight":
      return 4;
    case "Three of a Kind":
      return 3;
    case "Two Pair":
      return 2;
    case "Jack or Better":
      return 1;
    default:
      return 0;
  }
};
