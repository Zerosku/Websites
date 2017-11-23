'use strict'
// select buttons
const addButton = document.querySelector('#add');
const changeButton = document.querySelector('#change');
const toggleButton = document.querySelector('#toggle');


// select p elements
const firstP = document.querySelector('p');
const secondP = document.querySelector('p:nth-child(2)');
const thirdP = document.querySelector('p:nth-child(3)');

// create eventlisteners

changeButton.addEventListener('click', (evt) => {
    // if lightbox contains class red
    // replace it with 'blue'
    // else
    // replace with 'red'
    if (secondP.classList.contains('red')) {
        secondP.classList.replace('red', 'blue');

    } else {
        secondP.classList.replace('blue', 'red');
    }
});

toggleButton.addEventListener('click', (evt) => {
    thirdP.classList.toggle('green');
});

addButton.addEventListener('click', (evt) => {
   firstP.classList.add('red');
});