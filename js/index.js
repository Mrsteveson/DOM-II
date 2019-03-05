// Your code goes here---------------------------------------->



// preventDefault(); Utilized on the anchor tags.
// Example from guided-lecture.

// const anchorTag = document.querySelectorAll('a');
// anchorTag.addEventListener('click', function(event){
//  console.log(`Anchor was clicked!`);
//  // This will prevent the form from submitting to action_page.php
//   event.preventDefault();
// });

// Event Listeners Section
// Mouseover Event Listener
// Changes ATag color to blue when moused-over.
const aTag = document.querySelectorAll('a');

for(let i = 0; i < aTag.length; i++){
    aTag[i].addEventListener('mouseover', function(){
        aTag[i].style.color = "blue";
    });
}

// Click Event Listener
// Changes any Ptag section's text to purple and bolds them.
const allPs = document.querySelectorAll('p');

for(let i = 0; i < allPs.length; i++){
    allPs[i].addEventListener('click', function(){
        allPs[i].style.color = "purple";
        allPs[i].style.fontWeight = "bold";
    });
}

// DblClick Event Listener
// Image Nullifier!
const imgNone = document.querySelectorAll('img');

for(let i = 0; i < imgNone.length; i++){
    imgNone[i].addEventListener('dblclick', function(){
        imgNone[i].style.display = "none";
    });
}

// Wheel Event Listener 
// When the mousewheel is scrolled. Sets background to pink.
const wheelie = document.querySelector('.home');

wheelie.addEventListener('wheel', function(){
    wheelie.style.backgroundColor = "pink";
});

// KeyDown Event Listener
// XXXXXXXXXXXXXXXXXXXXXXXXXX
const keyDwn = document.querySelector('.main-navigation');

keyDwn.addEventListener('keydown', function(){
    keyDwn.style.backgroundColor = "yellow";
});

// Select Event Listener XXXXXXXXXXXXXXXXXXXXXXXXXXX
// Changes selected text to be italic. Turns out not sure I can use select.
const contentSelect = document.querySelectorAll('h2');

for(let i = 0; i < contentSelect.length; i++){
    contentSelect[i].addEventListener('select', function(){
        contentSelect[i].style.fontStyle = "italic";
    });
}
























// This one will turn every element I click on in the page to red.

// document.addEventListener('click', function(eventObject){
//     eventObject.target.style.color = "red";
//   });