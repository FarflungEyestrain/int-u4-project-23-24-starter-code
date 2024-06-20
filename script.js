// JavaScript goes here.
let responseOne = document.querySelector('#Yes1');
let responseTwo = document.querySelector('#Yes2');
let responseThree = document.querySelector('#Yes3');
let responseFour = document.querySelector('#Yes4');
let myButton = document.querySelector('#submitButton');
let responseDiv = document.querySelector('#result');
let rotScore = 0;

responseOne.addEventListener("click", function() {
    rotScore = 1;
    console.log(rotScore)
});

responseTwo.addEventListener("click", function() {
    rotScore = rotScore + 1;
    console.log(rotScore)
});

responseThree.addEventListener("click", function() {
    rotScore = rotScore + 1;
    console.log(rotScore)
});

responseFour.addEventListener("click", function() {
    rotScore = rotScore + 1;
    console.log(rotScore)
});

myButton.addEventListener("click", function() {
    if (rotScore === 4 || rotScore === 3) {
        responseDiv.innerHTML= "You have a severe case of brain rot.";
    } else if (rotScore === 2) {
        responseDiv.innerHTML= "You might have a brain rot."; 
    } else {
        responseDiv.innerHTML= "You do not have brain rot.";
    }
    console.log(rotScore)
});