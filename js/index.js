// Your code goes here---------------------------------------->
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
// Sets the background of the header section to yellow when a key is pressed.
const keyDwn = document.querySelector('.main-navigation');

document.addEventListener('keydown', function(){
    keyDwn.style.backgroundColor= "yellow";
});


// Drag Event Listener
// Drag an anchor tag and it sets the background color to green.
const draggable = document.querySelector('.nav-container');

document.addEventListener('drag', function(e){
    e.target.style.backgroundColor = 'green';
});


// ReSize Event Listener
// Sets a border on container home
window.addEventListener('resize', function(){
    console.log("Window was resized pal!");
});


// Scroll Event Listener
// creates a div in the form of a red box, containing UpDown, as you scroll.
// Clicking on Div will bump you back to the top.
let scrollY = 0; 
scrollY = window.scrollY;
    
let div = document.createElement('div');
document.body.append(div);
div.id = "boxie";
div.style.padding = "25px";
div.style.color = "black";
div.style.textAlign = "center";
div.style.background = "red"
div.innerHTML = "UpDown";
div.style.borderRadius = '10px';
div.style.position = "fixed";
div.style.right = "100px";
div.style.bottom = " 100px";



window.addEventListener('scroll', function(e){
    scrollY = window.scrollY;
    if(scrollY > 100){
        document.getElementById('boxie').style.display = "block";

    } else if (scrollY < 100) {
        document.getElementById('boxie').style.display = "none";
    }
});

div.addEventListener('click', function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  })

// Load Event Listener
// Logs "Done Loading" when the lambdaschool about page finishes loading.

window.addEventListener('load', function(){
    console.log("Done loading");
});


// Focus Event Listener.
// Changes background and color, when triggered.
// Had to include the color in the global.less file to get it to work.
function pause() {
    document.body.classList.add('paused');
}

function play() {
    document.body.classList.remove('paused');
}

window.addEventListener('blur', pause);
window.addEventListener('focus', play);


//Prevent Default!
// Cancels out the refresh on the anchortags
const noRefresh = document.querySelectorAll('a');
for(i = 0; i < noRefresh.length; i++){
    noRefresh[i].addEventListener('click', function(e){
        e.preventDefault();
    });
}

// Extra shizz------------------------------------------------------------->

// preventDefault(); Utilized on the anchor tags.
// Example from guided-lecture.

// const anchorTag = document.querySelectorAll('a');
// anchorTag.addEventListener('click', function(event){
//  console.log(`Anchor was clicked!`);
//  // This will prevent the form from submitting to action_page.php
//   event.preventDefault();
// });

// ------------------------------------------------------------------------
// Select Event Listener XXXXXXXXXXXXXXXXXXXXXXXXXXX
// Changes selected text to be italic. Turns out not sure I can use select.
// const contentSelect = document.querySelectorAll('h2');

// for(let i = 0; i < contentSelect.length; i++){
//     contentSelect[i].addEventListener('select', function(){
//         contentSelect[i].style.fontStyle = "italic";
//     });
// }


// This one will turn every element I click on in the page to red.

// document.addEventListener('click', function(eventObject){
//     eventObject.target.style.color = "red";
//   });