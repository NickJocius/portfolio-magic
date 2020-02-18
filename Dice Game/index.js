var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImg1 = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImg2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImg1);
image2.setAttribute("src", randomImg2);


if(randomNumber2 < randomNumber1){
	document.querySelector("h1").innerHTML = "Player 1 Wins🧨";
}
else if(randomNumber2 > randomNumber1) {
	document.querySelector("h1").innerHTML = "🧨Player 2 Wins";
}
else {
	document.querySelector("h1").innerHTML = "It's a tie!🎈";
}