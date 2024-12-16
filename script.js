let PlanetA = document.querySelector(".PlanetA");
let badplanet = document.querySelector(".badplanet");
let text = document.querySelector("p");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let goodalien = document.querySelector(".goodalien");
let badalien = document.querySelector(".badalien");
let PlanetB = document.querySelector(".Pluto");
PlanetB.style.display="none";
badplanet.style.display="none";
goodalien.style.display="none";
badalien.style.display="none";





left.addEventListener( 'click', function(){
    console.log("left button");
    PlanetA.style.display="none";
    goodalien.style.display="none"
    PlanetB.style.dsiplay="block";
    badalien.style.display="none";
    right.style.display="none";
    left.style.display="none";

        text.innerHTML = "good place to live";
    PlanetB.style.display="flex";
});





left.addEventListener('click' , function(){
    console.log("left button");
    PlanetA.Style.display="none"
    goodalien.style.display="Block"
    PlanetB.style.dsiplay="none";
    badalien.style.display="none";
    right.style.display="none";
    left.style.display="block";
    text.innerHTML="you incounter a friendly ailen, game ends!"

    






});

goodalien.addEventListener('click' , function(){
    console.log("left button");
    PlanetA.Style.display="none"
    goodalien.style.display="Block"
    PlanetB.style.dsiplay="none";
    badalien.style.display="none";
    right.style.display="none";
    left.style.display="block";
    text.innerHTML="you incounter a friendly ailen, click to go next"




right.addEventListener('click' , function(){
console.log("right button");
PlanetB.style.display="none";
PlanetA.style.display="none";
left.style.display='none';
right.style.display="none";
badplanet.style.display="block";
text.innerHTML.style="bad choice to stay"

    
});



 badplanet.addEventListener('click', function(){
PlanetA.style.display="none";
PlanetB.style.display="none";
left.style.display="none";
right.style.display="none";
badplanet.style.display="block";
text.innerHTML.style="double click to go next";



});



badalien.addEventListener('click', function(){
    PlanetA.style.display="none";
    PlanetB.style.display="none";
    left.style.display="none";
    right.style.display="none";
    badplanet.style.display="block";
    text.innerHTML.style="you died, refersh to start over";
    




})























