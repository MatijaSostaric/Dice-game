var n = Math.floor((Math.random()*6)+1);
var randomImage1 = "dice" + n + ".png";
var m = Math.floor((Math.random()*6)+1);
var randomImage2 = "dice" + m + ".png";
var randomSource1 = "images/" + randomImage1;
var randomSource2 = "images/" + randomImage2;
var newImage1 = document.querySelectorAll("img")[0]; 
newImage1.setAttribute("src", randomSource1);
var newImage2 = document.querySelectorAll("img")[1]; 
newImage2.setAttribute("src", randomSource2);
if(n<m){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
} else if(n>m){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
} else if(n=m){
    document.querySelector("h1").innerHTML="Draw!";
}

