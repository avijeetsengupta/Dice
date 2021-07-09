var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomDiceNumber = "dice" + randomNumber + ".png";
var randImageSource = "./images/" + randomDiceNumber;

document.querySelector(".img1").setAttribute("src", randImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randImageSource2 = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randImageSource2);

if(randomNumber > randomNumber2){ 
        document.querySelector("h1").innerText = "player 1 wins 🚩";
}else if(randomNumber < randomNumber2){
    document.querySelector("h1").innerText = "player 2 wins 🚩";
}
else{
    document.querySelector("h1").innerText = " draw ";
}
