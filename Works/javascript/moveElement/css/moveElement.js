let up = document.querySelector('.up button');
let down = document.querySelector('.down button').getAttribute('id');
let left = document.querySelector('.left button').getAttribute('id');
let right = document.querySelector('.right button').getAttribute('id');
let moveElementToUp = document.getElementById('moveElementToUp');

console.log(moveElementToUp);
 
let moveBox = document.querySelector('.movedBox');
// console.log(moveBox);
let px = 10;

function moveElement(){
     moveBox.style.up = px;
    
}
