//colors array
let colors = ['black', 'yellow', 'blue', 'red', 'brown', 'orange', 'grey', 'green', 'pink', 'aqua', 'blueviolet', 'biege', 'purple'];

//get button
let button = document.getElementById('button');

//add event listener
button.addEventListener('click', function(){

 //randomizer
 var randomColor = colors[Math.floor(Math.random() * colors.length)];

 //get container
 let container = document.getElementById('container');

 container.style.background = randomColor;
})