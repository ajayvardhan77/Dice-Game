
// for player1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;// 1- 6
var randomNum1Image = "dice"+randomNumber1+".png" // dice1.png - dice6.png
var randomNum1ImageSrc = "images\"+randomNum1Image
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomNum1ImageSrc)

//for player2
var randomNum2 = Math.floor(Math.random() * 6) + 1;// 1 - 6
var randNum2Img = "dice"+randomNum2+".png"
var randNum2ImgSrc = "images\"+randNum2Img
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randNum2ImgSrc)

//if condition
if(randomNumber1 > randomNum2)
{
  document.querySelector("h1").innerHTML = "🚩 play 1 wins!"
}
else if (randomNum2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "play 2 wins! 🚩"
}
else
{
  document.querySelector("h1").innerHTML = "Draw!"
}
