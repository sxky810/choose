let PlanetA = document.querySelector(".PlanetA");
let text = document.querySelector("p");
let left = document.querySelector(".left");
let right = document.querySelector(".right");

let PlanetB = document.querySelector(".Pluto");
PlanetB.style.display="none";




left.addEventListener( 'click', function(){
console.log("left button");
PlanetA.style.display="none";
PlanetB.style.dsiplay="block";
right.style.display="none";
left.style.display="none";
text.innerHTML = "good place to live";
PlanetB.style.display="flex";
});

right.addEventListener('click' , function(){
console.log("right button");
PlanetB.Ssty







})

























