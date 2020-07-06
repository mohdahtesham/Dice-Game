var randomNumber1  = Math.floor(Math.random() * 6) + 1;
var ImageNumber = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",ImageNumber);

var randomNumber2  = Math.floor(Math.random() * 6) + 1;
var ImageNumber2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",ImageNumber2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "player 1 Wins";
} else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "player 2 Wins";

} else{
    document.querySelector("h1").innerHTML = "Its A Draw";

}

